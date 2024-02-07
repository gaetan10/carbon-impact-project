import { useState } from 'react';

export default function UserInputs({onFlightAdded}){
   
    let [input1Value, setInput1Value] = useState("")
    const [input2Value, setInput2Value] = useState("")
    const [input3Value, setInput3Value] = useState("")

    function handleInput1Change(event) {
        setInput1Value(event.target.value);
      };
  
    function handleInput2Change(event) {
        setInput2Value(event.target.value);
      };
  
    function handleInput3Change(event) {
        setInput3Value(event.target.value);
    };

    function buttonClicked(){
        onFlightAdded(input1Value, input2Value, input3Value);
        setInput1Value("");
        setInput2Value("");
        setInput3Value("");
    }
  
    return (
        
        <section id="user-input">
            <div className='input-group'>
                <div>
                    <label>From</label>
                    <input onChange={handleInput1Change} value={input1Value} type="text" required></input>
                </div>
                <div>
                    <label>To</label>
                    <input onChange={handleInput2Change} value={input2Value} type="text" required></input>
                </div>
                <div>
                    <label>Kilometers</label>
                    <input onChange={handleInput3Change} value={input3Value} type="number" required></input>
                </div>
            </div>
            <button onClick={() => buttonClicked()}>Add flight</button>
            <div>
                
            </div>
        </section>
        
    );

};