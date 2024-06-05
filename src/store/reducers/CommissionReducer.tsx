import * as actions from '../../common/types'
import { Action } from '../../common/interface'

export interface CommissionState {
    sellerCommissionScaleSettingId: string
    salesRepCommissionScaleSettingId: string
    sellerCommission: []
    salesRepCommission: []
    sellerDefaults: Object
    salesDefaults: Object
    showLoader: boolean
    isSellerSave: boolean
    isSalesSave: boolean
}

const initialState: CommissionState = {
    sellerCommissionScaleSettingId: '',
    salesRepCommissionScaleSettingId: '',
    sellerCommission: [],
    salesRepCommission: [],
    sellerDefaults: { sold: '', passedUnsold: '', buyBack: '', nonPayer: '', passedLot: '', unPassedLot: '' },
    salesDefaults: { sold: '', passedUnsold: '', buyBack: '', nonPayer: '', passedLot: '', unPassedLot: '' },
    showLoader: false,
    isSellerSave: false,
    isSalesSave: false
};

export const CommissionReducer = (
    state: CommissionState = initialState,
    action: Action
) => {
    switch (action.type) {
        case actions.LOADER: {
            return { ...state, showLoader: action.payload }
        }
        case actions.SELLERDEFAULTS: {
            return { ...state, sellerDefaults: action.payload }
        }
        case actions.SALESDEFAULTS: {
            return { ...state, salesDefaults: action.payload }
        }
        case actions.SETSELLER: {
            return { ...state, sellerCommission: action.payload }
        }
        case actions.SETSALESREP: {
            return { ...state, salesRepCommission: action.payload }
        }
        case actions.SETSELLERCOMMSETTINGID: {
            return { ...state, sellerCommissionScaleSettingId: action.payload }
        }
        case actions.SETSALESCOMMSETTINGID: {
            return { ...state, salesRepCommissionScaleSettingId: action.payload }
        }
        case actions.SELLERSAVED: {
            return { ...state, isSellerSave: action.payload }
        }
        case actions.SALESRSAVED: {
            return { ...state, isSalesSave: action.payload }
        }
        case actions.SETSELLERLOTS: {
            return { ...state, sellerDefaults: { ...state.sellerDefaults, ...action.payload } }
        }
        case actions.SETSALESLOTS: {
            return { ...state, salesDefaults: { ...state.salesDefaults, ...action.payload } }
        }
        case actions.RESETINTIAL: {
            return initialState
        }
        default:
            return state;
    }
};
