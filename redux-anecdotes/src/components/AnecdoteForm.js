import { useDispatch } from 'react-redux';
import { handleAddAnecdote } from '../reducers/anecdoteReducer';
import { handleNotification, handleClearNotification } from '../reducers/notificationReducer';
import { addNewAnecdote } from '../services/anecdotes';

export const AnecdoteForm = (props) => {
	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const anecdote = e.target.anecdote.value
		e.target.anecdote.value = ''

		const Anecdote = await addNewAnecdote(anecdote)

		dispatch(handleAddAnecdote(Anecdote))
		dispatch(handleNotification(`your added: ${Anecdote.content}`))

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
