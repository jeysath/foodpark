import { foodlist } from "./foodlist";
import {
    ADD_SHOPPING_ITEM,
    DECREASE_SHOPPING_ITEM
} from "./constant";



export const reducer = (state = foodlist, action) => {
    switch (action.type) {
        case ADD_SHOPPING_ITEM:
            state.forEach(item => {
                if (item.id === parseInt(action.payload)) {
                    item["qty"] = item["qty"] + 1

                }
            })
            return [...state];
            break;

        case DECREASE_SHOPPING_ITEM:
            state.forEach(item => {
                if (item.id === parseInt(action.payload)) {
                    item["qty"] = item["qty"] - 1

                }
            })
            return [...state];
            break;

        default:
            return state;
    }


}