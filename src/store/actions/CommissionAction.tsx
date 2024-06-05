import * as action from '../../common/types'
import { Action } from '../../common/constants'

export const showLoader = (data: any): Action => ({
    type: action.LOADER,
    payload: data
})

export const sellerDefaults = (data: any): Action => ({
    type: action.SELLERDEFAULTS,
    payload: data
})

export const saleDefaults = (data: any): Action => ({
    type: action.SALESDEFAULTS,
    payload: data
})

export const setSellerData = (data: any): Action => ({
    type: action.SETSELLER,
    payload: data
})

export const setSalesRepData = (data: any): Action => ({
    type: action.SETSALESREP,
    payload: data
})

export const setSellerCommSettingId = (data: any): Action => ({
    type: action.SETSELLERCOMMSETTINGID,
    payload: data
})

export const setSalesCommSettingId = (data: any): Action => ({
    type: action.SETSALESCOMMSETTINGID,
    payload: data
})

export const sellerSaved = (data: any): Action => ({
    type: action.SELLERSAVED,
    payload: data
})

export const salesSaved = (data: any): Action => ({
    type: action.SALESRSAVED,
    payload: data
})

export const setSellerLots = (data: any): Action => ({
    type: action.SETSELLERLOTS,
    payload: data
})

export const setSalesLots = (data: any): Action => ({
    type: action.SETSALESLOTS,
    payload: data
})