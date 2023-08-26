const StatBar = ({ value, color }) => {
  const percentage = Math.round((value / 250) * 100);

  return (
    <div className={`w-full h-5 bg-white rounded-xl overflow-hidden relative`}>
      <div
        className={`h-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>

      <div className="absolute z-20 top-0 right-0 pr-2 text-sm font-bold text-black">
        {value}
      </div>
    </div>
  );
};

export default StatBar;
