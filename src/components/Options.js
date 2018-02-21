import React from 'react';

import List from 'react-toolbox/lib/list/List';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import ListItem from 'react-toolbox/lib/list/ListItem';

const Options = (props) => {
		return (
			<List selectable ripple>
				<ListSubHeader caption='Menu Options' />
					<ListItem
						caption='Add New Ingredient'
						legend="Click here to add an extra ingredient"
						onClick={props.generateNewRecipe.bind(this)}
					/>
					<ListItem
						caption='Clear Recipie'
						legend="Click here to clear all fields"
						onClick={props.handleClearForm.bind(this)}
					/>
				<ListItem
						caption='Download Recipie'
						legend="Click here to download Recipie"
						onClick={props.downloadRecipe.bind(this) }
					/>
				</List>
		)
}

Options.propTypes = {
	name: React.PropTypes.string.isRequired,
	recipes: React.PropTypes.object,
	message: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func.isRequired,
	handleClearForm: React.PropTypes.func.isRequired,
	generateNewRecipe: React.PropTypes.func.isRequired,
	downloadRecipe: React.PropTypes.func.isRequired
}

export default Options;
