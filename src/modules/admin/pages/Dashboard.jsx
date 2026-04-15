import { useState, useEffect } from 'react';
import StatsCard from '../components/StatsCard';

const Dashboard = () => {
  const [stats, setStats] = useState({
    todayPatients: 142,
    totalAppointments: 87,
    pendingLabResults: 45,
    dailyCollection: 4250,
    toCollect: 480,
  });

  const [recentAppointments, setRecentAppointments] = useState([
    { id: 'APT-992', time: '09:30 AM', patient: 'Smith, John', doctor: 'Dr. Adams', status: 'Waiting' },
    { id: 'APT-993', time: '09:45 AM', patient: 'Doe, Jane', doctor: 'Dr. Adams', status: 'In Consult' },
    { id: 'APT-994', time: '10:00 AM', patient: 'Williams, Robert', doctor: 'Dr. Carter', status: 'Booked' },
    { id: 'APT-995', time: '10:15 AM', patient: 'Brown, Emily', doctor: 'Dr. Carter', status: 'Booked' },
    { id: 'APT-996', time: '10:30 AM', patient: 'Davis, Michael', doctor: 'Dr. Adams', status: 'Booked' },
  ]);

  const [pendingLabRequests, setPendingLabRequests] = useState([
    { id: 'REQ-8012', patient: 'Clark, S.', tests: 'CBC, KFT, LFT', priority: 'URGENT' },
    { id: 'REQ-8013', patient: 'Miller, T.', tests: 'Lipid Profile', priority: 'Routine' },
    { id: 'REQ-8014', patient: 'Wilson, A.', tests: 'HbA1c, Fasting Sugar', priority: 'Routine' },
    { id: 'REQ-8015', patient: 'Moore, P.', tests: 'Thyroid Profile', priority: 'Routine' },
    { id: 'REQ-8016', patient: 'Taylor, R.', tests: 'Urine Routine', priority: 'Routine' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Waiting': return 'text-[#006600]';
      case 'In Consult': return 'text-[#0033CC]';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">System Dashboard</h1>
        <span className="text-gray-600 text-[11px]">
          Data Date: <span className="font-bold text-black">{new Date().toLocaleDateString('en-GB').toUpperCase()}</span>
        </span>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        <StatsCard title="Today's Patients" value={stats.todayPatients} change="+12 from yesterday" />
        <StatsCard title="Total Appointments" value={stats.totalAppointments} subtitle="Pending: 14" />
        <StatsCard title="Pending Lab Results" value={stats.pendingLabResults} subtitle="Require immediate action" urgent />
        <StatsCard title="Daily Collection (Est)" value={`$${stats.dailyCollection.toLocaleString()}`} subtitle={`To collect: $${stats.toCollect}`} />
      </div>

      {/* Two Column Tables */}
      <div className="grid grid-cols-2 gap-4">
        {/* Recent Appointments */}
        <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
          <legend className="xp-legend px-1 font-bold">Recent Appointments</legend>
          
          <div className="mb-2 flex justify-between items-center">
            <button className="xp-btn px-4 py-0.5 text-[11px] focus:outline-none">Refresh List</button>
            <a href="/appointments" className="text-[#0033CC] hover:underline text-[11px]">View All Appointments &raquo;</a>
          </div>

          <div className="border border-[#ACA899] bg-white">
            <table className="w-full text-left border-collapse whitespace-nowrap cursor-default text-[11px]">
              <thead>
                <tr>
                  <th className="xp-th px-2 py-1 font-normal">Appt ID</th>
                  <th className="xp-th px-2 py-1 font-normal">Time</th>
                  <th className="xp-th px-2 py-1 font-normal">Patient Name</th>
                  <th className="xp-th px-2 py-1 font-normal">Doctor</th>
                  <th className="xp-th px-2 py-1 font-normal text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.map((apt) => (
                  <tr key={apt.id} className="xp-tr-hover border-b border-[#F0F0F0]">
                    <td className="px-2 py-1 border-r border-[#F0F0F0] text-[#0033CC] underline">{apt.id}</td>
                    <td className="px-2 py-1 border-r border-[#F0F0F0]">{apt.time}</td>
                    <td className="px-2 py-1 border-r border-[#F0F0F0]">{apt.patient}</td>
                    <td className="px-2 py-1 border-r border-[#F0F0F0]">{apt.doctor}</td>
                    <td className="px-2 py-1 text-center">
                      <span className={`font-bold ${getStatusColor(apt.status)}`}>{apt.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </fieldset>

        {/* Pending Lab Requests */}
        <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
          <legend className="xp-legend px-1 font-bold">Pending Lab Requests</legend>
          
          <div className="mb-2 flex justify-between items-center">
            <button className="xp-btn px-4 py-0.5 text-[11px] focus:outline-none">Process Batch</button>
            <a href="/reports" className="text-[#0033CC] hover:underline text-[11px]">Pathology Reports &raquo;</a>
          </div>

          <div className="border border-[#ACA899] bg-white">
            <table className="w-full text-left border-collapse whitespace-nowrap cursor-default text-[11px]">
              <thead>
                <tr>
                  <th className="xp-th px-2 py-1 font-normal">Req ID</th>
                  <th className="xp-th px-2 py-1 font-normal">Patient</th>
                  <th className="xp-th px-2 py-1 font-normal">Tests Requested</th>
                  <th className="xp-th px-2 py-1 font-normal text-center">Priority</th>
                </tr>
              </thead>
              <tbody>
                {pendingLabRequests.map((req) => (
                  <tr key={req.id} className="xp-tr-hover border-b border-[#F0F0F0]">
                    <td className="px-2 py-1 border-r border-[#F0F0F0]">{req.id}</td>
                    <td className="px-2 py-1 border-r border-[#F0F0F0]">{req.patient}</td>
                    <td className="px-2 py-1 border-r border-[#F0F0F0]">{req.tests}</td>
                    <td className="px-2 py-1 text-center">
                      {req.priority === 'URGENT' ? (
                        <span className="text-white bg-[#CC0000] px-1 pb-[1px] font-bold border border-[#880000] text-[10px]">URGENT</span>
                      ) : (
                        <span className="text-gray-700">{req.priority}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Dashboard;
