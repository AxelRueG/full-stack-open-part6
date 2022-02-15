const notificationReducer = (state='', action) => {
  switch(action.type) {
    case 'NEW':
      return action.data.anecdote
    case 'CLEAR':
      return ''
    default: return state
  }
}

export const handleNotification = anecdote => {
  return {
    type: 'NEW',
    data: {
      anecdote
    }
  }
}

export const handleClearNotification = () => {
  return {
    type: 'CLEAR'
  }
}

export default notificationReducer