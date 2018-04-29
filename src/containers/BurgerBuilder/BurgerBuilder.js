import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICE = {
    salad: 0.5,
    meat: 1.5,
    bacon: 1.2,
    tomato: 0.9,
    cheese: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            tomato: 0,
            cheese: 0
        },
        totalPrice: 5,
        purchasable: false
    };

    updatedPurchaseState = () => {
        let ingredients = {
            ...this.state.ingredients
        };
        let sum = Object.keys(ingredients)
            .map(ingrKey => {
                return ingredients[ingrKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0}); 
    }

    addIngredientHandler = (type) => {
        const oldIngrCount = this.state.ingredients[type];
        const updatedCount = oldIngrCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const addingCost = INGREDIENTS_PRICE[type];
        const newPrice = this.state.totalPrice + addingCost;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}, () => this.updatedPurchaseState());
    };

    removeIngredientHandler = (type) => {
        const oldIngrCount = this.state.ingredients[type];
        if (oldIngrCount <= 0) {
            return;
        }
        const updatedCount = oldIngrCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const costDeduction = INGREDIENTS_PRICE[type];
        const newPrice = this.state.totalPrice - costDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}, () => this.updatedPurchaseState());
    };

    render() {
        debugger;
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;