import React from 'react';
import Input from 'react-toolbox/lib/input';

import '../index.css';

const Preview = (props) => {

	const recipeList = Object.keys(props.recipes).map((recipe,i) => {
		if ( i !== 0)
			return (
				<Input
					key={i}
					type='text'
					hint={`Ingredient #${++i}`}
					value={props.recipes[recipe]}
					onChange={props.handleChange.bind(this, recipe)}
					maxLength={100}
				/>
			)
			else
			return false;

	})

	return (
	  <section id='recipeForm' style={{padding: "2rem 5rem 0rem 2rem"}}>
		<Input
			type='text'
			hint='Recipie Name'
			value={props.name}
			onChange={props.handleChange.bind(this, 'name')}
			maxLength={35}
		/>

		<Input
			type='text'
			hint='Type optional information regarding this recipe'
			value={props.message}
			onChange={props.handleChange.bind(this, 'message')}
			multiline={true}
			maxLength={1000}
	/>

		<Input
			type='text'
			hint={`Ingredient #1`}
			value={props.recipes.recipe_1}
			onChange={props.handleChange.bind(this, 'recipe_1')}
			maxLength={100}
		/>

	{recipeList}

	  </section>
	);
}

Preview.propTypes = {
	name: React.PropTypes.string.isRequired,
	recipes: React.PropTypes.object.isRequired,
	message: React.PropTypes.string.isRequired,
	handleChange: React.PropTypes.func,
	handleImageChange: React.PropTypes.func,
	generateNewRecipe: React.PropTypes.func,
	recipeCounter: React.PropTypes.number
}

export default Preview;
