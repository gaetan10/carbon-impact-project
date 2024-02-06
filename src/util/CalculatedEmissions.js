
export function calculatedEmissions(kilometers){
  const emissions = (parseInt(kilometers, 10) * 0.00013).toFixed(2)
  return emissions;
  
}

