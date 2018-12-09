import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    meat: 1.5,
    bacon: 1.2,
    tomato: 0.9,
    cheese: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 5,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount () {
        axios.get('/ingredients.json')
            .then((response) => {
                this.setState({ ingredients: response.data });
            }).catch(error => {
                this.setState({error: true});
            });
    }

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

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: Number(this.state.totalPrice.toFixed(2)),
            customer: {
                name: 'anonymous',
                email: 'test@test.com',
                adress: {
                    country: 'none',
                    city: 'none',
                    street: 'none'    
                }                
            },
            orderDate: new Date(),
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false})
            }).catch(error => {
                this.setState({loading: false, purchasing: false})
                console.log(error);
            });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can`t be loaded :(</p> : <Spinner/>;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabledInfo={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    price={this.state.totalPrice}
                    purchaseCancel={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients}>
                </OrderSummary>
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);