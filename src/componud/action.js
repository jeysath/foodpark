import {
    ADD_SHOPPING_ITEM,
    DECREASE_SHOPPING_ITEM
} from "./constant";

export const AddShoppingItemAction = (foodId) => ({
    type: ADD_SHOPPING_ITEM,
    payload: foodId,

})

export const DecreaseShoppingItemAction = (foodId) => ({
    type: DECREASE_SHOPPING_ITEM,
    payload: foodId,
})