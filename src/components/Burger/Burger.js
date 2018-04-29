import React from 'react';
import cssClasses from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //get each ingredient as a separate array
    let ingredientsInArrays = Object.keys(props.ingredients) //transform props.ingredients array to object of keys
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])]
                .map((_, index) => {
                    return <BurgerIngredient 
                        key={ingrKey + '_' + index}
                        type={ingrKey}/>;
                });
        });
    //union ingredients into one array
    let ingredientsArray = ingredientsInArrays.reduce((existingIngrArray, addedIngr) => {
        return existingIngrArray.concat(addedIngr);            
    }, []);
    if(ingredientsArray.length === 0){
        ingredientsArray = <p>Please start adding ingredients</p>
    }
    console.log(ingredientsArray);
    return(
        <div className={cssClasses.BurgerScroolHider}>
            <div className={cssClasses.Burger}>            
                <BurgerIngredient type='bread-top'/>
                {ingredientsArray}
                <BurgerIngredient type='bread-bottom'/>
            </div>
        </div>
    );
}

export default burger;