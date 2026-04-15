import { useState } from 'react';
import DataTable from '../components/DataTable';

const BillingModule = () => {
  const [bills, setBills] = useState([
    { id: 'BILL-001', date: '14-APR-2026', patient: 'Smith, John', tests: 'CBC, KFT', amount: 40.00, status: 'Paid' },
    { id: 'BILL-002', date: '14-APR-2026', patient: 'Doe, Jane', tests: 'LFT, Lipid', amount: 55.00, status: 'Due' },
    { id: 'BILL-003', date: '13-APR-2026', patient: 'Williams, R.', tests: 'CBC', amount: 15.00, status: 'Paid' },
  ]);

  const columns = [
    { key: 'id', header: 'Bill ID' },
    { key: 'date', header: 'Date' },
    { key: 'patient', header: 'Patient' },
    { key: 'tests', header: 'Tests' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status' },
  ];

  const renderCell = (row, key) => {
    if (key === 'amount') {
      return <span className="font-mono">${row[key].toFixed(2)}</span>;
    }
    if (key === 'status') {
      return (
        <span className={`font-bold ${row[key] === 'Paid' ? 'text-[#006600]' : 'text-[#CC0000]'}`}>
          {row[key]}
        </span>
      );
    }
    if (key === 'id') {
      return <span className="text-[#0033CC] underline">{row[key]}</span>;
    }
    return row[key];
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">Billing & Accounting</h1>
        <button className="xp-btn px-4 py-1 font-bold text-[11px] focus:outline-none">+ Create Bill</button>
      </div>

      <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
        <legend className="xp-legend px-1 font-bold">Bill Management</legend>
        
        <div className="mb-3 flex gap-2 items-center">
          <button className="xp-btn px-4 py-1 text-[11px] text-[#006600] font-bold focus:outline-none">+ Create Bill</button>
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">Bill List</button>
          <div className="h-5 w-px bg-[#ACA899] mx-1"></div>
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">Due Report</button>
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">Paid Report</button>
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">To Collect Report</button>
          <div className="ml-auto flex items-center gap-1">
            <span className="font-bold text-[11px]">Search:</span>
            <input type="text" className="xp-input px-1 py-0.5 w-40 text-[11px]" placeholder="Bill ID, Patient..." />
          </div>
        </div>

        <DataTable columns={columns} data={bills} renderCell={renderCell} />
      </fieldset>
    </div>
  );
};

export default BillingModule;
