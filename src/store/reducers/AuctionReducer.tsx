import * as actions from '../../common/types'
import { Action } from '../../common/interface'

export interface AuctionState {
    activeStep: number
    auctionInfo: object
    auctionInfoData: object
}

const initialState: AuctionState = {
    activeStep: 1,
    auctionInfo: { activeStep: 1, activeLabel: "Address & Dates" },
    auctionInfoData: { addressDates: {}, webText: {}, automatedEmail: {}, logoPhotos: {} }
};

export const AuctionReducer = (
    state: AuctionState = initialState,
    action: Action
) => {
    switch (action.type) {
        case actions.ACTIVESTEP: {
            return { ...state, activeStep: action.payload }
        }
        case actions.AUCTIONNFOACTIVE: {
            return { ...state, auctionInfo: action.payload }
        }
        case actions.AUCTIONINFO: {
            return { ...state, auctionInfoData: action.payload }
        }
        case actions.RESETAUCTION: {
            return initialState
        }
        default:
            return state;
    }
};