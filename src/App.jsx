import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './modules/admin/context/AuthContext';
import Login from './modules/admin/pages/Login';
import AdminLayout from './modules/admin/components/AdminLayout';
import Dashboard from './modules/admin/pages/Dashboard';
import PatientModule from './modules/admin/pages/PatientModule';
import AppointmentModule from './modules/admin/pages/AppointmentModule';
import HRModule from './modules/admin/pages/HRModule';
import BillingModule from './modules/admin/pages/BillingModule';
import ReportsModule from './modules/admin/pages/ReportsModule';
import ReferralModule from './modules/admin/pages/ReferralModule';
import TestModule from './modules/admin/pages/TestModule';
import EmployeeModule from './modules/admin/pages/EmployeeModule';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/patients" element={<PatientModule />} />
                    <Route path="/appointments" element={<AppointmentModule />} />
                    <Route path="/employees" element={<EmployeeModule />} />
                    <Route path="/tests" element={<TestModule />} />
                    <Route path="/hr" element={<HRModule />} />
                    <Route path="/billing" element={<BillingModule />} />
                    <Route path="/reports" element={<ReportsModule />} />
                    <Route path="/referrals" element={<ReferralModule />} />
                  </Routes>
                </AdminLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
