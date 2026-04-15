import { useState } from 'react';
import DataTable from '../components/DataTable';

const AppointmentModule = () => {
  const [appointments, setAppointments] = useState([
    { id: 'APT-992', time: '09:30 AM', patient: 'Smith, John', doctor: 'Dr. Adams', status: 'Waiting' },
    { id: 'APT-993', time: '09:45 AM', patient: 'Doe, Jane', doctor: 'Dr. Adams', status: 'In Consult' },
    { id: 'APT-994', time: '10:00 AM', patient: 'Williams, Robert', doctor: 'Dr. Carter', status: 'Booked' },
  ]);

  const columns = [
    { key: 'id', header: 'Appt ID' },
    { key: 'time', header: 'Time' },
    { key: 'patient', header: 'Patient Name' },
    { key: 'doctor', header: 'Doctor' },
    { key: 'status', header: 'Status' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Waiting': return 'text-[#006600]';
      case 'In Consult': return 'text-[#0033CC]';
      default: return 'text-gray-600';
    }
  };

  const renderCell = (row, key) => {
    if (key === 'status') {
      return <span className={`font-bold ${getStatusColor(row[key])}`}>{row[key]}</span>;
    }
    if (key === 'id') {
      return <span className="text-[#0033CC] underline">{row[key]}</span>;
    }
    return row[key];
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">Appointments</h1>
        <button className="xp-btn px-4 py-1 font-bold text-[11px] focus:outline-none">+ Create Appointment</button>
      </div>

      <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
        <legend className="xp-legend px-1 font-bold">Manage Appointments</legend>
        
        <div className="mb-3 flex gap-2 items-center">
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">➕ New Appointment</button>
          <button className="xp-btn px-4 py-1 text-[11px] focus:outline-none">📅 Calendar View</button>
          <div className="ml-auto flex items-center gap-2">
            <select className="xp-input px-1 py-0.5 text-[11px]">
              <option>All Status</option>
              <option>Waiting</option>
              <option>In Consult</option>
              <option>Booked</option>
              <option>Completed</option>
            </select>
            <span className="font-bold text-[11px]">Search:</span>
            <input type="text" className="xp-input px-1 py-0.5 w-40 text-[11px]" placeholder="Search..." />
          </div>
        </div>

        <DataTable columns={columns} data={appointments} renderCell={renderCell} />
      </fieldset>
    </div>
  );
};

export default AppointmentModule;
