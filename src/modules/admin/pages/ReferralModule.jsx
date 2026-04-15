import { useState } from 'react';
import DataTable from '../components/DataTable';

const ReferralModule = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [referrals, setReferrals] = useState([
    { id: 'REF-001', name: 'Dr. Anderson', mobile: '+1-555-0301', patients: 45, commission: 2250.00, status: 'Active' },
    { id: 'REF-002', name: 'Clinic Westside', mobile: '+1-555-0302', patients: 32, commission: 1600.00, status: 'Active' },
    { id: 'REF-003', name: 'Dr. Martinez', mobile: '+1-555-0303', patients: 28, commission: 1400.00, status: 'Active' },
  ]);

  const columns = [
    { key: 'id', header: 'Ref ID' },
    { key: 'name', header: 'Referrer Name' },
    { key: 'mobile', header: 'Mobile' },
    { key: 'patients', header: 'Patients' },
    { key: 'commission', header: 'Commission' },
    { key: 'status', header: 'Status' },
  ];

  const renderCell = (row, key) => {
    if (key === 'commission') {
      return <span className="font-mono text-[#006600]">${row[key].toFixed(2)}</span>;
    }
    if (key === 'status') {
      return <span className="text-[#006600] font-bold">{row[key]}</span>;
    }
    if (key === 'id') {
      return <span className="text-[#0033CC] underline">{row[key]}</span>;
    }
    return row[key];
  };

  const tabs = [
    { id: 'list', label: 'Referral List', icon: '📋' },
    { id: 'rewards', label: 'Withdrawals & Rewards', icon: '🎁' },
    { id: 'statement', label: 'Statement', icon: '📄' },
    { id: 'commission', label: 'Commission Report', icon: '💵' },
    { id: 'summary', label: 'Summary', icon: '📊' },
    { id: 'payout', label: 'Payout Report', icon: '🏦' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">Referral Manager</h1>
        <button className="xp-btn px-4 py-1 font-bold text-[11px] focus:outline-none">+ Add Referral</button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`xp-btn px-3 py-1 text-[11px] focus:outline-none flex items-center gap-1 ${
              activeTab === tab.id ? 'bg-[#316AC5] text-white' : ''
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'list' && (
        <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
          <legend className="xp-legend px-1 font-bold">Manage Referrals</legend>
          
          <div className="mb-3 flex gap-2 items-center">
            <button className="xp-btn px-4 py-1 text-[11px] font-bold focus:outline-none">➕ Add Referral</button>
            <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">📥 Import</button>
            <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">📤 Export</button>
            <div className="ml-auto flex items-center gap-1">
              <span className="font-bold text-[11px]">Search:</span>
              <input type="text" className="xp-input px-1 py-0.5 w-40 text-[11px]" placeholder="Name, ID..." />
            </div>
          </div>

          <DataTable columns={columns} data={referrals} renderCell={renderCell} />
        </fieldset>
      )}

      {activeTab === 'rewards' && (
        <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
          <legend className="xp-legend px-1 font-bold">Withdrawals & Rewards</legend>
          <div className="border border-[#ACA899] bg-white p-8 text-center text-gray-500 text-[11px]">
            Withdrawal and rewards history will be displayed here.
          </div>
        </fieldset>
      )}

      {activeTab === 'statement' && (
        <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
          <legend className="xp-legend px-1 font-bold">Referral Statements</legend>
          <div className="border border-[#ACA899] bg-white p-8 text-center text-gray-500 text-[11px]">
            Referral statements will be displayed here.
          </div>
        </fieldset>
      )}

      {activeTab === 'commission' && (
        <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
          <legend className="xp-legend px-1 font-bold">Commission Report</legend>
          <div className="border border-[#ACA899] bg-white p-8 text-center text-gray-500 text-[11px]">
            Commission reports will be displayed here.
          </div>
        </fieldset>
      )}

      {activeTab === 'summary' && (
        <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
          <legend className="xp-legend px-1 font-bold">Summary</legend>
          <div className="border border-[#ACA899] bg-white p-8 text-center text-gray-500 text-[11px]">
            Summary statistics will be displayed here.
          </div>
        </fieldset>
      )}

      {activeTab === 'payout' && (
        <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
          <legend className="xp-legend px-1 font-bold">Payout Report</legend>
          <div className="border border-[#ACA899] bg-white p-8 text-center text-gray-500 text-[11px]">
            Payout reports will be displayed here.
          </div>
        </fieldset>
      )}
    </div>
  );
};

export default ReferralModule;
