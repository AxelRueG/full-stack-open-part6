import { addNewAnecdote, getAnecdotes, voteAPost } from '../services/anecdotes';

const anecdotesAtStart = [];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
	return {
		content: anecdote,
		id: getId(),
		votes: 0,
	};
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'VOTE':
			const newState = state.filter((e) => e.id !== action.data.id);
			newState.push(action.data);
			return newState.sort((a, b) => b.votes - a.votes);
		case 'ADD':
			return state.concat(action.data);
		case 'INIT':
			return action.data;
		default:
			return state;
	}
};

export const handleAnecdoteVotes = (anecdote) => {
	return async (dispatch) => {
		const anecdoteUpdate = await voteAPost(anecdote);
		dispatch({
			type: 'VOTE',
			data: anecdoteUpdate,
		});
	};
};

export const handleAddAnecdote = (anecdote) => {
	return async (dispatch) => {
		const Anecdote = await addNewAnecdote(anecdote);
		dispatch({
			type: 'ADD',
			data: Anecdote,
		});
	};
};

export const handleInit = () => {
	return async (dispatch) => {
		const anecdotes = await getAnecdotes();
		dispatch({
			type: 'INIT',
			data: anecdotes,
		});
	};
};

export default reducer;
