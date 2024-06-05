import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import * as routeConstants from '../utils/routeConstants'

interface Props {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <>
            <header className="my-2">
                <ul className="d-flex" style={{ justifyContent: "space-evenly" }}>
                    <li><Link to={routeConstants.HOME} style={{ textDecoration: "underline", color: "blue" }}>Home</Link></li>
                    <li><Link to={routeConstants.ALLAUCTIONS} style={{ textDecoration: "underline", color: "blue" }}>All Auctions</Link></li>
                    <li><Link to={routeConstants.AUCTIONDETAIL} style={{ textDecoration: "underline", color: "blue" }}>Auction detail</Link></li>
                    <li><Link to={routeConstants.LOT} style={{ textDecoration: "underline", color: "blue" }}>Lot</Link></li>
                    <li><Link to={routeConstants.CATEGORY} style={{ textDecoration: "underline", color: "blue" }}>Category</Link></li>
                    <li><Link to={routeConstants.BUY} style={{ textDecoration: "underline", color: "blue" }}>Buy</Link></li>
                    <li><Link to={routeConstants.SELL} style={{ textDecoration: "underline", color: "blue" }}>Sell</Link></li>
                    <li><Link to={routeConstants.APPRAISAL} style={{ textDecoration: "underline", color: "blue" }}>Appraisal</Link></li>
                    <li><Link to={routeConstants.TEAM} style={{ textDecoration: "underline", color: "blue" }}>Team</Link></li>
                    <li><Link to={routeConstants.AUCTIONRESULT} style={{ textDecoration: "underline", color: "blue" }}>Auction Result</Link></li>
                    <li><Link to={routeConstants.ABOUT} style={{ textDecoration: "underline", color: "blue" }}>About</Link></li>
                    <li><Link to={routeConstants.HELPCENTER} style={{ textDecoration: "underline", color: "blue" }}>HelpCenter</Link></li>
                    <li><Link to={routeConstants.HELPCENTERSALESTAX} style={{ textDecoration: "underline", color: "blue" }}>HelpCenterSalesTax</Link></li>
                    <li><Link to={routeConstants.HELPCENTERBIDDER} style={{ textDecoration: "underline", color: "blue" }}>HelpCenterBidder</Link></li>
                </ul>
            </header>
            {props.children}
            <Footer />
        </>
    )
}

export default Layout