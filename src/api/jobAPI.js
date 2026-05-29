import axiosClient from "./axiosClient";

export async function GetAdminJobs(status) {
  const response = await axiosClient.get("/admin/jobs", {
    params: { status }
  });
  return response.data; // returns { jobs: [...] }
}

export async function ApproveJob(id) {
  const response = await axiosClient.patch(`/admin/jobs/${id}/approve`);
  return response.data;
}

export async function RejectJob(id) {
  const response = await axiosClient.patch(`/admin/jobs/${id}/reject`);
  return response.data;
}

export async function DeleteJob(id) {
  const response = await axiosClient.delete(`/admin/jobs/${id}`);
  return response.data;
}
