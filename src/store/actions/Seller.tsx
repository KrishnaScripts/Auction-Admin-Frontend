import * as action from '../../common/types'
import { Action } from '../../common/constants'

export const setSellerAdjust = (data: any): Action => ({
    type: action.SETSELLERADJUST,
    payload: data
})

export const setSellerAdjustFromResp = (data: any): Action => ({
    type: action.SETSELLERADJUSTFROMRESP,
    payload: data
})

export const deleteSellerAdjust = (adjustUniqueId: any): Action => ({
    type: action.DELETESELLERADJUST,
    payload: adjustUniqueId,
})

export const updateSellerAdjust = (adjustUniqueId: any, updatedSellerAdjust: any) => ({
    type: action.UPDATESELLERADJUST,
    payload: { adjustUniqueId, updatedSellerAdjust },
})

export const setSellerPayment = (data: any): Action => ({
    type: action.SETSELLERPAYMENT,
    payload: data
})
export const setSellerPaymentResp = (data: any): Action => ({
    type: action.SETSELLERPAYMENTRESP,
    payload: data
})

export const deleteSellerPayment = (paymentUniqueId: any): Action => ({
    type: action.DELETESELLERPAYMENT,
    payload: paymentUniqueId,
})

export const updateSellerPayment = (paymentUniqueId: any, updatedSellerPayment: any) => ({
    type: action.UPDATESELLERPAYMENT,
    payload: { paymentUniqueId, updatedSellerPayment },
})
export const setSellerRadioValue = (data: any): Action => ({
    type: action.SETSELLERRADIOVALUE,
    payload: data
})
export const addLogNote = (data: any): Action => ({
    type: action.ADDLOGNOTE,
    payload: data,
});

export const deleteLogNote = (sellerLogNotesId: any): Action => ({
    type: action.DELETELOGNOTE,
    payload: sellerLogNotesId,
});

export const updateLogNote = (sellerLogNotesId: any, updatedNote: any) => ({
    type: action.UPDATELOGNOTE,
    payload: { sellerLogNotesId, updatedNote },
});