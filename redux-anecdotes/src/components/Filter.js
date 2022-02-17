import React from 'react';
import { connect } from 'react-redux';
import { handleFilterBy } from '../reducers/filterReducer';

const Filter = (props) => {
	const handleChange = (event) => {
		const data = event.target.value;
		props.handleFilterBy(data);
	};

	const style = {
		marginBottom: 10,
	};

	return (
		<div style={style}>
			filter <input onChange={handleChange} />
		</div>
	);
};

export default connect(
  null, 
  { handleFilterBy }
)(Filter);
