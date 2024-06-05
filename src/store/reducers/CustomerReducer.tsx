import * as actions from '../../common/types'
import { Action } from '../../common/interface'

export interface CustomerState {
    contactInfo: object
    interestAreas: object[]
}

const initialState: CustomerState = {
    contactInfo: {},
    interestAreas: []
};

export const CustomerReducer = (
    state: CustomerState = initialState,
    action: Action
) => {
    switch (action.type) {
        case actions.CUSTOMERCONTACTINFO: {
            return { ...state, contactInfo: action.payload }
        }
        case actions.CUSTOMERINTEREST: {
            return { ...state, interestAreas: action.payload }
        }
        case actions.RESETCUSTOMER: {
            return initialState
        }
        default:
            return state;
    }
};