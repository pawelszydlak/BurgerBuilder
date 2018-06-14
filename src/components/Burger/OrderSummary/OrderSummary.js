import React from 'react';

import Button from '../../UI/Button/Button';
    
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return ( 
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        })
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>You chose the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger">CANCEL</Button>
            <Button btnType="Success">CONTINUE</Button>
        </React.Fragment>
    );
};
    
export default orderSummary;