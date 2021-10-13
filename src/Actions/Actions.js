export const addItem = item =>{

    return{
        type:"ADD_ITEM_TO_BASKET",
        item
    };
};

export const clearBasket = () =>{

    return{
        type:"Clear_Basket"
    };
};

export const deleteItem = (id) => {
    return{
        type:"Delete_Item",
        payload:id
    }
}
