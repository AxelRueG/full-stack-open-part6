const notificationReducer = (state='', action) => {
  switch(action.type) {
    case 'NEW':
      return action.data
    case 'CLEAR':
      return ''
    default: return state
  }
}

let timeInterval = null

export const handleNotification = (message, time) => {
  return dispatch => {
    dispatch({
      type: 'NEW',
      data: message
    })
    clearTimeout(timeInterval)
    timeInterval =setTimeout(() => {
			dispatch({ type: 'CLEAR' });
		}, time*1000);
  } 
}

export default notificationReducer