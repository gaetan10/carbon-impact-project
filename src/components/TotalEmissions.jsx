import { calculatedEmissions } from "../util/CalculatedEmissions";

export default function TotalEmissions({allFlights}){

    let totalEmissions = (((allFlights.map(flight =>  calculatedEmissions(flight.kilometers))).map(strings => Number(strings))).reduce((accumulator, currentValue) => accumulator + currentValue, 0)).toFixed(2)
    let emoticon = ""

    if(totalEmissions>2 && totalEmissions<4){
        emoticon = "😬"
    }
    else if (totalEmissions<2){
        emoticon = "😍"
    }
    else {
        emoticon = "🤬"
    }
    
    return (
        <section id="total-emissions">
            <h3>Your cumulated annual amount of CO2 emission is {totalEmissions} tons</h3>
            <p>{emoticon}</p>
        </section>
    )
};