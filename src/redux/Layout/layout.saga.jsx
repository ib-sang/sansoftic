import { all, call, put, takeLatest } from "redux-saga/effects";
import layoutTypes from "./layout.types";
import  { itemWhiteSuccess, itemBlackSuccess, itemDefaultSuccess } from './layout.actions';

export function* itemDefault(){
    try {
        const color ='default';
        yield put(itemDefaultSuccess(color))
    } catch (error) {
        console.log(error)
    }
}

export function* onLayoutDefaultStart(){
    yield takeLatest(layoutTypes.ITEM_DEFAULT_START, itemDefault)
}

export function* itemBlack(){
    try {
        const color ='black';
        yield put(itemBlackSuccess(color))
    } catch (error) {
        console.log(error)
    }
}

export function* onLayoutBlackStart(){
    yield takeLatest(layoutTypes.ITEM_BLACK_START, itemBlack)
}

export function* itemWhite(){
    try {
        const color ='white';
        yield put(itemWhiteSuccess(color))
    } catch (error) {
        console.log(error)
    }
}

export function* onLayoutWhiteStart(){
    yield takeLatest(layoutTypes.ITEM_WHITE_START, itemWhite)
}

export default function* layoutSaga(){
    yield all([
        call(onLayoutWhiteStart),
        call(onLayoutBlackStart),
        call(onLayoutDefaultStart)
    ])
}