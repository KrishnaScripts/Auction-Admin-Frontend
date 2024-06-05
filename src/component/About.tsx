import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import numberBanner from "../assets/images/number_banner.png";
import roundBanner from "../assets/images/round_banner.png";
import avoutStory from "../assets/images/story_about.png";
import service from "../assets/images/service.png";
import Benefit from "../assets/images/Benefit.png";
import rightArrow from "../assets/images/slider_right_arrow.svg";
import leftArrow from "../assets/images/slider_left_arrow.svg";
import seller from "../assets/images/seller.png";
import buyer from "../assets/images/buyer.png";

const About = () => {

    return (
        <>
            <main>

                <section className="hero_slider">
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

                <section className="story pt-5 pb-5 bg_primary_gradient">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 pt-4 pb-4 ps-lg-5 order-lg-2">
                                <div className="img-rounded ratio_same mw-85 m-auto">
                                    <img src={avoutStory} alt="DPA story image" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-6 pt-4 pb-4 pe-lg-5 order-lg-1">
                                <div className=" mb-4 common-title">
                                    <h1 className="text-white fs-36 mb-3">Our Story</h1>
                                    <h2 className="text-white fs-20 mb-4">From humble beginnings, DPA Auctions has a rich history of change and
                                        development.</h2>
                                </div>
                                <p className="text-white fs-18 fw-300">Del Peterson built Del Peterson & Associates in 1972, with a primary
                                    focus in the fertilizer industry. The family business grew by the exceptional service that they provided
                                    to their clientele. Decades later, Del’s son, Steve Peterson, took over the company and led the innovative
                                    front to the nation's premier online auction company. Today we offer a seamless and simple process to
                                    selling heavy machinery in the agricultural, construction, and transportation industries. With millions of
                                    website visits per month and an unlimited amount of satisfied buyers and sellers, DPA continues to be the
                                    most simple and successful option for business owners to buy and sell their equipment.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service bg_light pt-5 pb-5">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6 pt-4 pb-4 pe-lg-5 bg-service ">
                                <div className="row align-items-center h-100">
                                    <div className="col-12">
                                        <div className="img-rounded ratio_same right-side box-shadow-large mw-85 m-auto">
                                            <img src={service} alt="service" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pt-4 pb-4 ps-lg-5 ">
                                <div className=" mb-4 common-title">
                                    <h1 className="text-dark fs-36 mb-3">Our Services</h1>
                                    <h2 className="text-dark fs-20 mb-4">DPA Auctions is an online auction experience unlike any other.</h2>
                                </div>
                                <p className="text-dark fs-18 fw-300">DPA Auctions is an online auction experience unlike any other. We have
                                    disrupted the online auction industry by attracting well-qualified buyers from across the country and
                                    internationally. Our Live Auction Board provides the feel of an on-site auction with a dynamic clock and
                                    bidding extension time, all from the comfort and convenience of bidding from your own computer, tablet, or
                                    smartphone.</p>
                                <p className="text-dark fs-18 fw-300">Your seamless experience is our prerogative and that is why our company
                                    consists of the most educated team of advisors that assist in the most successful outcomes. We do this
                                    through a customer-first methodology. By embracing technology, we are able to do this first hand with
                                    people all across the nation and internationally. Our business model deploys an incredibly robust data
                                    processing and telecommunication system which finds and brings together buyers and sellers alike. Our
                                    platform does this in a way which results in optimal market pricing, convenient and efficient delivery,
                                    and a very secure payment process, for each party.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service  pt-5 pb-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 pt-4 pb-4 pe-lg-5 order-lg-2">
                                <div className="row align-items-center">
                                    <div className="col-12">
                                        <div className="img-rounded ratio_same right-side box-shadow-large mw-85 m-auto">
                                            <img src={Benefit} alt="Benefit" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 pt-4 pb-4 order-lg-1">
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <div className=" mb-4 common-title">
                                            <h1 className="text-dark fs-36 mb-3">Your Benefit</h1>
                                            <h2 className="text-dark fs-20 mb-4">The Mission: To create the most seamless online auction experience
                                                with people who will treat you like family.</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper benefit_slider main_arrow_hide">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="">
                                                <Swiper
                                                    modules={[Navigation]}
                                                    spaceBetween={20}
                                                    slidesPerView={1}
                                                    centeredSlides={true}
                                                    speed={1000}
                                                    loop={false}
                                                    allowTouchMove={false}
                                                    navigation={{
                                                        nextEl: '.swiper-button-next',
                                                        prevEl: '.swiper-button-prev',
                                                    }}
                                                    breakpoints={{
                                                        640: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 20,
                                                        },
                                                        768: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 20,
                                                        },
                                                        1024: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 20,
                                                        },
                                                    }}

                                                >
                                                    <SwiperSlide>
                                                        <h6 className="text-primary">Affordable Service</h6>
                                                        <p>We have the most affordable commissions in online auctions, all without compromising quality and
                                                            the service our sellers receive. We are a family-based company and plan to work hard for families
                                                            and business owners. It is not our duty to charge more and give less, but rather charge less and
                                                            give more. Our prerogative is our clients and the best interests for your items.</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <h6 className="text-primary">Enhanced Marketing</h6>
                                                        <p>Higher quality bidders equals a higher value on your equipment sold. Our enhanced marketing
                                                            techniques are something we take pride in for our sellers. By harnessing the internet, we have the
                                                            ability to target buyers that are in need of your items. It is a work smarter mentality that will
                                                            pay off for our clients. DPA Auctions embraces technology to work more efficiently and effectively
                                                            for our buyers and sellers.</p>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <h6 className="text-primary">Full Service Experience</h6>
                                                        <p>We pride ourselves on our top-of-the-line customer experience. From the first time we talk with a
                                                            customer until they receive their check, it is a seamless process. This is because we handle all
                                                            advanced marketing, title transfer, and money transfer in house. Each seller has an entire team
                                                            behind them from certified appraisers, educated auction specialists, to marketing specialists. We
                                                            will be in contact with our buyers and sellers during the entire process, from beginning until
                                                            end.</p>
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="left_side_arrow d-flex align-items-center justify-content-between">
                                        <div className="swiper-button-next"> <img src={rightArrow} alt="right arrow" /> </div>
                                        <div className="swiper-button-prev"> <img src={leftArrow} alt="left arrow" /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg_primary_gradient become pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 od_ev mt-4 mb-4">
                                <div className="max-width-460 buy">
                                    <h4 className="text-white fw-bold mb-3">Become a Buyer</h4>
                                    <p className="fs-20 text-white letter-spacing">Buying with DPA Auctions is easy.</p>
                                    <p className="text-white letter-spacing fs-16px">If you don’t already have a bidder account, simply sign up
                                        and let the bidding begin. And remember, with our Mobile and Tablet friendly website you can bid from
                                        anywhere.</p>
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
                                    <p className="text-white letter-spacing fs-16px">From listing your equipment to collecting your check, DPA
                                        Auctions has a team of professionals that are here to help you every step of the way.</p>
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

            </main >
        </>
    )
}

export default About;