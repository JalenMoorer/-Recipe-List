import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import App from '../App';

class AppContainer extends Component {

    state = {
        name: '',
        message: '',
        recipeCounter: 1,
        recipes: {
          recipe_1: ''
        }
      };

    initialState = this.state;

    handleChange = (name, value) => {
      if(name.includes('recipe')) {
         this.setState(prevState => ({ recipes: {...prevState.recipes, [name]: value} }));
      }
      else
        this.setState({...this.state, [name]: value});
    };


    handleClearForm = (e) => {
      this.setState(this.initialState);
    };

    generateNewRecipe = (e) => {
          const newIngredient = { ...this.state.recipes,  [`recipe_${++this.state.recipeCounter}`]: ''};
          this.setState({recipes: newIngredient}, () => {
          });
    };


    downloadRecipe = () => {
        domtoimage.toBlob(document.getElementById('recipeForm'), { quality: 0.95, bgcolor: 'white'})
            .then(function (blob) {
                FileSaver.saveAs(blob, 'Recipe.png');
            });
    };

	render() {
		return (
			<App
	            name={this.state.name}
	            message={this.state.message}
              recipes={this.state.recipes}
	            image={this.state.image}
	            handleChange={this.handleChange}
	            handleClearForm={this.handleClearForm}
	            convertHashTag={this.convertHashTag}
	            generateNewRecipe={this.generateNewRecipe}
              recipeCounter={this.state.recipeCounter}
              downloadRecipe={this.downloadRecipe}
			/>
		);
	}
}


export default AppContainer;
