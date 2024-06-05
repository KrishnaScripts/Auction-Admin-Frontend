import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { SalesRepReducer } from "./reducers/SalesRepReducer";
import { CommissionReducer } from "./reducers/CommissionReducer";
import { SellerReducer } from "./reducers/SellerReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { AuctionReducer } from "./reducers/AuctionReducer";
import { CustomerReducer } from "./reducers/CustomerReducer";

const rootReducer = combineReducers({
    salesRep: SalesRepReducer,
    commission: CommissionReducer,
    auction: AuctionReducer,
    seller: SellerReducer,
    customer: CustomerReducer
});

const middleware = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));