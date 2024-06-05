import buyer from "../assets/images/buyer.png";
import backgroundImage from "../assets/images/buyer_bg.jpg";
import BackgroundImage from "./BackgroundImage";
const Buy = () => {
    return (
        <>
            <main>
                <BackgroundImage Image={backgroundImage} Title={'Buyers'} SubTitle={'Become a Buyer'} PageName={'Buy'} parentPageName={'Company'} />
                <section className="bg_light pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="buy_sell_row d-flex flex-wrap align-items-center">
                                    <div className="buy_sell_content">
                                        <h2 className="mb-4">How to buy with us</h2>
                                        <h3>Buying with DPA Auctions has never been easier.</h3>
                                    </div>
                                    <div className="buy_sell_img">
                                        <img src={buyer} alt="buyer" className="w-100" />
                                    </div>
                                </div>
                                <hr className="mt-4 mb-4" style={{ backgroundColor: "#DCDFE6" }} />
                                <div className="row arrow_last_none">
                                    <div className="col-md-4 mt-4 title_arrow">
                                        <h4 className="fs-20 pe-5">Sign up for an account by clicking the JOIN DPA button below.</h4>
                                    </div>
                                    <div className="col-md-4 mt-4 title_arrow">
                                        <h4 className="fs-20 pe-5">After signing up, register with your username and password on the desired auction date.</h4>
                                    </div>
                                    <div className="col-md-4 mt-4 title_arrow">
                                        <h4 className="fs-20 pe-5">Agree to the terms of the auction and let the bidding begin.</h4>
                                    </div>
                                </div>
                                <div className="mt-5 d-flex flex-wrap justify-content-between">
                                    <div className="mt-1 mb-1">
                                        <a href="#" className="btn btn-primary pe-4 ps-4 pt-2 pb-2">Join DPA</a>
                                    </div>
                                    <div className="mt-1 mb-1">
                                        <a href="#" className="btn btn-outline-secondary pe-4 ps-4 pt-2 pb-2">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main >
        </>
    )
}

export default Buy;
