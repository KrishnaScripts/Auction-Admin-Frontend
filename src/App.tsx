import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/style.css';
import AuctionDetail from './component/AuctionDetail';
import AuctionList from './component/AuctionList';
import Home from './component/Home';
import * as routeConstants from './utils/routeConstants'
import About from './component/About';
import Buy from './component/Buy';
import Sell from './component/Sell';
import Team from './component/Team';
import Appraisal from './component/Appraisal';
import LotList from './component/LotList';
import Category from './component/Category';
import AuctionResult from './component/AuctionResult';
import HelpCenter from './component/HelpCenter';
import HelpCenterSalesTax from './component/HelpCenterSalesTax';
import HelpCenterBidder from './component/HelpCenterBidder';


function App() {
  return (
    <>
      <Routes>
        <Route path={routeConstants.HOME} Component={Home} />
        <Route path={routeConstants.ALLAUCTIONS} Component={AuctionList} />
        <Route path={routeConstants.AUCTIONDETAIL} Component={AuctionDetail} />
        <Route path={routeConstants.ABOUT} Component={About} />
        <Route path={routeConstants.BUY} Component={Buy} />
        <Route path={routeConstants.SELL} Component={Sell} />
        <Route path={routeConstants.TEAM} Component={Team} />
        <Route path={routeConstants.APPRAISAL} Component={Appraisal} />
        <Route path={routeConstants.LOT} Component={LotList} />
        <Route path={routeConstants.CATEGORY} Component={Category} />
        <Route path={routeConstants.AUCTIONRESULT} Component={AuctionResult} />
        <Route path={routeConstants.HELPCENTER} Component={HelpCenter} />
        <Route path={routeConstants.HELPCENTERSALESTAX} Component={HelpCenterSalesTax} />
        <Route path={routeConstants.HELPCENTERSALESTAX} Component={HelpCenterSalesTax} />
        <Route path={routeConstants.HELPCENTERBIDDER} Component={HelpCenterBidder} />
      </Routes>
    </>
  );
}

export default App;
