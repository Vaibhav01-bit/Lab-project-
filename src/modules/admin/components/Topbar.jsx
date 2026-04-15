import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const leaveTimeoutRef = useRef(null);

  const menus = {
    dashboard: { label: 'Dashboard', items: [] },
    patient: {
      label: 'Patient',
      items: [
        { label: 'Create Patient', path: '/patients?action=create' },
        { label: 'Patient List', path: '/patients' },
        { divider: true },
        { label: 'Category', path: '/patients?view=category' },
      ]
    },
    tests: {
      label: 'Tests',
      items: [
        { label: 'Create New Test', path: '/tests?action=create' },
        { label: 'Tests List', path: '/tests' },
        { label: 'Add Tests', path: '/tests?view=add' },
      ]
    },
    employee: {
      label: 'Employee',
      items: [
        { label: 'List', path: '/employees' },
        { label: 'Create', path: '/employees?action=create' },
        { divider: true },
        { label: 'Department', path: '/hr?view=department' },
        { label: 'Designation', path: '/hr?view=designation' },
      ]
    },
    pathology: {
      label: 'Pathology',
      items: [
        { label: 'Lab Test', path: '/tests?category=pathology' },
        { label: 'Category', path: '/tests?view=pathology-category' },
        { label: 'Reports', path: '/reports?category=pathology' },
      ]
    },
    billing: {
      label: 'Billing',
      items: [
        { label: 'Create Test Bill', path: '/billing?action=create' },
        { label: 'Bill List', path: '/billing' },
        { divider: true },
        { label: 'Due Report', path: '/reports?type=due' },
        { label: 'Paid Report', path: '/reports?type=paid' },
        { label: 'To Collect Report', path: '/reports?type=collect' },
      ]
    },
    referral: {
      label: 'Referral Manager',
      items: [
        { label: 'Referral List', path: '/referrals' },
        { label: 'Withdrawals & Rewards', path: '/referrals?view=rewards' },
        { label: 'Statement', path: '/referrals?view=statement' },
        { label: 'Commission Report', path: '/referrals?view=commission' },
        { label: 'Summary', path: '/referrals?view=summary' },
        { label: 'Payout Report', path: '/referrals?view=payout' },
      ]
    },
  };

  const handleMenuEnter = (key) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (menus[key]?.items.length > 0) {
      setActiveMenu(key);
    }
  };

  const handleMenuLeave = (key) => {
    if (menus[key]?.items.length > 0) {
      leaveTimeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
      }, 100);
    }
  };

  const handleDropdownEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handleDropdownLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  const handleMenuClick = (menuKey) => {
    if (menus[menuKey]?.items.length === 0) {
      const pathMap = {
        dashboard: '/dashboard',
      };
      navigate(pathMap[menuKey] || '/');
      setActiveMenu(null);
    } else {
      setActiveMenu(activeMenu === menuKey ? null : menuKey);
    }
  };

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
    setActiveMenu(null);
  };

  return (
    <div className="xp-menu-bar flex text-[11px] px-1 relative z-50 shrink-0 bg-[#ECE9D8]">
      {Object.entries(menus).map(([key, menu]) => (
        <div
          key={key}
          className="dropdown-parent relative px-2 py-1 hover:bg-[#316AC5] hover:text-white cursor-pointer rounded-sm"
          onMouseEnter={() => handleMenuEnter(key)}
          onMouseLeave={() => handleMenuLeave(key)}
        >
          <span onClick={() => handleMenuClick(key)}>{menu.label}</span>
          {menu.items.length > 0 && activeMenu === key && (
            <div
              className="dropdown-menu absolute left-0 top-[100%] min-w-[150px] text-black py-0.5 mt-[1px] z-[60]"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              {menu.items.map((item, idx) =>
                item.divider ? (
                  <div key={idx} className="h-px bg-[#ACA899] mx-1 my-0.5 border-b border-white" />
                ) : (
                  <div
                    key={idx}
                    className="px-4 py-1 xp-menu-item cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.label}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
      <div className="ml-auto px-2 py-1 hover:bg-[#316AC5] hover:text-white cursor-pointer rounded-sm">Help</div>
    </div>
  );
};

export default Topbar;
