import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function UnderstandingForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState('');

    const handleSubmission = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TO_REVIEW',
            payload: understanding
        })
        history.push('/SupportForm');
  }

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmission}>
                <input
                    required
                    placeholder="0-6"
                    value={understanding}
                    onChange={(event) => setUnderstanding(event.target.value)}
                />
                    <button>Next</button>
            </form>
        </>
    )
}

export default UnderstandingForm;