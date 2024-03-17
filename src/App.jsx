import { useState } from 'react'
import satData from "./components/satData.jsx";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";


function App() {
  const [sat, setSat] = useState(satData)
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]
  // Something is not working with filter? No results from map in table. Log produces infinite loop
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <div>
      <Banner />
      <Buttons filterByType={filterByType} setSat={setSat} displaySats={displaySats} />
      <Table sat={sat} />
    </div>
  );
}

export default App;
