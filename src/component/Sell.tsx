import numberBanner from "../assets/images/number_banner.png"
import roundBanner from "../assets/images/round_banner.png";
import seller from "../assets/images/seller.png";
import benefits1 from "../assets/images/benefits_1.svg";
import benefits2 from "../assets/images/benefits_2.svg";
import benefits3 from "../assets/images/benefits_3.svg";
import benefits4 from "../assets/images/benefits_4.svg";
import ContactForm from "./ContactForm";
const Sell = () => {

    return (
        <>
            <main>
                <section className="breadcum pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Company</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Sell</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="hero_slider min-height-300">
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide hero_bg d-flex flex-wrap align-items-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="slider_data pt-0 pb-0">
                                                <span>Celebrating</span>
                                                <div className="fifty_year position-relative">
                                                    <img src={numberBanner} />
                                                    <img src={roundBanner} />
                                                </div>
                                                <span>Years in Auction Industry</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg_light pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="buy_sell_row d-flex flex-wrap align-items-center">
                                    <div className="buy_sell_content">
                                        <h2 className="mb-4">How Do I Sell?</h2>
                                        <h3>From listing your equipment to collecting your check.</h3>
                                    </div>
                                    <div className="buy_sell_img">
                                        <img src={seller} alt="buyer" className="w-100" />
                                    </div>
                                </div>
                                <hr className="mt-4 mb-4" style={{ backgroundColor: "#DCDFE6" }} />
                                <div className="row">
                                    <div className="col-12 mb-4">
                                        <p className="fs-20">DPA Auctions will provide a professional and personable selling experience for each and every seller. If you are interested in finding out more about how to sell with DPA Auctions, submit the form below and your DPA rep will contact you.</p>
                                    </div>
                                </div>
                                <div className="row arrow_last_none sell_content">
                                    <div className="col-md-3 mt-4">
                                        <h4 className="fs-20"> ENHANCED MARKETING</h4>
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <h4 className="fs-20">LOWEST COMMISSIONS </h4>
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <h4 className="fs-20">50 YEARS OF EXPERIENCE</h4>
                                    </div>
                                    <div className="col-md-3 mt-4">
                                        <h4 className="fs-20">UNMATCHED CUSTOMER SERVICE</h4>
                                    </div>
                                </div>

                                <div className="row mt-5 pt-4">
                                    <div className="col-lg-3">
                                        <h2 className="fs-46 text-grey pe-lg-5">Selling Made Simple</h2>
                                    </div>
                                    <ContactForm />
                                </div>

                            </div>
                        </div>
                    </div>
                </section >

                <section className="bg_primary_gradient pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-5">
                                <h2 className="text-white fw-bold mb-4">Your Benefits</h2>
                                <h3 className="text-white">THE MISSION: To create the most seamless online auction experience with people who will treat you like family.</h3>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-lg-3 col-md-6 text-center pt-3 pb-3">
                                <div className="benefits_img d-flex align-items-center justify-content-center mb-5">
                                    <img src={benefits1} alt="benefits 1" />
                                </div>
                                <h4 className="text-white">SAVE TIME</h4>
                            </div>

                            <div className="col-lg-3 col-md-6 text-center pt-3 pb-3">
                                <div className="benefits_img d-flex align-items-center justify-content-center mb-5">
                                    <img src={benefits2} alt="benefits 1" />
                                </div>
                                <h4 className="text-white">SELL FROM YOUR LOCATION</h4>
                            </div>

                            <div className="col-lg-3 col-md-6 text-center pt-3 pb-3">
                                <div className="benefits_img d-flex align-items-center justify-content-center mb-5">
                                    <img src={benefits3} alt="benefits 1" />
                                </div>
                                <h4 className="text-white">NATIONWIDE MARKETING</h4>
                            </div>

                            <div className="col-lg-3 col-md-6 text-center pt-3 pb-3">
                                <div className="benefits_img d-flex align-items-center justify-content-center mb-5">
                                    <img src={benefits4} alt="benefits 1" />
                                </div>
                                <h4 className="text-white">FULL SERVICE</h4>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg_orange_gradient pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h2 className="text-dark fw-bold">Testimonials</h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonials_box">
                                    <div className="">
                                        <img src="images/" />
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
export default Sell;
