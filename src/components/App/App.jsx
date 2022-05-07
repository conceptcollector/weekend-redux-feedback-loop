import {HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';

function App() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [feeling, setFeeling] = useState('');

  const handleSubmission = (e) => {
    console.log('In handleSubmission', feeling);
    e.preventDefault();
    dispatch({
      type: 'ADD_TO_SUMMARY',
      payload: feeling
    })
    history.push('/UnderstandingForm');
  }

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <h1>How are you feeling today?</h1>
        <form>
          <input
            required
            placeholder="0-6"
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}
          />
          <Link to="/UnderstandingForm">   
            <button onClick={handleSubmission}>Next</button>
          </Link>
          <Route exact path="/UnderstandingForm">
          </Route>
        </form>
      </div>
    </Router>
  );
}

export default App;
