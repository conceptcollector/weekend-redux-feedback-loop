import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function CommentForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState('');

    const handleSubmission = (e) => {
        e.preventDefault();
        dispatch({
        type: 'ADD_TO_REVIEW',
        payload: comments
        });
        history.push('/Review');
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmission}>
                <input
                    required
                    placeholder="comments"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />   
            <button>Next</button>
            </form>
        </>
    )
}

export default CommentForm;