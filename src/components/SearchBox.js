import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
	<div className='pa2'>
	<input 
	className='pa3 b--darkblue bg-light-blue dim br4'
	type="search"
	placeholder="search here "
    onChange={searchChange}
    value={this.props.value}
    name="value"	
	/>
	</div>
	);
}
export default SearchBox;