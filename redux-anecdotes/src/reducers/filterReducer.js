const reducer = (status='', action) => {
  switch(action.type) {
    case 'WRITE':
      return action.data.filterBy
    default: return status
  }
}

export const handleFilterBy = (filterBy) => {
  return {
    type: 'WRITE',
    data: {
      filterBy
    }
  }
}

export default reducer