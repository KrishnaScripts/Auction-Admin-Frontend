import { Swiper, SwiperSlide } from 'swiper/react';
import SearchFilter from './SearchFilter';
import disclaimer from "../assets/images/disclaimer.svg";
import listView from "../assets/images/list_view.svg";
import gridView from "../assets/images/grid_view.svg";
import Lot from './Lot';
import { lotList } from "../utils/constants";
import { useState } from 'react';
import { Navigation } from 'swiper';

const Category = () => {
    const [showSlider, setShowSlider] = useState(false);
    const getFilterData = (data: any) => {
        console.log(data)
    }
    return (
        <>
            <main className="bg_light">
                <section className="breadcum pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">All Auction</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Search</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="filter pt-3">
                    <div className="container">
                        <SearchFilter searchData={getFilterData} type={false} />
                    </div>
                </section>
                <section className="upcomming_auction pb-5 pt-2">
                    <div className="container">
                        <div className="row">

                            <div className="col-12">

                                <div className="dropdown_singal mb-3">
                                    <a href="#" className="fs-18 fw-bold text-dark position-relative pe-4 text-uppercase">Category</a>
                                </div>
                                <div className="category_list_div">
                                    <div className="card pt-4 pb-2 ps-4 pe-4 mb-5">

                                        <div className="col-12">
                                            <ul className="category_list d-flex flex-wrap" >
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                                <li><a href="#">Aggregate Equipment <span className="link_right_arrow">(<span>12</span>)</span> </a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-1">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="need_login">
                                        <div className="d-flex flex-wrap align-items-center disclaimer">
                                            <div className="disclaimer_img">
                                                <img src={disclaimer} alt="" />
                                            </div>
                                            <div className="disclaimer_content">
                                                <h6 className="mb-0"><small>Tips and Updates</small></h6>
                                                <span className="more text-dark fs-16px">Login to start bidding<a href="#" className="ms-3 text-primary text-decoration">hide</a></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center grid_list_icon">
                                        <div className="btn-group">
                                            <button className={`btn btn-white ${showSlider === true ? 'active' : ''}`} onClick={() => {
                                                setShowSlider(false)
                                            }}> <img src={listView} alt="list view" /> </button>
                                            <button className={`btn btn-white ${showSlider === true ? 'active' : ''}`} onClick={() => {
                                                setShowSlider(true)
                                            }}> <img src={gridView} alt="list view" /> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {showSlider && (
                                <div className="col-12 mt-4">
                                    <div className="swiper timeline border-bottom ps-3 pe-3">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="text-center timeline_box">

                                                    <Swiper
                                                        modules={[Navigation]}
                                                        spaceBetween={10}
                                                        slidesPerView={1}
                                                        navigation={{
                                                            nextEl: '.swiper-button-next',
                                                            prevEl: '.swiper-button-prev',
                                                        }}
                                                        breakpoints={{
                                                            "@0.00": {
                                                                slidesPerView: 1,
                                                                spaceBetween: 10,
                                                            },
                                                            "@0.75": {
                                                                slidesPerView: 2,
                                                                spaceBetween: 20,
                                                            },
                                                            "@1.00": {
                                                                slidesPerView: 3,
                                                                spaceBetween: 20,
                                                            },
                                                            "@1.50": {
                                                                slidesPerView: 4,
                                                                spaceBetween: 20,
                                                            },
                                                        }}
                                                    >
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <a href="#" className="d-block p-2"> <span>March 21, 2023 | 10:05 AM - 10:10 AM CDT</span> </a>
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                    </div>
                                </div>
                            )}

                            <div className="col-12 mt-2">
                                <div className="mb-4 mt-3">
                                    <div className="d-flex align-items-center round_shape_left">
                                        <span className="fs-16px me-3 fw-600">Enters Live Auction Board</span> <span className="text-danger fs-16px fw-600">March 21, 2023 | 10:00 AM - 10:05 AM CDT</span>
                                    </div>
                                </div>
                                <Lot data={lotList} />

                            </div>
                            <div className="col-12 mt-2">

                                <div className="mb-4">
                                    <div className="d-flex align-items-center round_shape_left">
                                        <span className="fs-16px me-3 fw-600">Enters Live Auction Board</span> <span className="text-warning fs-16px fw-600">March 21, 2023 | 10:00 AM - 10:05 AM CDT</span>
                                    </div>
                                </div>
                                <Lot data={lotList} />
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}
export default Category;


