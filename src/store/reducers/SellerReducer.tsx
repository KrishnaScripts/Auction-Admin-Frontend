import * as actions from '../../common/types'
import { Action } from '../../common/interface'

export interface SellerState {
    adjust: []
    payment: []
    logNote: []
    radioValue: {}
}

const initialState: SellerState = {
    adjust: [],
    payment: [],
    logNote: [],
    radioValue: { salesRepCommissionType: true, adjustTaxExempt: true, contactExempt: true },
};

export const SellerReducer = (
    state: SellerState = initialState,
    action: Action
) => {
    switch (action.type) {
        case actions.SETSELLERADJUST: {
            return { ...state, adjust: [...state.adjust, action.payload] }
        }
        case actions.SETSELLERADJUSTFROMRESP: {
            return {
                ...state, adjust: action.payload, taxExempt: action.payload.taxExempt
            }
        }
        case actions.DELETESELLERADJUST: {
            return {
                ...state,
                adjust: state.adjust.filter((entry: any) => entry.adjustUniqueId !== action.payload),
            }
        }
        case actions.UPDATESELLERADJUST:
            return {
                ...state,
                adjust: state.adjust.map((entry: any) =>
                    entry.adjustUniqueId === action.payload.adjustUniqueId ? action.payload.updatedSellerAdjust : entry
                ),
            };
        case actions.SETSELLERPAYMENT: {
            return { ...state, payment: [...state.payment, action.payload] }
        }
        case actions.SETSELLERPAYMENTRESP: {
            return { ...state, payment: action.payload }
        }
        case actions.DELETESELLERPAYMENT: {
            return {
                ...state,
                payment: state.payment.filter((entry: any) => entry.paymentUniqueId !== action.payload),
            }
        }
        case actions.UPDATESELLERPAYMENT:
            return {
                ...state,
                payment: state.payment.map((entry: any) =>
                    entry.paymentUniqueId === action.payload.paymentUniqueId ? action.payload.updatedSellerPayment : entry
                ),
            };
        case actions.SETSELLERRADIOVALUE: {
            return { ...state, radioValue: action.payload }
        }
        case actions.RESETSELLER: {
            return initialState
        }
        case actions.ADDLOGNOTE:
            return {
                ...state,
                logNote: [...state.logNote, action.payload],
            };
        case actions.DELETELOGNOTE:
            return {
                ...state,
                logNote: state.logNote.filter((entry: any) => entry.sellerLogNotesId !== action.payload),
            };
        case actions.UPDATELOGNOTE:
            return {
                ...state,
                logNote: state.logNote.map((note: any) =>
                    note.sellerLogNotesId === action.payload.sellerLogNotesId ? action.payload.updatedNote : note
                ),
            };
        default:
            return state;
    }
};