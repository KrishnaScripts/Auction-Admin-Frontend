import Steven from "../assets/images/Steven.jpg";
import Brandon from "../assets/images/Brandon-2.jpg";
import PrenzyNEW from "../assets/images/PrenzyNEW-2.jpg";
import Doug from "../assets/images/Doug.jpg";
const Team = () => {
    return (
        <>
            <main>
                <section className="breadcum pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Company</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Team</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>

                <section className="bg_light pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="team_wrap">
                                    <div className="team_member_img">
                                        <img src={Steven} alt="team1" />
                                    </div>
                                    <div className="team_member_dis mb-4 pb-4 border-bottom">
                                        <h5 className="mb-3">Steven J. Peterson</h5>
                                        <span className="d-block mb-4">CEO</span>
                                        <p className="fs-16">I have lived in Oakland, NE my whole life. That is where I was raised by father and mother, Del and Joanne Peterson, who founded Del Peterson and Associates back in 1972. I graduated from Oakland, NE and headed to study and play football at the University of Omaha Nebraska. After an injury and the recommendation of my father I left to go work at Del Peterson and Associates in 1984. I learned a lot from my dad in those years about what makes a great leader, business, entrepreneurship, and pleasing our customers. I eventually became acting CEO in 1994. Since then we have built our organization into an international</p>
                                        <div className="readmore d-flex justify-content-end"><a href="#" className="with_dropdown_arrow">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <div className="team_wrap">
                                    <div className="team_member_img">
                                        <img src={Brandon} alt="team2" />
                                    </div>
                                    <div className="team_member_dis mb-4 pb-4 border-bottom">
                                        <h5 className="mb-3">Steven J. Peterson</h5>
                                        <span className="d-block mb-4">COO</span>
                                        <p className="fs-16">I have lived in Oakland, NE my whole life. That is where I was raised by father and mother, Del and Joanne Peterson, who founded Del Peterson and Associates back in 1972. I graduated from Oakland, NE and headed to study and play football at the University of Omaha Nebraska. After an injury and the recommendation of my father I left to go work at Del Peterson and Associates in 1984. I learned a lot from my dad in those years about what makes a great leader, business, entrepreneurship, and pleasing our customers. I eventually became acting CEO in 1994. Since then we have built our organization into an international</p>
                                        <div className="readmore d-flex justify-content-end"><a href="#" className="with_dropdown_arrow">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <div className="team_wrap">
                                    <div className="team_member_img">
                                        <img src={PrenzyNEW} alt="team3" />
                                    </div>
                                    <div className="team_member_dis mb-4 pb-4 border-bottom">
                                        <h5 className="mb-3">Steven J. Peterson</h5>
                                        <span className="d-block mb-4">Senior Vice President</span>
                                        <p className="fs-16">I have lived in Oakland, NE my whole life. That is where I was raised by father and mother, Del and Joanne Peterson, who founded Del Peterson and Associates back in 1972. I graduated from Oakland, NE and headed to study and play football at the University of Omaha Nebraska. After an injury and the recommendation of my father I left to go work at Del Peterson and Associates in 1984. I learned a lot from my dad in those years about what makes a great leader, business, entrepreneurship, and pleasing our customers. I eventually became acting CEO in 1994. Since then we have built our organization into an international</p>
                                        <div className="readmore d-flex justify-content-end"><a href="#" className="with_dropdown_arrow">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <div className="team_wrap">
                                    <div className="team_member_img">
                                        <img src={Doug} alt="team4" />
                                    </div>
                                    <div className="team_member_dis mb-4 pb-4 border-bottom">
                                        <h5 className="mb-3">Senior Executive</h5>
                                        <span className="d-block mb-4">CEO</span>
                                        <p className="fs-16">I have lived in Oakland, NE my whole life. That is where I was raised by father and mother, Del and Joanne Peterson, who founded Del Peterson and Associates back in 1972. I graduated from Oakland, NE and headed to study and play football at the University of Omaha Nebraska. After an injury and the recommendation of my father I left to go work at Del Peterson and Associates in 1984. I learned a lot from my dad in those years about what makes a great leader, business, entrepreneurship, and pleasing our customers. I eventually became acting CEO in 1994. Since then we have built our organization into an international</p>
                                        <div className="readmore d-flex justify-content-end"><a href="#" className="with_dropdown_arrow">Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
export default Team;
