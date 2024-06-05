
import SearchFilter from './SearchFilter';
import listView from "../assets/images/list_view.svg";
import gridView from "../assets/images/grid_view.svg";
import Lot from "./Lot";
import { lotList } from "../utils/constants";

const LotList = () => {
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
                            <div className="col-12 mb-1">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <h2 className="mt-2 mb-2 fw-500">All Auctions <span className="text-primary fs-24">156 <span>Auctions</span> </span></h2>
                                    <div className="d-flex align-items-center grid_list_icon">
                                        <div className="btn-group">
                                            <a href="#" className="btn btn-white active"> <img src={listView} alt="list view" /> </a>
                                            <a href="#" className="btn btn-white"> <img src={gridView} alt="list view" /> </a>
                                        </div>
                                    </div>
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
                </section>
            </main>
        </>
    )
}
export default LotList;
