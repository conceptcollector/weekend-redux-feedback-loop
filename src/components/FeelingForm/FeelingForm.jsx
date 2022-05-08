import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function FeelingForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState('');

    const handleSubmission = (e) => {
        e.preventDefault();
        dispatch({
        type: 'ADD_TO_REVIEW',
        payload: feeling
        });
        history.push('/UnderstandingForm');
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmission}>
                <input
                    required
                    placeholder="0-6"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                />
            <button>Next</button>
            </form>
        </>
    )
}

export default FeelingForm;