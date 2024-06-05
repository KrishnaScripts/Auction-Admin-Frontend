import buyer from "../assets/images/buyer.png";
import seller from "../assets/images/seller.png";

interface Props {
}

const BuySell: React.FC<Props> = ({ }) => {
    return (
        <>
            <section className="bg_primary_gradient become pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 od_ev mt-4 mb-4">
                            <div className="max-width-460 buy">
                                <h4 className="text-white fw-bold mb-3">Become a Buyer</h4>
                                <p className="fs-20 text-white letter-spacing">Buying with DPA Auctions is easy.</p>
                                <p className="text-white letter-spacing fs-16px">If you don’t already have a bidder account, simply sign up and let the bidding begin. And remember, with our Mobile and Tablet friendly website you can bid from anywhere.</p>
                                <div className="d-flex flex-wrap align-items-center mt-4">
                                    <div className="become_text_btn calc-170">
                                        <p className="text-white letter-spacing">Click the button below to get the process started.</p>
                                        <div className="mt-4">
                                            <a href="#" className="btn btn-white ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 ps-4 pe-4 pt-2 pb-2">Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="become_img width-170">
                                        <img src={buyer} alt="become Buyer" className="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 od_ev mt-4 mb-4">
                            <div className="max-width-460 buy">
                                <h4 className="text-white fw-bold mb-3">Become a Seller</h4>
                                <p className="fs-20 text-white letter-spacing">Do you have equipment you are considering selling?</p>
                                <p className="text-white letter-spacing fs-16px">From listing your equipment to collecting your check, DPA Auctions has a team of professionals that are here to help you every step of the way.</p>
                                <div className="d-flex flex-wrap align-items-center mt-4">
                                    <div className="become_text_btn calc-170">
                                        <p className="text-white letter-spacing">Click the button below to get the process started.</p>
                                        <div className="mt-4">
                                            <a href="#" className="btn btn-white ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 ps-4 pe-4 pt-2 pb-2">Sell Now</a>
                                        </div>
                                    </div>
                                    <div className="become_img width-170">
                                        <img src={seller} alt="become Buyer" className="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuySell;

