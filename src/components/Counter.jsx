import { useState } from "react";

const Counter = () => {
    const [ value, setValue] = useState(0);

    function incrementAndDecrement (action) {
        if (action == "increment" && value < 50) 
            setValue(value + 1);
         else if (action == "decrement" && value != 0) 
            setValue(value - 1);
         else if ( value == 50) alert("You've reached your limit!");
    }

    return ( 
        <div className="counterContainer">
            <h2>Counter</h2>
            <p>Count is: {value}</p>
            <div  className="buttons">
                <button className="btn-increment" onClick={() => incrementAndDecrement("increment")}>Increment</button>
                <button className="btn-decrement" onClick={() => incrementAndDecrement("decrement")}>Decrement</button>
            </div>
        </div>
     );
}
 
export default Counter;