import api from './authApi';

export const getPatients = async () => {
  const response = await api.get('/patients');
  return response.data;
};

export const getPatient = async (id) => {
  const response = await api.get(`/patients/${id}`);
  return response.data;
};

export const createPatient = async (data) => {
  const response = await api.post('/patients', data);
  return response.data;
};

export const updatePatient = async (id, data) => {
  const response = await api.put(`/patients/${id}`, data);
  return response.data;
};

export const deletePatient = async (id) => {
  const response = await api.delete(`/patients/${id}`);
  return response.data;
};

export const getAppointments = async () => {
  const response = await api.get('/appointments');
  return response.data;
};

export const createAppointment = async (data) => {
  const response = await api.post('/appointments', data);
  return response.data;
};

export const getEmployees = async () => {
  const response = await api.get('/employees');
  return response.data;
};

export const getTests = async () => {
  const response = await api.get('/tests');
  return response.data;
};

export const createTest = async (data) => {
  const response = await api.post('/tests', data);
  return response.data;
};

export const getBills = async () => {
  const response = await api.get('/bills');
  return response.data;
};

export const createBill = async (data) => {
  const response = await api.post('/bills', data);
  return response.data;
};

export const getReports = async () => {
  const response = await api.get('/reports');
  return response.data;
};

export const getReferrals = async () => {
  const response = await api.get('/referrals');
  return response.data;
};

export const getDashboardStats = async () => {
  const response = await api.get('/dashboard/stats');
  return response.data;
};
