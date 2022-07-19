let defaultState = {
    selectedItems: { 
        items: [],
        restaurantName: ''
    }
}

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_CART': {
            let newState = { ...state };

            if (action.payload.item.checkboxValue) {
                newState.selectedItems = {
                    items: [ 
                        ...state.selectedItems.items,
                        action.payload.item
                    ],
                    restaurantName: action.payload.restaurantName,
                }
            }
            else{
                newState.selectedItems.items = newState.selectedItems.items.filter(
                    plate => {
                        return plate.title !== action.payload.item.title;
                    }
                );
            }
            return newState;
        }
    }
    return state;
}

export default cartReducer;