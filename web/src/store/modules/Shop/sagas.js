import { takeLatest, all, call, put } from 'redux-saga/effects'
import types from './types'
import rest from '../../../Services/rest'

import { setShops, setShop } from './actions'

export function* allShops() {
    try {
        const { data: res } = yield call(rest.get, '/shops')
        yield put(setShops(res.shops))

    } catch (error) {
        console.log(error.message)
        
    }

}

export function* requestShop(payload) {
    try {
        const { data: res } = yield call(rest.get, `/shops/${payload.id}`)
        yield put(setShop(res.shop))

    } catch (error) {
        console.log(error.message)
    }
}

export default all([
    takeLatest(types.ALL_SHOP, allShops),
    takeLatest(types.REQUEST_SHOP, requestShop),
])