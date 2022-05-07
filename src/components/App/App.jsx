import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentForm from '../CommentForm/CommentForm';

function App() {


  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path="/">
          <FeelingForm />  
        </Route>
        <Route exact path="/UnderstandingForm">
          <UnderstandingForm />
        </Route>
        <Route exact path="/SupportForm">
          <SupportForm />
        </Route>
        <Route exact path="/CommentForm">
          <CommentForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
