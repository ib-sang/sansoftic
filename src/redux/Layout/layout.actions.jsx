import layoutTypes from "./layout.types";

export const itemWHITEStart = () => ({
    type: layoutTypes.ITEM_WHITE_START
});

export const itemWhiteSuccess = layout => ({
    type: layoutTypes.ITEM_WHITE_SUCCESS,
    payload: layout
});

export const itemBlackStart = () =>({
    type: layoutTypes.ITEM_BLACK_START
});

export const itemBlackSuccess = layout => ({
    type: layoutTypes.ITEM_BLACK_SUCCESS,
    payload:layout
});

export const itemDefaultStart = () =>({
    type: layoutTypes.ITEM_DEFAULT_START
});

export const itemDefaultSuccess = layout =>({
    type: layoutTypes.ITEM_DEFAULT_SUCCESS,
    payload: layout
});
