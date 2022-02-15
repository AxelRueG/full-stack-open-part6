import { useDispatch } from 'react-redux';
import { handleAddAnecdote } from '../reducers/anecdoteReducer';
import { handleNotification, handleClearNotification } from '../reducers/notificationReducer';

export const AnecdoteForm = (props) => {
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const anecdote = e.target.anecdote.value
		e.target.anecdote.value = ''
		dispatch(handleAddAnecdote(anecdote))
		dispatch(handleNotification('your added: '+anecdote))

		setTimeout(() => {
			dispatch(handleClearNotification())
		}, 5000);
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
