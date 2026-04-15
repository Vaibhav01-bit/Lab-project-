import { useState } from 'react';
import DataTable from '../components/DataTable';

const PatientModule = () => {
  const [view, setView] = useState('list');
  const [patients, setPatients] = useState([
    { id: 'PT-00104', name: 'Doe, Jonathan', age: '42Y', gender: 'M', mobile: '+1-555-0198', category: 'General' },
    { id: 'PT-00105', name: 'Smith, Sarah', age: '28Y', gender: 'F', mobile: '+1-555-0211', category: 'VIP' },
    { id: 'PT-00106', name: 'Johnson, Michael', age: '55Y', gender: 'M', mobile: '+1-555-0234', category: 'General' },
  ]);

  const [form, setForm] = useState({
    name: '', gender: '', birthday: '', age: '', maritalStatus: '',
    mobile: '', email: '', category: '', bloodGroup: '', bloodPressure: '',
    height: '', weight: '', address: '', guardian: '', relationship: '', username: '', password: ''
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newPatient = {
      id: `PT-${String(patients.length + 106).padStart(5, '0')}`,
      name: form.name,
      age: `${form.age}Y`,
      gender: form.gender?.charAt(0) || '',
      mobile: form.mobile,
      category: form.category || 'General',
    };
    setPatients([...patients, newPatient]);
    setView('list');
    setForm({ name: '', gender: '', birthday: '', age: '', maritalStatus: '', mobile: '', email: '', category: '', bloodGroup: '', bloodPressure: '', height: '', weight: '', address: '', guardian: '', relationship: '', username: '', password: '' });
  };

  const columns = [
    { key: 'id', header: 'Patient ID' },
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age/Gender' },
    { key: 'mobile', header: 'Mobile' },
    { key: 'category', header: 'Category' },
  ];

  if (view === 'create') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
          <h1 className="text-lg font-bold text-[#0033CC]">Create Patient</h1>
          <button onClick={() => setView('list')} className="xp-btn px-4 py-1 font-bold text-[11px] focus:outline-none">Back to List</button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Basic Details */}
          <fieldset className="xp-fieldset p-3 bg-[#ECE9D8]">
            <legend className="xp-legend px-1 font-bold">Basic Details</legend>
            <div className="grid grid-cols-4 gap-3 text-[11px]">
              <div className="flex flex-col gap-1">
                <label className="font-bold">Name <span className="text-red-600">*</span></label>
                <input type="text" name="name" value={form.name} onChange={handleInputChange} className="xp-input px-1 py-0.5" required />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Gender</label>
                <select name="gender" value={form.gender} onChange={handleInputChange} className="xp-input px-1 py-0.5">
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Birthday</label>
                <input type="date" name="birthday" value={form.birthday} onChange={handleInputChange} className="xp-input px-1 py-0.5" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Age <span className="text-red-600">*</span></label>
                <input type="number" name="age" value={form.age} onChange={handleInputChange} className="xp-input px-1 py-0.5" required />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Marital Status</label>
                <select name="maritalStatus" value={form.maritalStatus} onChange={handleInputChange} className="xp-input px-1 py-0.5">
                  <option value="">Select</option>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Mobile No <span className="text-red-600">*</span></label>
                <input type="text" name="mobile" value={form.mobile} onChange={handleInputChange} className="xp-input px-1 py-0.5" required />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleInputChange} className="xp-input px-1 py-0.5" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Category</label>
                <select name="category" value={form.category} onChange={handleInputChange} className="xp-input px-1 py-0.5">
                  <option value="">Select</option>
                  <option>General</option>
                  <option>VIP</option>
                  <option>Staff</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Blood Group</label>
                <select name="bloodGroup" value={form.bloodGroup} onChange={handleInputChange} className="xp-input px-1 py-0.5">
                  <option value="">Select</option>
                  <option>O+</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>AB+</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Blood Pressure</label>
                <input type="text" name="bloodPressure" value={form.bloodPressure} onChange={handleInputChange} className="xp-input px-1 py-0.5" placeholder="e.g. 120/80" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Height</label>
                <input type="text" name="height" value={form.height} onChange={handleInputChange} className="xp-input px-1 py-0.5" placeholder="cm" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Weight</label>
                <input type="text" name="weight" value={form.weight} onChange={handleInputChange} className="xp-input px-1 py-0.5" placeholder="kg" />
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <label className="font-bold">Address</label>
                <textarea name="address" value={form.address} onChange={handleInputChange} className="xp-input px-1 py-0.5 h-12 resize-none"></textarea>
              </div>
            </div>
          </fieldset>

          {/* Emergency Contact */}
          <fieldset className="xp-fieldset p-3 bg-[#ECE9D8]">
            <legend className="xp-legend px-1 font-bold">Emergency Contact</legend>
            <div className="grid grid-cols-3 gap-3 text-[11px]">
              <div className="flex flex-col gap-1">
                <label className="font-bold">Guardian</label>
                <input type="text" name="guardian" value={form.guardian} onChange={handleInputChange} className="xp-input px-1 py-0.5" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Relationship</label>
                <input type="text" name="relationship" value={form.relationship} onChange={handleInputChange} className="xp-input px-1 py-0.5" />
              </div>
            </div>
          </fieldset>

          {/* Login Details */}
          <fieldset className="xp-fieldset p-3 bg-[#ECE9D8]">
            <legend className="xp-legend px-1 font-bold">Login Details</legend>
            <div className="grid grid-cols-3 gap-3 text-[11px]">
              <div className="flex flex-col gap-1">
                <label className="font-bold">Username</label>
                <input type="text" name="username" value={form.username} onChange={handleInputChange} className="xp-input px-1 py-0.5" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Password</label>
                <input type="password" name="password" value={form.password} onChange={handleInputChange} className="xp-input px-1 py-0.5" />
              </div>
            </div>
          </fieldset>

          <div className="flex justify-end">
            <button type="submit" className="xp-btn px-6 py-2 font-bold text-[12px] focus:outline-none">Save Patient</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">Patient List</h1>
        <button onClick={() => setView('create')} className="xp-btn px-4 py-1 font-bold text-[11px] focus:outline-none">+ Add New</button>
      </div>

      <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
        <legend className="xp-legend px-1 font-bold">Manage Patients</legend>
        
        <div className="mb-3 flex gap-2 items-center">
          <button onClick={() => setView('create')} className="xp-btn px-4 py-1 text-[11px] focus:outline-none">➕ Add New</button>
          <button className="xp-btn px-4 py-1 text-[11px] text-[#006600] font-bold focus:outline-none">📥 Bulk Import</button>
          <button className="xp-btn px-4 py-1 text-[11px] text-[#0033CC] font-bold focus:outline-none">📤 Bulk Export</button>
          <div className="ml-auto flex items-center gap-1">
            <span className="font-bold text-[11px]">Search:</span>
            <input type="text" className="xp-input px-1 py-0.5 w-48 text-[11px]" placeholder="Search patients..." />
          </div>
        </div>

        <DataTable columns={columns} data={patients} />
      </fieldset>
    </div>
  );
};

export default PatientModule;
