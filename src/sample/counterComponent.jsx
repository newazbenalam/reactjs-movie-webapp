import { useState } from "react";

export default function CounterComponent() {

  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   // setCounter(100); // This line is commented out as per your requirement
  //   // setCounter((prevCounter) => prevCounter + 1); // This line is also commented out as per your requirement
  // }, [counter,setCounter]); // useEffect runs only once after initial render because of empty dependency array

    // Function to handle incrementing the counter
    const incrementCounter = () => {
      setCounter((prevCounter) => prevCounter + 1);
    };
    
    // Function to handle decrementing the counter
    const decrementCounter = () => {
      setCounter((prevCounter) => prevCounter - 1);
    };

  return (
    <>
      <h1>Counter</h1>
      <div>
        {/* Attach click handlers to buttons */}
        <button onClick={incrementCounter}>+</button>
        <h1>{counter}</h1>
        <button onClick={decrementCounter}>-</button>
      </div>
    </>
  );
}
