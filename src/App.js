import React from 'react';

import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';



import Options from './components/Options';
import Preview from './components/Preview';

const App  = (props) => {

    return (
        <Layout>
            <Panel>
            <AppBar title='React Recipie Generator' leftIcon='menu' fixed flat/>
                <div style={{flex: 1, overflowY: 'auto', paddingTop: "6rem"}}>
                  <Options
                    name={props.name}
                    recipes={props.recipes}
                    message={props.message}
                    handleClearForm={props.handleClearForm}
                    handleChange={props.handleChange}
                    generateNewRecipe={props.generateNewRecipe}
                    downloadRecipe={props.downloadRecipe }

                    />
                </div>
            </Panel>
            <Sidebar width={75} pinned >
                <div id='generatedTweet' style={{ flex:1, paddingTop: "6rem"}}>
                    <Preview
                        name={props.name}
                        recipes={props.recipes}
                        message={props.message}
                        image={props.image}
                        handleChange={props.handleChange}
                        convertHashTag={props.convertHashTag}
                        generateNewRecipe={props.generateNewRecipe}
                        recipeCounter={props.recipeCounter}
                    />
                </div>
            </Sidebar>
        </Layout>
    );
}

export default App;
