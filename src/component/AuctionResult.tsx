import BackgroundImage from "./BackgroundImage";
import buyerBg from "../assets/images/buyer_bg.jpg";

import SearchFilter from "./SearchFilter";

const AuctionResult = () => {
    const getFilterData = (data: any) => {
        console.log(data);
    }
    return (
        <>
            <main>
                <BackgroundImage Image={buyerBg} Title={'Auctions Results'} SubTitle={'with DPA Auctions'} PageName={'AUCTION RESULTS'} parentPageName={'Resources'} />
                <section className="filter pt-5">
                    <div className="container">
                        <SearchFilter searchData={getFilterData} type={true} />
                    </div>
                </section>
                <section className="pt-4 pb-5 border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <div className="card auctions_results p-4 mb-3">
                                    <div className="card-body d-flex flex-wrap align-items-center p-0">
                                        <div className="auction_detail ps-0">
                                            <h3>2-Day Online Auction</h3>
                                            <h4>Friday, March 3 | 9:00 AM Eastern</h4>
                                            <h5 className="mt-4">Marion, NY</h5>
                                        </div>
                                        <div className="auction_timeline">
                                            <div className="text-start text-lg-center mt-lg-5 mt-4">
                                                <a href="#" className="btn btn-outline-secondary fs-20 p-lg-3 p-2">View Result</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default AuctionResult;
