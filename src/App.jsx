import { useState } from 'react';

import Header from './components/Header.jsx'
import UserInputs from './components/UserInputs.jsx'
import FlightsList from './components/FlightsList.jsx'
import TotalEmissions from './components/TotalEmissions.jsx';

function App() {
  
  const [flights, setFlights] = useState([]);

  function addFlight(valueFrom, valueTo, valueKilometers){
    const newFlight = {from: valueFrom , to: valueTo , kilometers: valueKilometers}
    setFlights([...flights, newFlight]);   
};
 
  return ( 
    <main>
      <Header></Header>
      <UserInputs onFlightAdded={addFlight}></UserInputs>
      {flights.length !== 0 ? <TotalEmissions allFlights={flights}></TotalEmissions> : ""}
      {flights.length !== 0 ? <FlightsList testFlights={flights}></FlightsList> : ""}
    </main>
  )
}

export default App
