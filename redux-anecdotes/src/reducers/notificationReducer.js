const notificationReducer = (state='', action) => {
  switch(action.type) {
    case 'NEW':
      return action.data
    case 'CLEAR':
      return ''
    default: return state
  }
}

export const handleNotification = (message, time) => {
  return dispatch => {
    dispatch({
      type: 'NEW',
      data: message
    })
    setTimeout(() => {
			dispatch({ type: 'CLEAR' });
		}, time*1000);
  } 
}

export default notificationReducer