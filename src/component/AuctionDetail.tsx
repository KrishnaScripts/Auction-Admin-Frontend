import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Thumbs } from 'swiper';
import { useState } from 'react';
import Fancybox from './FancyBox';
import image from "../assets/images/disclaimer.svg";

const AuctionDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>("");
    return (
        <>
            <main className="bg_light">
                <section className="pt-4 bg-white">
                    <div className="container">
                        <div className="row">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">All Auctions</a></li>
                                    <li className="breadcrumb-item"><a href="#">Wel-Cum In Farms Equipment Retirement Dispersal</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Liquid Nurse Tank (PZ10356, Unit 06)</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="pt-4 pb-4 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <h4 className="mb-0">Lot#2</h4>
                                    <span>7 Bids</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-end">
                                    <span className="text-uppercase text-primary fw-600">Highest Bid</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="fs-20">Liquid Nurse Tank (PZ10356, Unit 06)</span>
                                    <span className="">$600</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fs-16px me-3 fw-600">Enters Live Auction Board</span> <span
                                        className="text-danger fs-16px fw-600">March 21, 2023 | 10:00 AM - 10:05 AM CDT</span> <span
                                            className="ms-auto fw-600 text-blue"><i className="fa-regular fa-user"></i> rr1box121</span>
                                </div>
                                <div className="d-flex flex-wrap justify-content-end mt-3">
                                    <a href="#" className="btn btn-primary me-3">Login to Bid</a><a href="#" className="btn btn-primary">Get
                                        Financing</a>
                                </div>
                                <hr style={{ backgroundColor: "#DCDFE6" }} />
                                <div className="d-flex flex-wrap disclaimer">
                                    <div className="disclaimer_img">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="disclaimer_content">
                                        <h6>DPA Disclaimer</h6>
                                        <span className="more text-primary">Equipment Sold "AS IS, WHERE IS": All equipment/property is sold "AS IS, WHERE IS"
                                            with no warranty or guarantees, expressed or implied, No operational assessments have been made by DPA Auctions on this
                                            item, it has been photographed ONLY. Equipment Sold "AS IS, WHERE IS": All equipment/property is sold "AS IS, WHERE IS"
                                            with no warranty or guarantees, expressed or implied, No operational assessments have been made by DPA Auctions on this item,
                                            it has been photographed ONLY.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-5 pb-5 detail_slider border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="position-relative overflow-hidden">
                                    <div className="gallery-container " id="gallery-container">

                                        <div className="swiper top_gallery">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <Fancybox
                                                        options={{
                                                            Carousel: {
                                                                infinite: false,
                                                            },
                                                        }}
                                                    >
                                                        <Swiper
                                                            modules={[Navigation, Thumbs, Pagination]}
                                                            thumbs={{ swiper: thumbsSwiper }}
                                                            spaceBetween={10}
                                                            slidesPerView={1}
                                                            navigation
                                                            pagination={{ type: 'fraction' }}
                                                            // data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
                                                            data-lg-size="2500-2500" className="gallery-item d-flex align-items-center justify-content-center"
                                                        >
                                                            <SwiperSlide >
                                                                <a data-fancybox="gallery" href="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_1.jpg">
                                                                    <img className="img-fluid" src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_1.jpg" alt="image1" />
                                                                </a>
                                                            </SwiperSlide>
                                                            <SwiperSlide >
                                                                <a data-fancybox="gallery" href="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_2.jpg">
                                                                    <img className="img-fluid" src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_2.jpg" alt="image1" />
                                                                </a>
                                                            </SwiperSlide>
                                                            <SwiperSlide >
                                                                <a data-fancybox="gallery" href="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_3.jpg">
                                                                    <img className="img-fluid" src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_3.jpg" alt="image1" />
                                                                </a>
                                                            </SwiperSlide>
                                                            <SwiperSlide >
                                                                <a data-fancybox="gallery" href="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_4.jpg">
                                                                    <img className="img-fluid" src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_4.jpg" alt="image1" />
                                                                </a>
                                                            </SwiperSlide>
                                                            <SwiperSlide >
                                                                <a data-fancybox="gallery" href="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_5.jpg">
                                                                    <img className="img-fluid" src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_5.jpg" alt="image1" />
                                                                </a>
                                                            </SwiperSlide>
                                                            <SwiperSlide >
                                                                <a data-fancybox="gallery" href="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_6.jpg">
                                                                    <img className="img-fluid" src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_6.jpg" alt="image1" />
                                                                </a>
                                                            </SwiperSlide>
                                                            <SwiperSlide >
                                                                <a data-fancybox="gallery" href="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_7.jpg">
                                                                    <img className="img-fluid" src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_7.jpg" alt="image1" />
                                                                </a>
                                                            </SwiperSlide>
                                                            <SwiperSlide >
                                                                <a data-fancybox="gallery" href="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_8.jpg">
                                                                    <img className="img-fluid" src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_8.jpg" alt="image1" />
                                                                </a>
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </Fancybox>
                                                </div>
                                            </div>
                                            <div className="swiper-pagination"></div>
                                        </div>

                                        <div className="swiper mt-2 pt-1 bottom_gallery">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <Swiper
                                                        spaceBetween={10}
                                                        slidesPerView={8}
                                                        freeMode={true}
                                                        watchSlidesProgress={true}
                                                        onSwiper={setThumbsSwiper}
                                                    >
                                                        <SwiperSlide>
                                                            <img className="img-fluid"
                                                                src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_1.jpg" alt="image1" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img className="img-fluid"
                                                                src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_2.jpg" alt="image1" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img className="img-fluid"
                                                                src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_3.jpg" alt="image1" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img className="img-fluid"
                                                                src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_4.jpg" alt="image1" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img className="img-fluid"
                                                                src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_5.jpg" alt="image1" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img className="img-fluid"
                                                                src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_6.jpg" alt="image1" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img className="img-fluid"
                                                                src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_7.jpg" alt="image1" />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <img className="img-fluid"
                                                                src="https://www.dpaauctions.com/live/images/auction-460/large-120807.0_8.jpg" alt="image1" />
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="map mt-4 pt-3">
                                        <label className="border-bottom pb-1 mb-3 d-block">Location</label>
                                        <div className="map_frame w-100">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d337711.27639425354!2d-97.667842!3d48.602773000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c3f2f6db5d995d%3A0x5c2e05565a1d5018!2sCrystal%2C%20ND%2058222!5e0!3m2!1sen!2sus!4v1683203988512!5m2!1sen!2sus"
                                                width="100%" height="350" loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 ps-lg-5">
                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">Description</span>
                                    <p className="mb-0">2007 Terra Gator 8203 Floater (DR3992 Unit 258729), diesel engine, Terra Shift
                                        transmission, Soil Election Air Max 2000 stainless steel hydraulic air flow box, 70' boom, electric roll
                                        tarp, Falcon controller, Raven auto steer, cab cam, 1000/50R25 tires.</p>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">Serial Number</span>
                                    <p className="mb-0">AGCA8203ANS001022</p>
                                </div>


                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">Notes</span>
                                    <p className="mb-0">Motor and pump were not operationally tested.</p>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">Documents</span>
                                    <p className="mb-0">More from this seller</p>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">Category</span>
                                    <p className="mb-0">More From This Seller +</p>
                                    <p className="mb-0">Category: <a href="#">Application Equipment</a>, <a href="#">Application Equipment</a>, <a
                                        href="#">Application Equipment</a> </p>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">Contact</span>
                                    <p className="mb-0"><span>Damian</span> <a href="#">319-572-1816</a> </p>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">LOCATION</span>
                                    <p className="mb-0">Sperry, IA 52650</p>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">CUSTOMER QUESTIONS</span>
                                    <div className="d-flex flex-wrap justify-content-between">
                                        <div className="me-2">
                                            <span> Toll Free</span>
                                            <p className="mb-0 fw-600"><a href="#" className="text">800-492-9090</a></p>
                                        </div>
                                        <div className="me-2">
                                            <span> Office</span>
                                            <p className="mb-0 fw-600"><a href="#" className="text">402-721-4388</a></p>
                                        </div>
                                        <div className="me-2">
                                            <span> Email</span>
                                            <p className="mb-0 fw-600"><a href="#" className="text">customer.service@DPAauctions.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-bottom pb-3 mb-3">
                                    <span className="text-uppercase text-grey d-flex w-100 mb-2">TRANSPORTATION / SHIPPING QUOTES</span>
                                    <p className="mb-0"> <a href="#" className="text-dark fw-600">Click here for the list</a></p>
                                </div>
                                <div className="pb-3 mb-3">
                                    <p className="fw-600">Equipment Sold "AS IS, WHERE IS": All equipment/property is sold "AS IS, WHERE IS" with
                                        no warranty or guarantees, expressed or implied, No operational assessments have been made by DPA
                                        Auctions on this item, it has been photographed ONLY.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </main >
        </>
    )
}
export default AuctionDetail;