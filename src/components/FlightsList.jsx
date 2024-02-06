import { calculatedEmissions } from "../util/CalculatedEmissions";

export default function FlightsList({testFlights}){

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return (
        <table id="result">
            <thead>
                <tr>
                    <td>From</td>
                    <td>To</td>
                    <td>Kilometers</td>
                    <td>CO2 emissions (in tons)</td>
                </tr>
            </thead>
            <tbody>
                {testFlights.map((flight) => (
                    <tr key={flight.kilometers}>
                        <td>{capitalizeFirstLetter(flight.from)}</td>
                        <td>{capitalizeFirstLetter(flight.to)}</td>
                        <td>{flight.kilometers}</td>
                        <td>{calculatedEmissions(flight.kilometers)}</td>
                    </tr>
                ) 
                    
                    )}

            </tbody>
        </table>
    );
}