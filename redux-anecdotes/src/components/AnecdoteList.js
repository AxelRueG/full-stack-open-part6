import { useDispatch, useSelector } from 'react-redux';
import { handleAnecdoteVotes } from '../reducers/anecdoteReducer';
import { handleNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote }) => {
	const dispatch = useDispatch();

	const vote = () => {
		dispatch(handleAnecdoteVotes(anecdote));
		dispatch(handleNotification(`your voted: ${anecdote.content}`, 5));
	};

	return (
		<div>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={() => vote()}>vote</button>
			</div>
		</div>
	);
};

export const AnecdoteList = (props) => {
	const anecdotes = useSelector((state) =>
		state.anecdotes.filter((elem) => elem.content.includes(state.filterBy))
	);

	return anecdotes.map((anecdote) => (
		<Anecdote key={anecdote.id} anecdote={anecdote} />
	));
};
