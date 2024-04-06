export default function CounterComponent({ counter, incrementCounter, decrementCounter}) {

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
