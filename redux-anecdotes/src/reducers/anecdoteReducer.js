const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type){
    case 'VOTE':
      const newState = [...state]
      for (let anecdote of newState){
        if (anecdote.id === action.data.id) anecdote.votes++
      }
      return newState.sort((a,b) => b.votes-a.votes)
    case 'ADD':
      return state.concat(action.data)
    case 'INIT':
      return action.data
    default: return state
  }
}

export const handleAnecdoteVotes = (id) => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  }
}

export const handleAddAnecdote = (anecdote) => {
  return {
    type: 'ADD',
    data: anecdote
  }
}

export const handleInit = (anecdotes) => {
  return {
    type: 'INIT',
    data: anecdotes
  }
}

export default reducer