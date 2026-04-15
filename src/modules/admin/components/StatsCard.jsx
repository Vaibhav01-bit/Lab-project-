const StatsCard = ({ title, value, change, subtitle, urgent }) => {
  return (
    <fieldset className="xp-fieldset p-2 bg-[#ECE9D8]">
      <legend className="xp-legend px-1 font-bold text-[11px]">{title}</legend>
      <div className={`text-2xl font-bold font-mono pl-1 ${urgent ? 'text-[#CC0000]' : 'text-black'}`}>
        {value}
      </div>
      {(change || subtitle) && (
        <div className={`text-[10px] pl-1 mt-1 ${urgent ? 'text-[#CC0000] font-bold' : 'text-gray-600'}`}>
          {change || subtitle}
        </div>
      )}
    </fieldset>
  );
};

export default StatsCard;
