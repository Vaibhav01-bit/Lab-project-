import { useState } from 'react';
import DataTable from '../components/DataTable';

const TestModule = () => {
  const [view, setView] = useState('list');
  const [tests, setTests] = useState([
    { code: 'CBC', name: 'Complete Blood Count', category: 'Hematology', sample: 'EDTA Blood', price: 15.00 },
    { code: 'KFT', name: 'Kidney Function Test', category: 'Biochemistry', sample: 'Serum', price: 25.00 },
    { code: 'LFT', name: 'Liver Function Test', category: 'Biochemistry', sample: 'Serum', price: 30.00 },
  ]);

  const [form, setForm] = useState({
    name: '', code: '', category: '', sampleType: '', method: '',
    unit: '', referenceRange: '', price: ''
  });

  const columns = [
    { key: 'code', header: 'Code' },
    { key: 'name', header: 'Test Name' },
    { key: 'category', header: 'Category' },
    { key: 'sample', header: 'Sample' },
    { key: 'price', header: 'Price' },
  ];

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newTest = {
      code: form.code,
      name: form.name,
      category: form.category,
      sample: form.sampleType,
      price: parseFloat(form.price) || 0,
    };
    setTests([...tests, newTest]);
    setView('list');
    setForm({ name: '', code: '', category: '', sampleType: '', method: '', unit: '', referenceRange: '', price: '' });
  };

  if (view === 'create') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
          <h1 className="text-lg font-bold text-[#0033CC]">Create New Test</h1>
          <button onClick={() => setView('list')} className="xp-btn px-4 py-1 font-bold text-[11px] focus:outline-none">Back to List</button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <fieldset className="xp-fieldset p-3 bg-[#ECE9D8]">
            <legend className="xp-legend px-1 font-bold">Test Master Configuration</legend>
            <div className="grid grid-cols-3 gap-3 text-[11px]">
              <div className="flex flex-col gap-1 col-span-2">
                <label className="font-bold">Test Name <span className="text-red-600">*</span></label>
                <input type="text" name="name" value={form.name} onChange={handleInputChange} className="xp-input px-1 py-0.5" placeholder="e.g., Complete Blood Count" required />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Test Code <span className="text-red-600">*</span></label>
                <input type="text" name="code" value={form.code} onChange={handleInputChange} className="xp-input px-1 py-0.5" placeholder="e.g., CBC" required />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Category <span className="text-red-600">*</span></label>
                <select name="category" value={form.category} onChange={handleInputChange} className="xp-input px-1 py-0.5">
                  <option value="">Select...</option>
                  <option>Hematology</option>
                  <option>Biochemistry</option>
                  <option>Microbiology</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Sample Type <span className="text-red-600">*</span></label>
                <select name="sampleType" value={form.sampleType} onChange={handleInputChange} className="xp-input px-1 py-0.5">
                  <option value="">Select...</option>
                  <option>EDTA Blood</option>
                  <option>Serum</option>
                  <option>Urine</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Method</label>
                <input type="text" name="method" value={form.method} onChange={handleInputChange} className="xp-input px-1 py-0.5" placeholder="e.g., Analyzer" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Default Unit</label>
                <input type="text" name="unit" value={form.unit} onChange={handleInputChange} className="xp-input px-1 py-0.5" placeholder="e.g., mg/dL" />
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <label className="font-bold">Bio Reference Range</label>
                <input type="text" name="referenceRange" value={form.referenceRange} onChange={handleInputChange} className="xp-input px-1 py-0.5" placeholder="e.g., 10.0 - 40.0" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold">Test Price <span className="text-red-600">*</span></label>
                <div className="flex">
                  <span className="bg-white border-t border-l border-b border-[#ACA899] px-2 py-0.5 font-bold">$</span>
                  <input type="number" name="price" value={form.price} onChange={handleInputChange} className="xp-input px-1 py-0.5 w-full border-l-0" step="0.01" required />
                </div>
              </div>
            </div>
          </fieldset>
          <div className="flex justify-end">
            <button type="submit" className="xp-btn px-6 py-2 font-bold text-[12px] text-[#0033CC] focus:outline-none">Save Master Test</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-end border-b border-[#ACA899] pb-1 mb-3">
        <h1 className="text-lg font-bold text-[#0033CC]">Master Tests List</h1>
        <button onClick={() => setView('create')} className="xp-btn px-4 py-1 font-bold text-[11px] focus:outline-none">+ Create New</button>
      </div>

      <fieldset className="xp-fieldset p-2 pb-3 bg-[#ECE9D8]">
        <legend className="xp-legend px-1 font-bold">Manage Defined Tests</legend>
        
        <div className="mb-3 flex gap-2 items-center">
          <button onClick={() => setView('create')} className="xp-btn px-4 py-1 text-[11px] focus:outline-none">➕ Create New</button>
          <div className="ml-auto flex items-center gap-1">
            <span className="font-bold text-[11px]">Search Tests:</span>
            <input type="text" className="xp-input px-1 py-0.5 w-48 text-[11px]" placeholder="Name or Code..." />
          </div>
        </div>

        <div className="border border-[#ACA899] bg-white h-[400px] overflow-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap cursor-default text-[11px]">
            <thead className="sticky top-0 z-10 shadow-[0_1px_0_#ACA899]">
              <tr>
                <th className="xp-th px-2 py-1 font-normal">Code</th>
                <th className="xp-th px-2 py-1 font-normal">Test Name</th>
                <th className="xp-th px-2 py-1 font-normal">Category</th>
                <th className="xp-th px-2 py-1 font-normal">Sample</th>
                <th className="xp-th px-2 py-1 font-normal text-right">Price</th>
                <th className="xp-th px-2 py-1 font-normal text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test, idx) => (
                <tr key={idx} className="xp-tr-hover border-b border-[#F0F0F0]">
                  <td className="px-2 py-1 border-r border-[#F0F0F0] font-bold">{test.code}</td>
                  <td className="px-2 py-1 border-r border-[#F0F0F0]">{test.name}</td>
                  <td className="px-2 py-1 border-r border-[#F0F0F0]">{test.category}</td>
                  <td className="px-2 py-1 border-r border-[#F0F0F0]">{test.sample}</td>
                  <td className="px-2 py-1 border-r border-[#F0F0F0] text-right font-mono">${test.price.toFixed(2)}</td>
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
  );
};

export default TestModule;
