const DataTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="border border-[#ACA899] bg-white">
      <table className="w-full text-left border-collapse whitespace-nowrap cursor-default text-[11px]">
        <thead>
          <tr>
            <th className="xp-th px-2 py-1 font-normal w-8">
              <input type="checkbox" />
            </th>
            {columns.map((col) => (
              <th key={col.key} className="xp-th px-2 py-1 font-normal">{col.header}</th>
            ))}
            <th className="xp-th px-2 py-1 font-normal text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="xp-tr-hover border-b border-[#F0F0F0]">
              <td className="px-2 py-1 border-r border-[#F0F0F0]">
                <input type="checkbox" />
              </td>
              {columns.map((col) => (
                <td key={col.key} className="px-2 py-1 border-r border-[#F0F0F0]">
                  {col.key === 'id' ? (
                    <span className="text-[#0033CC] underline">{row[col.key]}</span>
                  ) : col.key === 'category' && row[col.key] === 'VIP' ? (
                    <span className="text-[#CC0000] font-bold">{row[col.key]}</span>
                  ) : col.key === 'name' ? (
                    <span className="font-bold">{row[col.key]}</span>
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
              <td className="px-2 py-1 text-center">
                {onEdit && (
                  <button onClick={() => onEdit(row)} className="xp-btn px-2 py-0 text-[10px] mr-1 focus:outline-none">Edit</button>
                )}
                {onDelete && (
                  <button onClick={() => onDelete(row)} className="xp-btn px-2 py-0 text-[10px] focus:outline-none">Delete</button>
                )}
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length + 2} className="px-4 py-8 text-center text-gray-500">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
