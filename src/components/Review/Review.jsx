import {useHistory} from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";

function Review() {

    const feedback = useSelector(store => store.reviewReducer);
    const history = useHistory();

    const submitFeedback = () => {
        console.log(feedback);
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log('Something failed POSTing to the database', error);
        })
        history.push('/ThankYouPage');
    }

    return (
        <>
            <h1>Feedback Review</h1>
            <p>Feelings: {feedback[0]}</p>
            <p>Understanding: {feedback[1]}</p>
            <p>Support: {feedback[2]}</p>
            <p>Comments: {feedback[3]}</p>
            <button onClick={submitFeedback}>Submit</button>
        </>
    )
}

export default Review;