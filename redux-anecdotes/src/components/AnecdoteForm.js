import { useDispatch } from 'react-redux';
import { handleAddAnecdote } from '../reducers/anecdoteReducer';

export const AnecdoteForm = (props) => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const anecdote = e.target.anecdote.value;
		e.target.anecdote.value = '';
		dispatch(handleAddAnecdote(anecdote));
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
