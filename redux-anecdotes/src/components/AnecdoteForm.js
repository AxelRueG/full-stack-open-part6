import { connect } from 'react-redux';
import { handleAddAnecdote } from '../reducers/anecdoteReducer';
import { handleNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		const anecdote = e.target.anecdote.value;
		e.target.anecdote.value = '';

		props.handleAddAnecdote(anecdote);
		props.handleNotification(`your added: ${anecdote}`, 5);
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

const mapDispatchToProps = {
	handleAddAnecdote,
	handleNotification
}

export default connect(
	null,
	mapDispatchToProps
)(AnecdoteForm)