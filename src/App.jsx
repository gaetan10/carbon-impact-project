import { useState } from 'react';
import { calculatedEmissions } from './util/CalculatedEmissions.js';

import Header from './components/Header.jsx'
import UserInputs from './components/UserInputs.jsx'
import FlightsList from './components/FlightsList.jsx'
import TotalEmissions from './components/TotalEmissions.jsx';

let totalOfEmissions = 0

function App() {
  
  const [flights, setFlights] = useState([]);

  function addFlight(valueFrom, valueTo, valueKilometers){
    const newFlight = {from: valueFrom , to: valueTo , kilometers: valueKilometers}
    setFlights([...flights, newFlight]);   
};

   if (flights.length > 0){
   totalOfEmissions += parseFloat(calculatedEmissions(((flights[flights.length-1]).kilometers)), 10)
 }
 
  return ( 
    <main>
      <Header></Header>
      <UserInputs onFlightAdded={addFlight}></UserInputs>
      {flights.length !== 0 ? <TotalEmissions totalEmissions={totalOfEmissions}></TotalEmissions> : ""}
      {flights.length !== 0 ? <FlightsList testFlights={flights}></FlightsList> : ""}
    </main>
  )
}

export default App
