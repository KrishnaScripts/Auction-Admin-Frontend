
import backgroundImage from "../assets/images/appirasals.jpg";
import loan from "../assets/images/LOAN_COLLATERAL.svg";
import estatePlanning from "../assets/images/ESTATE_PLANNING.svg";
import disSolving from "../assets/images/DISSOLVING_PARTNERSHIPS.svg";
import salesAndBuyOuts from "../assets/images/SALES_AND_BUYOUTS.svg";
import corporateActivities from "../assets/images/CORPORATE_ACTIVITIES.svg";
import muchMore from "../assets/images/AND_MUCH_MORE.svg";
import ContactForm from "./ContactForm";
import BackgroundImage from "./BackgroundImage";
const Appraisal = () => {
    return (
        <>
            <main>
                <BackgroundImage Image={backgroundImage} Title={'Appraisals'} SubTitle={'Certified Experts'} PageName={'Appraisal'} parentPageName={'Company'} />
                <section className=" pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center d-flex flex-wrap align-items-center">
                                    <div className="text-center">
                                        <h2 className="mb-4 text-grey fw-bold">Professional Valuation</h2>
                                        <h3>DPA Auctions offers Certified Personal Property Appraisals on equipment, and Broker’s Opinions of Value on commercial real estate.</h3>
                                    </div>
                                </div>
                                <hr className="mt-4 mb-4" style={{ backgroundColor: "#DCDFE6" }} />
                                <div className="row ">
                                    <div className="col-md-4 mt-5 ">
                                        <div className="text-center">
                                            <div className="icon_apri d-flex align-items-center justify-content-center">
                                                <img src={loan} />
                                            </div>
                                            <h4>LOAN COLLATERAL</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5 ">
                                        <div className="text-center">
                                            <div className="icon_apri d-flex align-items-center justify-content-center">
                                                <img src={estatePlanning} />
                                            </div>
                                            <h4>ESTATE PLANNING</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5 ">
                                        <div className="text-center">
                                            <div className="icon_apri d-flex align-items-center justify-content-center">
                                                <img src={disSolving} />
                                            </div>
                                            <h4>DISSOLVING PARTNERSHIPS</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5 ">
                                        <div className="text-center">
                                            <div className="icon_apri d-flex align-items-center justify-content-center">
                                                <img src={salesAndBuyOuts} />
                                            </div>
                                            <h4>SALES AND BUYOUTS</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5 ">
                                        <div className="text-center">
                                            <div className="icon_apri d-flex align-items-center justify-content-center">
                                                <img src={corporateActivities} />
                                            </div>
                                            <h4>CORPORATE ACTIVITIES</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-5 ">
                                        <div className="text-center">
                                            <div className="icon_apri d-flex align-items-center justify-content-center">
                                                <img src={muchMore} />
                                            </div>
                                            <h4>AND MUCH MORE</h4>
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

                                <div className="row">
                                    <div className="col-12 mb-5">
                                        <p className="fs-24">DPA Auctions will provide a professional and personable selling experience for each and every seller. If you are interested in finding out more about how to sell with DPA Auctions, submit the form below and your DPA rep will contact you.</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <h2 className="fs-46 text-grey pe-lg-5">Get <br /> In <br /> Touch</h2>
                                    </div>
                                    <ContactForm />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Appraisal;
