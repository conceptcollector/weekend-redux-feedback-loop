import { HashRouter as Router, Link } from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const [feeling, setFeeling] = useState('');

  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TO_SUMMARY',
      payload: feeling
    })
  }

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <h1>How are you feeling today?</h1>
        <form onSubmit={handleSubmission} className="">
          <input
            required
            placeholder="0-6"
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}
          />
        </form>
        <Link to="/UnderstandingForm">   
          <button>Next</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
