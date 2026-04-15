import { useState } from 'react';
import StatsCard from '../components/StatsCard';

const ReportsModule = () => {
  const [activeReport, setActiveReport] = useState('financial');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  const reportTypes = [
    { id: 'financial', label: 'Financial Report', icon: '💰' },
    { id: 'patient', label: 'Patient Report', icon: '👤' },
    { id: 'lab', label: 'Lab Report', icon: '🔬' },
    { id: 'collection', label: 'Collection Report', icon: '📊' },
  ];

  const mockData = [
    { label: 'Total Income', value: '$80,000', change: '+15% from last month' },
    { label: 'Total Expense', value: '$20,000', change: '-5% from last month' },
    { label: 'Net Profit', value: '$60,000', change: '+20% from last month' },
    { label: 'Outstanding', value: '$4,800', change: 'Due from patients' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">Reports</h1>
      </div>

      {/* Report Type Tabs */}
      <div className="flex gap-1 mb-4">
        {reportTypes.map((report) => (
          <button
            key={report.id}
            onClick={() => setActiveReport(report.id)}
            className={`xp-btn px-4 py-1 text-[11px] font-bold focus:outline-none flex items-center gap-1 ${
              activeReport === report.id ? 'bg-[#316AC5] text-white' : ''
            }`}
          >
            <span>{report.icon}</span>
            {report.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <fieldset className="xp-fieldset p-3 mb-4 bg-[#ECE9D8]">
        <legend className="xp-legend px-1 font-bold">Report Filters</legend>
        <div className="flex gap-4 items-end text-[11px]">
          <div className="flex flex-col gap-1">
            <label className="font-bold">From Date</label>
            <input type="date" value={dateRange.from} onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })} className="xp-input px-1 py-0.5" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold">To Date</label>
            <input type="date" value={dateRange.to} onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })} className="xp-input px-1 py-0.5" />
          </div>
          <button className="xp-btn px-4 py-1 font-bold focus:outline-none">Generate Report</button>
          <button className="xp-btn px-4 py-1 focus:outline-none">Export to PDF</button>
          <button className="xp-btn px-4 py-1 focus:outline-none">Export to Excel</button>
        </div>
      </fieldset>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {mockData.map((item, idx) => (
          <StatsCard key={idx} title={item.label} value={item.value} change={item.change} />
        ))}
      </div>

      {/* Report Content */}
      <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
        <legend className="xp-legend px-1 font-bold">{reportTypes.find(r => r.id === activeReport)?.label}</legend>
        
        <div className="border border-[#ACA899] bg-white h-[300px] overflow-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap cursor-default text-[11px]">
            <thead>
              <tr>
                <th className="xp-th px-2 py-1 font-normal">Date</th>
                <th className="xp-th px-2 py-1 font-normal">Description</th>
                <th className="xp-th px-2 py-1 font-normal text-right">Debit</th>
                <th className="xp-th px-2 py-1 font-normal text-right">Credit</th>
                <th className="xp-th px-2 py-1 font-normal text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="xp-tr-hover border-b border-[#F0F0F0]">
                <td className="px-2 py-1 border-r border-[#F0F0F0]">14-APR-2026</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0]">Patient Collection - Lab Tests</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0] text-right font-mono">$4,250.00</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0] text-right font-mono">-</td>
                <td className="px-2 py-1 text-right font-mono font-bold">$4,250.00</td>
              </tr>
              <tr className="xp-tr-hover border-b border-[#F0F0F0]">
                <td className="px-2 py-1 border-r border-[#F0F0F0]">14-APR-2026</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0]">Lab Supplies Purchase</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0] text-right font-mono">-</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0] text-right font-mono text-[#CC0000]">$1,200.00</td>
                <td className="px-2 py-1 text-right font-mono font-bold">$3,050.00</td>
              </tr>
              <tr className="xp-tr-hover border-b border-[#F0F0F0]">
                <td className="px-2 py-1 border-r border-[#F0F0F0]">13-APR-2026</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0]">Patient Collection - Lab Tests</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0] text-right font-mono">$3,800.00</td>
                <td className="px-2 py-1 border-r border-[#F0F0F0] text-right font-mono">-</td>
                <td className="px-2 py-1 text-right font-mono font-bold">$6,850.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
    </div>
  );
};

export default ReportsModule;
