import layoutTypes from "./layout.types";

const INITIAL_STATE = {
    currentItem: null,
    layoutErr: []
}

const layoutReducer = (state = INITIAL_STATE, action) =>{

    switch(action.type){

        case layoutTypes.ITEM_WHITE_SUCCESS:
            return {
                ...state,
                currentItem: action.payload,
                layoutErr: []
            }
        
        case layoutTypes.ITEM_BLACK_SUCCESS:
            return {
                ...state,
                currentItem: action.payload,
                layoutErr: []
            }
        
        case layoutTypes.ITEM_DEFAULT_SUCCESS:
            return {
                ...state,
                currentItem: action.payload,
                layoutErr: []
            }
            
        default:
            return state;
    }

}


export default layoutReducer;