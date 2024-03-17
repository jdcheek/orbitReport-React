import satData from "./satData";
import styling from './styling.css'

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const handleSetSat = () => {
    setSat(satData);
  };

  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={handleSetSat}>All Orbit</button>
    </div>
  );
};

export default Buttons;
