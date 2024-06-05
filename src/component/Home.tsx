import numberBanner from "../assets/images/number_banner.png"
import roundBanner from "../assets/images/round_banner.png"
import { vehicleCategories } from '../utils/constants';
import List from "./List";


import { ListData, cardData } from "../utils/constants";
import BuySell from "./BuySell";
import SearchFilter from "./SearchFilter";

const Home = () => {
    const searchData = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <main>
                <section className="hero_slider">
                    {/* Swiper */}
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide hero_bg align-items-center">
                                <div className="slider_data pt-5 pb-5">
                                    <span> Celebrating </span>
                                    <div className="fifty_year position-relative">
                                        <img src={numberBanner} alt='numberBanner' />
                                        <img src={roundBanner} alt='roundBanner' />
                                    </div>
                                    <span>Years in Auction Industry</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <section className="minus-top-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="view-tab" data-bs-toggle="tab" data-bs-target="#view" type="button" role="tab" aria-controls="view" aria-selected="true">View all auctions</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false">Sell with DPA</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="evaluate-tab" data-bs-toggle="tab" data-bs-target="#evaluate" type="button" role="tab" aria-controls="evaluate" aria-selected="false">Evaluate</button>
                                    </li>
                                </ul>
                                <div className="tab-content mt-4" id="myTabContent">
                                    <SearchFilter searchData={searchData} type={false} />
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

                <section className="upcomming_auction pb-5 mb-5 border-bottom mt-4" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-1">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <h2 className="mt-2 mb-2 fw-normal">Upcoming Auctions</h2>
                                    <a href="#" className="link_with_arrow">View All</a>
                                </div>
                                <List data={ListData} type={'list'} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="highlighted_auctions pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <h2 className="mt-2 mb-2 fw-normal">Highlighted Auctions</h2>
                                    <a href="#" className="link_with_arrow">View All</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <List data={cardData} type={'card'} />
                        </div>
                    </div>
                </section>


                <section className="pt-5 pb-5 bg_light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <h2 className="mt-2 mb-2 fw-normal">Categories</h2>
                                    <a href="#" className="link_with_arrow">View All</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="category_list d-flex flex-wrap">
                                    {vehicleCategories.map((vehicle, index) => {
                                        return (
                                            <li key={index}><a href="#">{vehicle.label}<span className="link_right_arrow">(<span>{vehicle.count}</span>)</span> </a> </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <BuySell />
            </main>
        </>
    )
}

export default Home