import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function SupportForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState('');

    const handleSubmission = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TO_REVIEW',
            payload: support
        })
        history.push('/CommentForm');
  }

    return (
        <div className='App'>
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleSubmission}>
                <input
                    required
                    placeholder="0-6"
                    value={support}
                    onChange={(event) => setSupport(event.target.value)}
                />
                    <button>Next</button>
            </form>
        </div>
    )
}

export default SupportForm;