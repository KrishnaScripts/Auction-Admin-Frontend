import * as action from '../../common/types'
import { Action } from '../../common/constants'

export const setContactInfo = (data: any): Action => ({
    type: action.CUSTOMERCONTACTINFO,
    payload: data
})

export const setInterest = (data: any): Action => ({
    type: action.CUSTOMERINTEREST,
    payload: data
})