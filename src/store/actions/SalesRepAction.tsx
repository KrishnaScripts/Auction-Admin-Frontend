import * as action from '../../common/types'
import { Action } from '../../common/constants'

export const setAdjust = (data: any): Action => ({
    type: action.SETADJUST,
    payload: data
})

export const setAdjustFromResp = (data: any): Action => ({
    type: action.SETADJUSTFROMRESP,
    payload: data
})

export const setPayment = (data: any): Action => ({
    type: action.SETPAYMENT,
    payload: data
})
export const setPaymentResp = (data: any): Action => ({
    type: action.SETPAYMENTRESP,
    payload: data
})

export const setRadioValue = (data: any): Action => ({
    type: action.SETRADIOVALUE,
    payload: data
})
export const deleteAdjust = (adjustUniqueId: any): Action => ({
    type: action.DELETEADJUST,
    payload: adjustUniqueId,
})

export const updateAdjust = (adjustUniqueId: any, updatedAdjust: any) => ({
    type: action.UPDATEADJUST,
    payload: { adjustUniqueId, updatedAdjust },
})
export const deletePayment = (paymentUniqueId: any): Action => ({
    type: action.DELETEPAYMENT,
    payload: paymentUniqueId,
})

export const updatePayment = (paymentUniqueId: any, updatedPayment: any) => ({
    type: action.UPDATESELLERPAYMENT,
    payload: { paymentUniqueId, updatedPayment },
})