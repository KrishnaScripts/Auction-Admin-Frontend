
interface Props {
    type: any,
    data: any
}

const List: React.FC<Props> = ({ type, data }) => {
    return (
        <>
            {type == 'list' ?
                <>
                    {data.map((dataList: any, index: any) => {
                        return (
                            <div className="col-12 mt-4" key={index}>
                                <div className="card p-4 mb-3">
                                    <div className="card-body d-flex flex-wrap align-items-center p-0">
                                        <div className="auction_img">
                                            <img src={dataList.image} className="w-100" alt="" />
                                        </div>
                                        <div className="auction_detail text-start pt-3 pb-3">
                                            <h3>{dataList.title}</h3>
                                            <h4>{dataList.dateTime}</h4>
                                            <h5>{dataList.StateCity}</h5>
                                            <hr className="mt-4 mb-4" />
                                            <p>{dataList.description}</p>
                                        </div>
                                        <div className="auction_timeline text-start">
                                            <div className="d-flex align-items-center mt-2 mb-2"> <img src={dataList.loader} /> <span className="ms-3 fs-16px text-danger">{dataList.time}</span> </div>
                                            <p>{dataList.descriptionFinishTime}</p>
                                            <div className="d-flex flex-wrap align-items-center mt-3">
                                                <a href="#" className="text-dark pe-3 me-3 border-right">{dataList.participate}</a>
                                                <a href="#" className="text-dark">{dataList.setRemainder}</a>
                                            </div>
                                            <div className="text-center mt-5">
                                                <a href="#" className="btn btn-outline-secondary fs-20 p-3">{dataList.btnEquipment}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </>
                :
                <>
                    {data.map((dataList: any, index: any) => {
                        return (
                            <>
                                <div className="col-xl-3 col-lg-4 col-sm-6 mb-4" key={index}>
                                    <div className="card p-xl-3 p-lg-2 p-2">
                                        <div className="card-body p-2">
                                            <div className="hightlight_auction_img">
                                                <img src={dataList.image} className="w-100 border-radius" alt="" />
                                            </div>
                                            <div className="hightlight_auction_content">
                                                <div className="mt-3">
                                                    <p className="fs-16px text-ellipsis letter-spacing mb-2"><a href="#" className="d-block fs-16px link_with_arrow">{dataList.title}</a></p>
                                                    <span className="fs-16px">{dataList.StateCity}</span>
                                                    <p className="text-ellipsis fs-16px mt-2 mb-0">{dataList.dateTime}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </>
            }
        </>
    )
}

export default List;
