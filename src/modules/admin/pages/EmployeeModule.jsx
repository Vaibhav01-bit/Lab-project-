import { useState } from 'react';
import DataTable from '../components/DataTable';

const EmployeeModule = () => {
  const [employees, setEmployees] = useState([
    { id: 'EMP-001', name: 'Adams, Dr. John', designation: 'Senior Doctor', department: 'General', mobile: '+1-555-0101', status: 'Active' },
    { id: 'EMP-002', name: 'Carter, Dr. Sarah', designation: 'Consultant', department: 'Cardiology', mobile: '+1-555-0102', status: 'Active' },
    { id: 'EMP-003', name: 'Miller, Robert', designation: 'Lab Technician', department: 'Pathology', mobile: '+1-555-0103', status: 'Active' },
  ]);

  const columns = [
    { key: 'id', header: 'Emp ID' },
    { key: 'name', header: 'Name' },
    { key: 'designation', header: 'Designation' },
    { key: 'department', header: 'Department' },
    { key: 'mobile', header: 'Mobile' },
    { key: 'status', header: 'Status' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">Employee Management</h1>
        <button className="xp-btn px-4 py-1 font-bold text-[11px] focus:outline-none">+ Add Employee</button>
      </div>

      <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
        <legend className="xp-legend px-1 font-bold">Employee List</legend>
        
        <div className="mb-3 flex gap-2 items-center">
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">➕ Add New</button>
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">📋 Department</button>
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">📋 Designation</button>
          <div className="ml-auto flex items-center gap-1">
            <span className="font-bold text-[11px]">Search:</span>
            <input type="text" className="xp-input px-1 py-0.5 w-40 text-[11px]" placeholder="Search..." />
          </div>
        </div>

        <DataTable columns={columns} data={employees} />
      </fieldset>
    </div>
  );
};

export default EmployeeModule;
