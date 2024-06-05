interface Props {
    data: any,
}

const Lot: React.FC<Props> = ({ data }) => {
    return (
        <>

            {
                data?.map((lotData: any, index: any) => {
                    return (

                        <div className="card p-4 mb-3">
                            <div className="card-body auctions_list_search d-flex flex-wrap align-items-center p-0">
                                <div className="auction_img">
                                    <img src={lotData?.image} className="w-100" alt="" />
                                </div>
                                <div className="auction_detail pt-2 pb-2">
                                    <div className="col-12">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                                            <h4 className="mb-0">{lotData?.lotNo}</h4>
                                            <span>{lotData?.bidNo}</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <h5 className="mb-0 fs-16px text-dark">{lotData?.name}</h5>
                                            <span className="text-uppercase text-primary fw-600">{lotData?.titleHighBid}</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <span className="fs-16px">{lotData?.companyName}</span>
                                            <span className="">{lotData?.amountHighBid}</span>
                                        </div>
                                        <div className="d-flex align-items-center mt-1">
                                            <span className="fs-16px me-3 fw-600">{lotData?.auctionBoard}</span>
                                            <span className="ms-auto fw-600 text-blue"> <i className="fa-regular fa-user"></i> {lotData?.user}</span>
                                        </div>
                                        <div className="d-flex align-items-center mt-1">
                                            <span className="text-danger fs-14px fw-600">{lotData?.dateTime}</span>
                                            <span className="ms-auto fw-600 text-yellow"> <i className="fa-regular fa-star"></i> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Lot;
