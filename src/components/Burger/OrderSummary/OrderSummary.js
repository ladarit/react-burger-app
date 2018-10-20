import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object
        .keys(props.ingredients)
        .map(ingrKey => {
            return (
                <li key={ingrKey}>                    
                    <span style={{textTransform: 'capitilize'}}>{ingrKey}</span>: {props.ingredients[ingrKey]}
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
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseContinue} btnType={'Success'}>sdaasdas</Button>
            <Button clicked={props.purchaseCancel} btnType={'Danger'}>sdaasdas</Button>
        </Aux>
    );
};

export default orderSummary;