import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {


    render () {
        const ingredients = Object
            .keys(this.props.ingredients)
            .map(ingrKey => {
                return (
                    <li key={ingrKey}>                    
                        <span style={{textTransform: 'capitilize'}}>{ingrKey}</span>: {this.props.ingredients[ingrKey]}
                    </li>
                )
            });
        return (
            <Aux>
                <h3 style={{textAlign: 'center'}}>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredients}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseContinue} btnType={'Success'}>continue</Button>
                <Button clicked={this.props.purchaseCancel} btnType={'Danger'}>cancel</Button>
            </Aux>
        );
    }
}

export default OrderSummary;