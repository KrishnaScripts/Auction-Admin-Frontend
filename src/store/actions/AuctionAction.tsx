import * as action from '../../common/types'

export type Action = {
    type: string
    payload: string
}

export const setStep = (data: any): Action => ({
    type: action.ACTIVESTEP,
    payload: data
})

export const setAuctionInfoActive = (data: any): Action => ({
    type: action.AUCTIONNFOACTIVE,
    payload: data
})

export const setAuctionId = (data: any): Action => ({
    type: action.AUCTIONID,
    payload: data
})

export const setAuctionInfo = (data: any): Action => ({
    type: action.AUCTIONINFO,
    payload: data
})