import * as actions from '../../common/types'
import { Action } from '../../common/interface'

export interface SalesRepState {
    adjust: []
    payment: []
    radioValue: {}
    adjustCount: number
    paymentCount: number
    isSaveClick: boolean
}

const initialState: SalesRepState = {
    adjust: [],
    payment: [],
    radioValue: {},
    adjustCount: 0,
    paymentCount: 0,
    isSaveClick: false
};

export const SalesRepReducer = (
    state: SalesRepState = initialState,
    action: Action
) => {
    switch (action.type) {
        case actions.SETADJUST: {
            return { ...state, adjust: [...state.adjust, action.payload] }
        }
        case actions.SETADJUSTFROMRESP: {
            return { ...state, adjust: action.payload }
        }
        case actions.SETPAYMENT: {
            return { ...state, payment: [...state.payment, action.payload] }
        }
        case actions.SETPAYMENTRESP: {
            return { ...state, payment: action.payload }
        }
        case actions.SETRADIOVALUE: {
            return { ...state, radioValue: action.payload }
        }
        case actions.RESETRESP: {
            return initialState
        }
        case actions.DELETEADJUST: {
            return {
                ...state,
                adjust: state.adjust.filter((entry: any) => entry.adjustUniqueId !== action.payload),
            }
        }
        case actions.UPDATEADJUST:
            return {
                ...state,
                adjust: state.adjust.map((entry: any) =>
                    entry.adjustUniqueId === action.payload.adjustUniqueId ? action.payload.updatedAdjust : entry
                ),
            }
        case actions.DELETEPAYMENT: {
            return {
                ...state,
                payment: state.payment.filter((entry: any) => entry.paymentUniqueId !== action.payload),
            }
        }
        case actions.UPDATEPAYMENT:
            return {
                ...state,
                payment: state.payment.map((entry: any) =>
                    entry.paymentUniqueId === action.payload.paymentUniqueId ? action.payload.updatedPayment : entry
                ),
            };
        default:
            return state;
    }
};
