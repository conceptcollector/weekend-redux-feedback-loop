import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function ThankYouPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    let newFeedback = () => {
        dispatch({
            type: 'NEW_FEEDBACK'
        });
        history.push('/');
    }

    return (
        <>
            <h1>Submitted!</h1>
            <h2>Thank You!</h2>
            <button onClick={newFeedback}>
                Leave New Feedback
            </button>
        </>
    )
}

export default ThankYouPage;