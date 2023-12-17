// eslint-disable-next-line react/prop-types
const LoadingTableRow = ({ columns, rows }) => {
  const renderPulseCells = (count) => {
    const pulseCells = [];

    for (let i = 0; i < count; i++) {
      pulseCells.push(
        <td key={i} className="px-4 py-2 md:py-3 whitespace-nowrap">
          <div className="w-full h-2 md:h-3 bg-gray-300 rounded-md"></div>
        </td>
      );
    }

    return pulseCells;
  };

  const renderPulseRows = () => {
    const pulseRows = [];

    for (let i = 0; i < rows; i++) {
      pulseRows.push(
        <tr key={i} className="animate-pulse border-b border-slate-200">
          {renderPulseCells(columns)}
        </tr>
      );
    }

    return pulseRows;
  };

  return <>{renderPulseRows()}</>;
};

export default LoadingTableRow;
