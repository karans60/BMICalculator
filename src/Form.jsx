import React, {useState} from "react";

function Form()
{
    const[weight, setWeight] = useState(0);
    const[height, setHeight] = useState(0);
    const[bmi, setBmi] = useState('');
    const[message, setMessage] = useState('');

    let calbmi = (e) => {

        e.preventDefault();

        if(weight===0 || height===0){
            alert("Please enter valid values")
        }

        else{
                let bmi = (weight/(height*height))
                setBmi('Your BMI is ' +bmi.toFixed(1))

                if(bmi<25)
                {
                    setMessage("You are Underweight");
                }
                else if(bmi>=25 && bmi<=30)
                {
                    setMessage("You are Healthy");
                }
                else
                {
                    setMessage("You are Overweight");
                }
        }
    }




    return(
        <div className="Card">
            
            <h1 className="Heading">BMI CALCULATOR</h1>
            
            <form onSubmit={calbmi} className="form">

            <div>
            <label className="label">Weight (Kgs)   </label>
            <input type="text" placeholder="Enter Your Weight in KG" className="Input" value={weight} onChange={(e) => setWeight(e.target.value)}></input><br />
            </div>

            <div>
            <label className="label">Height (Mts)   </label>
            <input type="text" placeholder="Enter Your Height in CM" className="Input" value={height} onChange={(e) => setHeight(e.target.value)}></input>
            </div>
            <button className="Button" type="submit">Calculate</button>
            </form>

            <h3 className="bmi">{bmi}</h3>
            <p className="message">{message}</p>

        </div>

    );
}

export default Form;