import React, { useState } from 'react'
import { Clock, Briefcase, Building, X, Trash2, CheckCircle2, AlertCircle } from 'lucide-react'

const AdminJobsPage = () => {
  const [activeTab, setActiveTab] = useState('pending') // 'pending' or 'active'
  const [selectedJob, setSelectedJob] = useState(null) // for review modal

  const stats = [
    { title: 'Pending HR Submissions', value: '12', icon: <Clock className="h-6 w-6 text-slate-700" /> },
    { title: 'Active Published Jobs', value: '45', icon: <Briefcase className="h-6 w-6 text-slate-700" /> },
    { title: 'Total Companies', value: '18', icon: <Building className="h-6 w-6 text-slate-700" /> },
  ]

  const pendingJobs = [
    {
      id: 1,
      company: 'Tech Corp Cambodia',
      hrName: 'Sok Dara',
      companyCode: 'TC',
      role: 'Senior Frontend Developer',
      type: 'Full-time',
      salary: '$1500 - $2500',
      location: 'Phnom Penh',
      skills: 'React, Tailwind CSS, TypeScript',
      pax: '02',
      applyUrl: 'https://techcorp.kh/careers/sr-frontend',
      description: 'We are seeking an experienced Frontend Developer to lead our UI engineering team and build next-generation applications.',
      applyEmail: 'hr@techcorp.kh',
      date: '28 Apr 2026',
      status: 'Pending Review'
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd',
      hrName: 'Chan Sophea',
      companyCode: 'DS',
      role: 'Full Stack Engineer',
      type: 'Full-time',
      salary: '$1800 - $3000',
      location: 'Remote',
      skills: 'Node.js, React, PostgresSQL',
      pax: '01',
      applyUrl: 'https://digitalsolutions.com/jobs/fullstack',
      description: 'Join our fully remote team and work on deploying and maintaining robust web applications for global clients.',
      applyEmail: 'hr@digitalsolutions.com',
      date: '27 Apr 2026',
      status: 'Pending Review'
    },
    {
      id: 3,
      company: 'StartUp Hub',
      hrName: 'Chan Sophea',
      companyCode: 'SH',
      role: 'Junior Python Developer',
      type: 'Full-time',
      salary: '$600 - $1000',
      location: 'Siem Reap',
      skills: 'Python, Django, REST APIs',
      pax: '03',
      applyUrl: 'https://startuphub.kh/apply',
      description: 'Looking for a passionate junior developer eager to write clean Python backend services and learn startup dynamics.',
      applyEmail: 'hr@startuphub.kh',
      date: '26 Apr 2026',
      status: 'Pending Review'
    },
    {
      id: 4,
      company: 'CloudTech Asia',
      hrName: 'Long Sreyleak',
      companyCode: 'CA',
      role: 'DevOps Engineer',
      type: 'Full-time',
      salary: '$1200 - $2000',
      location: 'Phnom Penh',
      skills: 'AWS, Docker, CI/CD, Kubernetes',
      pax: '01',
      applyUrl: 'https://cloudtech.asia/careers',
      description: 'Responsible for optimizing cloud infrastructure and automating delivery pipelines for various enterprise products.',
      applyEmail: 'hr@cloudtech.asia',
      date: '25 Apr 2026',
      status: 'Pending Review'
    }
  ]

  const activeJobs = [
    { id: 1, company: 'App Factory', code: 'AF', role: 'Mobile App Developer', location: 'Remote', date: '20 Apr 2026', applicants: '54 Applied', status: 'Active' },
    { id: 2, company: 'Khmer Devs', code: 'KD', role: 'Backend Engineer', location: 'Phnom Penh', date: '18 Apr 2026', applicants: '32 Applied', status: 'Active' },
    { id: 3, company: 'Angkor Tech', code: 'AT', role: 'UI/UX Designer', location: 'Siem Reap', date: '15 Apr 2026', applicants: '18 Applied', status: 'Active' },
    { id: 4, company: 'Mekong Software', code: 'MS', role: 'QA Engineer', location: 'Phnom Penh', date: '12 Apr 2026', applicants: '24 Applied', status: 'Active' },
    { id: 5, company: 'PlovDev Partners', code: 'PP', role: 'Data Analyst', location: 'Remote', date: '10 Apr 2026', applicants: '41 Applied', status: 'Active' },
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

      {/* Dynamic Tab Tables */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {activeTab === 'pending' ? (
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
                {pendingJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        {/* Company Code Icon */}
                        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-650 shrink-0 font-bold">
                          {job.companyCode}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 leading-tight">{job.company}</span>
                          <span className="text-[10px] text-slate-400 font-normal">HR: {job.hrName}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-800 font-semibold">{job.role}</td>
                    <td className="py-4 px-6 text-cyan-600 font-semibold">{job.location}</td>
                    <td className="py-4 px-6 text-slate-500">{job.date}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-yellow-50 text-amber-500 border border-yellow-100 text-[10px] font-semibold">
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
                {activeJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 text-slate-650 shrink-0 font-bold">
                          {job.code}
                        </div>
                        <span className="font-bold text-slate-800">{job.company}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-800 font-semibold">{job.role}</td>
                    <td className="py-4 px-6 text-cyan-600 font-semibold">{job.location}</td>
                    <td className="py-4 px-6 text-slate-500">{job.date}</td>
                    <td className="py-4 px-6 text-slate-500 font-bold">{job.applicants}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-50 text-green-600 border border-green-100 text-[10px] font-semibold">
                        {job.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-red-200 hover:bg-red-50 text-red-500 font-semibold rounded duration-200 text-[10px]">
                        <Trash2 size={12} />
                        Delete Post
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Table Footer */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-slate-100 bg-slate-50/30 text-xs">
          <span className="text-slate-500">
            {activeTab === 'pending' ? 'Showing 1 to 4 of 4 entries' : 'Showing 1 to 5 of 5 entries'}
          </span>
          <div className="flex items-center gap-2 font-semibold text-slate-650">
            <span className="cursor-pointer text-slate-900 border border-slate-300 bg-white rounded px-2 py-0.5">1</span>
            <span className="cursor-pointer hover:text-cyan-500 px-1">2</span>
            <span className="cursor-pointer hover:text-cyan-500 px-1">3</span>
            <span className="text-slate-400">...</span>
            <span className="cursor-pointer hover:text-cyan-500 px-1">&gt;</span>
          </div>
        </div>
      </div>

      {/* JOB REVIEW MODAL (Image 8) */}
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
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.company}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Title</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.role}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Type</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.type}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Salary</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.salary}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Location</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.location}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Skills</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.skills}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">PAX</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.pax}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Apply URL</span>
                <span className="col-span-2 text-cyan-600 font-bold hover:underline truncate cursor-pointer">: {selectedJob.applyUrl}</span>
              </div>

              {/* Description */}
              <div className="space-y-1.5 pt-2">
                <span className="text-slate-500 block">Description</span>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-650 font-normal leading-relaxed">
                  {selectedJob.description}
                </div>
              </div>

              {/* Apply Email */}
              <div className="grid grid-cols-3 gap-2 pt-2 items-center">
                <span className="text-slate-500">Apply</span>
                <span className="col-span-2 text-slate-900 font-bold">: {selectedJob.applyEmail}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end items-center gap-3 px-6 py-4 border-t border-slate-100 bg-slate-5/50">
              <button 
                onClick={() => setSelectedJob(null)}
                className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold rounded-lg duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert('Job approved and published successfully!')
                  setSelectedJob(null)
                }}
                className="px-5 py-2 bg-black hover:bg-slate-800 text-white font-bold rounded-lg duration-200"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminJobsPage
