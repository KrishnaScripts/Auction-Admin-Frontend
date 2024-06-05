import listView from "../assets/images/list_view.svg";
import gridView from "../assets/images/grid_view.svg";
import List from './List';
import { ListData, cardData } from "../utils/constants";
import BuySell from './BuySell';
import SearchFilter from './SearchFilter';
import { useState } from "react";

const AuctionList = () => {
    const [type, setType] = useState('list')
    const [data, setData] = useState<any>(ListData)
    const getFilterData = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <main className="bg_light">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content mt-4" id="myTabContent">
                                    <SearchFilter searchData={getFilterData} type={false} />
                                    <section className="upcomming_auction pb-5 pt-2">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 mb-1">
                                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                        <h2 className="mt-2 mb-2 fw-normal">All Auctions <span className="text-primary fs-24">156 <span>Auctions</span> </span></h2>
                                                        <div className="d-flex align-items-center grid_list_icon">
                                                            <div className="btn-group">
                                                                <button className={`btn btn-white ${type === 'list' ? 'active' : ''}`} onClick={() => {
                                                                    setType('list')
                                                                    setData(ListData)
                                                                }}> <img src={listView} alt="list view" /> </button>
                                                                <button className={`btn btn-white ${type === 'grid' ? 'active' : ''}`} onClick={() => {
                                                                    setType('grid')
                                                                    setData(cardData)
                                                                }}> <img src={gridView} alt="list view" /> </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <List data={data} type={type} />
                                            </div>
                                        </div>
                                    </section>
                                    <div className="tab-pane fade" id="sell" role="tabpanel" aria-labelledby="sell-tab">
                                        Sell
                                    </div>
                                    <div className="tab-pane fade" id="evaluate" role="tabpanel" aria-labelledby="evaluate-tab">
                                        evaluate
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <BuySell />
        </>
    )
}
export default AuctionList;
