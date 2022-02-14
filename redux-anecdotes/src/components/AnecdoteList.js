import { useDispatch, useSelector } from 'react-redux';
import { handleAnecdoteVotes } from '../reducers/anecdoteReducer';

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();

	const vote = (id) => {
		console.log('vote', id);
		dispatch(handleAnecdoteVotes(id));
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
	const anecdotes = useSelector((state) => state);

	return anecdotes.map((anecdote) => (
		<Anecdote key={anecdote.id} anecdote={anecdote} />
	));
};
