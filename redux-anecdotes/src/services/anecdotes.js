import axios from 'axios';

const url = 'http://localhost:3001/anecdotes';

export const getAnecdotes = async () => {
	const response = await axios.get(url);
	return response.data;
};

export const addNewAnecdote = async (anecdote) => {
	const response = await axios.post(url, { content: anecdote, votes: 0 });
	return response.data;
};

export const voteAPost = async (anecdote) => {
	const response = await axios.put(`${url}/${anecdote.id}`, {
		...anecdote,
		votes: anecdote.votes + 1,
	});
	return response.data;
};
