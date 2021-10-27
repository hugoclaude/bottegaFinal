import React, { Component} from 'react';

import { Connect } from 'react-redux';

import CheckoutProduct from './checkoutProduct';

class CheckoutProduct extends Component {
    render () {
        const { className } = this.props;
        return (
            <div className={`${className} review-products`}>
                {
                    this.props.cartProducts.map(cartProduct => {
                        return <ReviewProduct
                        key={cartProduct._id}
                        {...cartProduct}
                        />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

CheckoutProducts = connect(mapStateToProps)(CheckoutProducts);

export default CheckoutProduct;