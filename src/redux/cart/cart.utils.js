export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existiingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existiingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )
    }

    // First time adding this item:
    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}