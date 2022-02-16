import { useDispatch } from 'react-redux';
import { handleAddAnecdote } from '../reducers/anecdoteReducer';
import { handleNotification } from '../reducers/notificationReducer';

export const AnecdoteForm = (props) => {
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const anecdote = e.target.anecdote.value;
		e.target.anecdote.value = '';

		dispatch(handleAddAnecdote(anecdote));
		dispatch(handleNotification(`your added: ${anecdote}`, 5));
	};

	return (
		<>
			<h2>create new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input name="anecdote" />
				</div>
				<button>create</button>
			</form>
		</>
	);
};
