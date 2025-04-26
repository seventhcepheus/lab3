import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [lastClicked, setLastClicked] = useState(null);

  const handleClick = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
    setLastClicked(index);
  };

  return (
    <div className="container mt-5">
      {counters.map((count, index) => (
        <button
          key={index}
          className={`btn m-1 ${lastClicked === index ? 'btn-success' : 'btn-primary'}`}
          onClick={() => handleClick(index)}
        >
          {count}
        </button>
      ))}
    </div>
  );
}

export default App;