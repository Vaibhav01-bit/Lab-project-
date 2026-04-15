import { useState } from 'react';

const HRModule = () => {
  const [activeTab, setActiveTab] = useState('department');
  const [departments, setDepartments] = useState([
    { id: 1, name: 'General', description: 'General Medicine' },
    { id: 2, name: 'Cardiology', description: 'Heart & Cardiovascular' },
    { id: 3, name: 'Pathology', description: 'Laboratory Services' },
  ]);
  const [designations, setDesignations] = useState([
    { id: 1, name: 'Senior Doctor', description: 'Experienced medical professional' },
    { id: 2, name: 'Consultant', description: 'Specialist physician' },
    { id: 3, name: 'Lab Technician', description: 'Laboratory staff' },
  ]);
  const [form, setForm] = useState({ name: '', description: '' });

  const handleSave = (e) => {
    e.preventDefault();
    if (activeTab === 'department') {
      setDepartments([...departments, { id: departments.length + 1, ...form }]);
    } else {
      setDesignations([...designations, { id: designations.length + 1, ...form }]);
    }
    setForm({ name: '', description: '' });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">Human Resources</h1>
      </div>

      <div className="flex gap-1 mb-4">
        <button
          onClick={() => setActiveTab('department')}
          className={`xp-btn px-4 py-1 text-[11px] font-bold focus:outline-none ${activeTab === 'department' ? 'bg-[#316AC5] text-white' : ''}`}
        >
          Department
        </button>
        <button
          onClick={() => setActiveTab('designation')}
          className={`xp-btn px-4 py-1 text-[11px] font-bold focus:outline-none ${activeTab === 'designation' ? 'bg-[#316AC5] text-white' : ''}`}
        >
          Designation
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <fieldset className="xp-fieldset p-3 bg-[#ECE9D8]">
            <legend className="xp-legend px-1 font-bold">
              Add {activeTab === 'department' ? 'Department' : 'Designation'}
            </legend>
            <form onSubmit={handleSave} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-bold text-[11px]">
                  {activeTab === 'department' ? 'Department' : 'Designation'} Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="xp-input px-1 py-0.5 text-[11px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold text-[11px]">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="xp-input px-1 py-0.5 h-16 resize-none text-[11px]"
                ></textarea>
              </div>
              <button type="submit" className="xp-btn py-1 font-bold mt-2 text-[11px] focus:outline-none">
                Save {activeTab === 'department' ? 'Department' : 'Designation'}
              </button>
            </form>
          </fieldset>
        </div>
        <div className="col-span-2">
          <fieldset className="xp-fieldset p-2 bg-[#ECE9D8] h-[300px]">
            <legend className="xp-legend px-1 font-bold">{activeTab === 'department' ? 'Department' : 'Designation'} List</legend>
            <div className="border border-[#ACA899] bg-white h-full overflow-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap cursor-default text-[11px]">
                <thead>
                  <tr>
                    <th className="xp-th px-2 py-1 font-normal w-12">ID</th>
                    <th className="xp-th px-2 py-1 font-normal">Name</th>
                    <th className="xp-th px-2 py-1 font-normal">Description</th>
                    <th className="xp-th px-2 py-1 font-normal text-center w-20">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === 'department' ? departments : designations).map((item) => (
                    <tr key={item.id} className="xp-tr-hover border-b border-[#F0F0F0]">
                      <td className="px-2 py-1 border-r border-[#F0F0F0]">{item.id}</td>
                      <td className="px-2 py-1 border-r border-[#F0F0F0] font-bold">{item.name}</td>
                      <td className="px-2 py-1 border-r border-[#F0F0F0]">{item.description}</td>
                      <td className="px-2 py-1 text-center">
                        <button className="xp-btn px-2 py-0 text-[10px] focus:outline-none">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default HRModule;
