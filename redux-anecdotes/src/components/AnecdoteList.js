import { connect } from 'react-redux';
import { handleAnecdoteVotes } from '../reducers/anecdoteReducer';
import { handleNotification } from '../reducers/notificationReducer';



const AnecdoteList = (props) => {

	const vote = (anecdote) => {
		props.handleAnecdoteVotes(anecdote);
		props.handleNotification(`your voted: ${anecdote.content}`, 5);
	}

	return props.anecdotes.map((anecdote) => (
		<div key={anecdote.id}>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={() => vote(anecdote)}>vote</button>
			</div>
		</div>
	));
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes.filter((elem) => elem.content.includes(state.filterBy))
	}
}

const mapDispatchToProps = {
	handleAnecdoteVotes,
	handleNotification
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)