import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Topbar from './Topbar';
import { useAuth } from '../context/AuthContext';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const { logout } = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');

  const handleMenuClick = (view) => {
    setCurrentView(view);
  };

  const handleLogout = () => {
    logout();
  };

  const getTitle = () => {
    const titles = {
      '/dashboard': 'System Dashboard',
      '/patients': 'Patient Management',
      '/appointments': 'Appointments',
      '/employees': 'Employee Management',
      '/tests': 'Test Management',
      '/hr': 'Human Resources',
      '/billing': 'Billing & Accounting',
      '/reports': 'Reports',
      '/referrals': 'Referral Manager',
    };
    return titles[location.pathname] || 'MEDILIMS PRO 2026';
  };

  return (
    <div className="w-full max-w-7xl h-screen max-h-[900px] mx-auto flex flex-col xp-bg rounded-t-[8px] rounded-b-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-[#0055E5] overflow-hidden bg-[#2A5DB0] p-4">
      <div className="flex flex-col flex-grow overflow-hidden rounded-t-[6px] bg-[#ECE9D8] border-2 border-[#0055E5]">
        {/* XP Title Bar */}
        <div className="xp-titlebar h-8 flex items-center justify-between px-1.5 shrink-0 select-none cursor-default rounded-t-[4px]">
          <div className="flex items-center gap-1.5 xp-title-text text-[13px] tracking-wide">
            <div className="w-4 h-4 bg-white text-[#0055E5] font-bold flex items-center justify-center text-[10px] shadow-sm">M</div>
            MEDILIMS PRO 2026 - {getTitle()}
          </div>
          <div className="flex gap-[2px]">
            <button className="xp-window-btn w-6 h-6 flex items-center justify-center pb-2 text-sm leading-none focus:outline-none">_</button>
            <button className="xp-window-btn w-6 h-6 flex items-center justify-center text-xs leading-none focus:outline-none">□</button>
            <button onClick={handleLogout} className="xp-close-btn w-6 h-6 flex items-center justify-center text-xs leading-none focus:outline-none">X</button>
          </div>
        </div>

        {/* Menu Bar */}
        <Topbar onMenuClick={handleMenuClick} />

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar currentPath={location.pathname} />
          
          {/* Content */}
          <div className="flex-1 flex flex-col overflow-hidden bg-white border-t border-[#ACA899]">
            <div className="flex-grow overflow-auto p-3">
              {children}
            </div>
            
            {/* Status Bar */}
            <div className="xp-statusbar flex text-[11px] shrink-0 bg-[#ECE9D8]">
              <div className="xp-status-pane px-2 py-0.5">Ready</div>
              <div className="flex-1"></div>
              <div className="xp-status-pane px-2 py-0.5">User: Admin</div>
              <div className="xp-status-pane px-2 py-0.5">Date: {new Date().toLocaleDateString('en-GB')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ currentPath }) => {
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/patients', label: 'Patient', icon: '👤' },
    { path: '/appointments', label: 'Appointments', icon: '📅' },
    { path: '/employees', label: 'Employee', icon: '👥' },
    { path: '/tests', label: 'Tests', icon: '🔬' },
    { path: '/hr', label: 'HR', icon: '📋' },
    { path: '/billing', label: 'Billing', icon: '💰' },
    { path: '/reports', label: 'Reports', icon: '📈' },
    { path: '/referrals', label: 'Referral', icon: '🎁' },
  ];

  return (
    <div className="w-44 shrink-0 bg-[#ECE9D8] border-r border-[#ACA899] p-2 overflow-y-auto">
      <div className="text-[10px] font-bold text-[#0033CC] mb-2 px-1">Navigation</div>
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center gap-1.5 px-2 py-1 text-[11px] rounded-sm mb-0.5 ${
            currentPath === item.path
              ? 'bg-[#316AC5] text-white'
              : 'hover:bg-[#316AC5] hover:text-white'
          }`}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default AdminLayout;
