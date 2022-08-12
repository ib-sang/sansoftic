import { all ,call } from 'redux-saga/effects';

import layoutSaga from "./Layout/layout.saga";
import userSaga from './User/user.saga';

export default function* rootSaga(){
    yield all([
        call(layoutSaga),
        call(userSaga)
    ])
}