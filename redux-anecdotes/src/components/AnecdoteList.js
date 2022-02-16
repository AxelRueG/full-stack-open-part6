import { useDispatch, useSelector } from 'react-redux';
import { handleAnecdoteVotes } from '../reducers/anecdoteReducer';
import {
	handleClearNotification,
	handleNotification,
} from '../reducers/notificationReducer';

const Anecdote = ({ anecdote }) => {
	const dispatch = useDispatch();

	const vote = (id) => {
		console.log('vote', id);
		dispatch(handleAnecdoteVotes(id));
		dispatch(handleNotification(`your voted: ${anecdote.content}`));
		setTimeout(() => {
			dispatch(handleClearNotification());
		}, 5000);
	};

	return (
		<div>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={() => vote(anecdote.id)}>vote</button>
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
