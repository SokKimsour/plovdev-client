import React, { useState, useEffect } from 'react'
import { Clock, Briefcase, Building, X, Trash2, CheckCircle2, AlertCircle } from 'lucide-react'
import { GetAdminJobs, ApproveJob, RejectJob, DeleteJob } from '../../api/jobAPI'

const AdminJobsPage = () => {
  const [activeTab, setActiveTab] = useState('pending') // 'pending' or 'active'
  const [jobsList, setJobsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [selectedJob, setSelectedJob] = useState(null) // for review modal

  // Stats counters
  const [pendingCount, setPendingCount] = useState(0)
  const [activeCount, setActiveCount] = useState(0)
  const [companiesCount, setCompaniesCount] = useState(0)

  // Fetch all stats once on mount
  const fetchStats = async () => {
    try {
      const allJobsRes = await GetAdminJobs();
      const allJobs = allJobsRes.jobs || [];
      
      const pending = allJobs.filter(j => j.status === 'pending review').length;
      const active = allJobs.filter(j => j.status === 'published').length;
      
      // Count unique company names
      const uniqueCompanies = new Set(allJobs.map(j => j.company_name?.trim().toLowerCase()).filter(Boolean));

      setPendingCount(pending);
      setActiveCount(active);
      setCompaniesCount(uniqueCompanies.size);
    } catch (err) {
      console.error('Failed to fetch jobs stats', err);
    }
  };

  // Fetch current tab list
  const fetchTabData = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const statusFilter = activeTab === 'pending' ? 'pending review' : 'published';
      const response = await GetAdminJobs(statusFilter);
      setJobsList(response.jobs || []);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || err.message || 'Failed to load jobs list.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchTabData();
  }, [activeTab]);

  const handleApprove = async (id) => {
    try {
      await ApproveJob(id);
      setSelectedJob(null);
      fetchStats();
      fetchTabData();
    } catch (err) {
      alert(err.response?.data?.message || err.message || 'Failed to approve job.');
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm('Are you sure you want to reject this job submission?')) return;
    try {
      await RejectJob(id);
      setSelectedJob(null);
      fetchStats();
      fetchTabData();
    } catch (err) {
      alert(err.response?.data?.message || err.message || 'Failed to reject job.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this published post?')) return;
    try {
      await DeleteJob(id);
      fetchStats();
      fetchTabData();
    } catch (err) {
      alert(err.response?.data?.message || err.message || 'Failed to delete job post.');
    }
  };

  // Helpers
  const getCompanyCode = (name) => {
    if (!name) return 'CO';
    return name
      .split(' ')
      .map(w => w[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const stats = [
    { title: 'Pending HR Submissions', value: pendingCount.toString(), icon: <Clock className="h-6 w-6 text-slate-700" /> },
    { title: 'Active Published Jobs', value: activeCount.toString(), icon: <Briefcase className="h-6 w-6 text-slate-700" /> },
    { title: 'Total Companies', value: companiesCount.toString(), icon: <Building className="h-6 w-6 text-slate-700" /> },
  ]

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Job Board</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-center justify-between h-[120px]">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</h3>
            </div>
            <div className="p-3 border border-slate-205 rounded-full text-slate-700">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Centered Switcher Tab Bar */}
      <div className="flex justify-center my-2">
        <div className="flex items-center gap-12 bg-transparent">
          {/* Pending approvals tab */}
          <button 
            onClick={() => setActiveTab('pending')}
            className={`px-8 py-2 text-sm font-bold duration-200 transition-all ${
              activeTab === 'pending'
                ? 'bg-slate-200 text-slate-850 rounded-md border border-amber-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Pending Approvals
          </button>
          
          {/* Active jobs tab */}
          <button 
            onClick={() => setActiveTab('active')}
            className={`px-8 py-2 text-sm font-bold duration-200 transition-all ${
              activeTab === 'active'
                ? 'bg-slate-200 text-slate-850 rounded-md border border-amber-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Active Jobs
          </button>
        </div>
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2 text-sm">
          <AlertCircle size={18} />
          {errorMsg}
        </div>
      )}

      {/* Dynamic Tab Tables */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative min-h-[200px]">
        {loading && (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-10 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-300 border-t-transparent"></div>
          </div>
        )}

        {jobsList.length === 0 && !loading ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <Briefcase size={40} className="mb-2 text-slate-300" />
            <p className="text-sm font-semibold">No listings found in this category.</p>
          </div>
        ) : (
          activeTab === 'pending' ? (
            /* PENDING APPROVALS TABLE */
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-4 px-6">Company</th>
                    <th className="py-4 px-6">Job Role</th>
                    <th className="py-4 px-6">Location</th>
                    <th className="py-4 px-6">Submitted Date</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                  {jobsList.map((job) => (
                    <tr key={job.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-650 shrink-0 font-bold">
                            {getCompanyCode(job.company_name)}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800 leading-tight">{job.company_name}</span>
                            <span className="text-[10px] text-slate-400 font-normal">HR: {job.hr_name || 'N/A'}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold">{job.title}</td>
                      <td className="py-4 px-6 text-cyan-600 font-semibold">{job.location}</td>
                      <td className="py-4 px-6 text-slate-500">{formatDate(job.createdAt)}</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-yellow-50 text-amber-500 border border-yellow-100 text-[10px] font-semibold capitalize">
                          {job.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex justify-end items-center gap-2">
                          <button 
                            onClick={() => setSelectedJob(job)}
                            className="px-4 py-1.5 bg-black hover:bg-slate-800 text-white rounded font-bold transition duration-200 text-[10px]"
                          >
                            Review
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* ACTIVE JOBS TABLE */
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-4 px-6">Company</th>
                    <th className="py-4 px-6">Job Role</th>
                    <th className="py-4 px-6">Location</th>
                    <th className="py-4 px-6">Published Date</th>
                    <th className="py-4 px-6">Applicants</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                  {jobsList.map((job) => (
                    <tr key={job.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-650 shrink-0 font-bold">
                            {getCompanyCode(job.company_name)}
                          </div>
                          <span className="font-bold text-slate-800">{job.company_name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-800 font-semibold">{job.title}</td>
                      <td className="py-4 px-6 text-cyan-600 font-semibold">{job.location}</td>
                      <td className="py-4 px-6 text-slate-500">{formatDate(job.publishedAt)}</td>
                      <td className="py-4 px-6 text-slate-500 font-bold">{job.applicants || 0} Applied</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-50 text-green-600 border border-green-100 text-[10px] font-semibold capitalize">
                          active
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button 
                          onClick={() => handleDelete(job.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-red-200 hover:bg-red-50 text-red-500 font-semibold rounded duration-200 text-[10px]"
                        >
                          <Trash2 size={12} />
                          Delete Post
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}

        {/* Table Footer */}
        {jobsList.length > 0 && (
          <div className="flex justify-between items-center px-6 py-4 border-t border-slate-100 bg-slate-50/30 text-xs">
            <span className="text-slate-500">
              Showing 1 to {jobsList.length} of {jobsList.length} entries
            </span>
            <div className="flex items-center gap-2 font-semibold text-slate-650">
              <span className="cursor-pointer text-slate-900 border border-slate-300 bg-white rounded px-2 py-0.5">1</span>
              <span className="cursor-pointer hover:text-cyan-500 px-1">2</span>
              <span className="cursor-pointer hover:text-cyan-500 px-1">3</span>
              <span className="text-slate-400">...</span>
              <span className="cursor-pointer hover:text-cyan-500 px-1">&gt;</span>
            </div>
          </div>
        )}
      </div>

      {/* JOB REVIEW MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden border border-slate-100 animate-in fade-in duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Job Review</h2>
              <button 
                onClick={() => setSelectedJob(null)}
                className="text-slate-400 hover:text-slate-650 duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 text-xs font-semibold text-slate-700 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Company</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.company_name}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Title</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.title}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Type</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.emp_type || 'N/A'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Salary</span>
                <span className="col-span-2 text-slate-900 font-bold">
                  : {selectedJob.salary_min && selectedJob.salary_max 
                    ? `$${Math.round(selectedJob.salary_min)} - $${Math.round(selectedJob.salary_max)}` 
                    : 'N/A'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Location</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.location}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Skills</span>
                <span className="col-span-2 text-slate-900 font-bold">
                  : {Array.isArray(selectedJob.skills) ? selectedJob.skills.join(', ') : (selectedJob.skills || 'N/A')}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">PAX</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.open_positions || '01'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Apply URL</span>
                <span 
                  onClick={() => selectedJob.apply && window.open(selectedJob.apply, '_blank')}
                  className="col-span-2 text-cyan-600 font-bold hover:underline truncate cursor-pointer"
                >
                  : {selectedJob.apply || 'N/A'}
                </span>
              </div>

              {/* Description */}
              <div className="space-y-1.5 pt-2">
                <span className="text-slate-500 block">Description</span>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-650 font-normal leading-relaxed">
                  {selectedJob.description || 'No description provided.'}
                </div>
              </div>

              {/* Apply Email */}
              <div className="grid grid-cols-3 gap-2 pt-2 items-center">
                <span className="text-slate-500">Apply</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.contact_email || 'N/A'}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center px-6 py-4 border-t border-slate-100 bg-slate-50/50">
              {/* Reject Button on Left */}
              <button 
                onClick={() => handleReject(selectedJob.id)}
                className="px-4 py-2 border border-red-300 hover:bg-red-50 text-red-600 font-bold rounded-lg duration-200"
              >
                Reject
              </button>
              
              {/* Right Footer Buttons */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold rounded-lg duration-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => handleApprove(selectedJob.id)}
                  className="px-5 py-2 bg-black hover:bg-slate-800 text-white font-bold rounded-lg duration-200"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminJobsPage
