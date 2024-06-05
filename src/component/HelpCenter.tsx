import BackgroundImage from "./BackgroundImage";
import buyerBg from "../assets/images/buyer_bg.jpg";
import disclaimer from "../assets/images/disclaimer.svg";
import customerSupport from "../assets/images/customer_support.jpg";
import { useState } from "react";
import { FrequentlyAskedQuestions } from "../utils/constants";

const HelpCenter = () => {
    const [handleaAccordion, setAccordion] = useState<any>(0);
    return (
        <>
            <BackgroundImage Image={buyerBg} Title={'Buyers'} SubTitle={'Become a Buyer'} PageName={'HELP CENTER'} parentPageName={'Company'} />
            <section className=" pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="buy_sell_row d-flex flex-wrap align-items-center">
                                <div className="buy_sell_content">
                                    <h2 className="mb-4 text-grey fw-bold">Important Resources</h2>
                                    <h3>At DPA Auctions, we know that tracking down the important paper work can be a pain. That is why we have created a help center for you.</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-4">
                                    <p className="fs-20 text-grey">Click on the Tax Forms or Terms icons below to access those forms and information. We have also outlined frequently asked questions below. If your question is not listed, please do not hesitate to reach out to us directly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-4 mt-4">
                                    <div className="">
                                        <a href="#" className="bg_light_gradient fs-16px p-3 d-block border border-radius text-center">Sales Tax Exemption Forms</a>
                                        <div className="d-flex flex-wrap disclaimer mt-4">
                                            <div className="disclaimer_img">
                                                <img src={disclaimer} alt="" />
                                            </div>
                                            <div className="disclaimer_content">
                                                <span className="text-dark fs-16px">We have sorted them by state to make this easy on you.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4">
                                    <div className="">
                                        <a href="#" className="bg_light_gradient fs-16px p-3 d-block border border-radius text-center">Sales Tax Exemption Forms</a>
                                        <div className="d-flex flex-wrap disclaimer mt-4">
                                            <div className="disclaimer_img">
                                                <img src={disclaimer} alt="" />
                                            </div>
                                            <div className="disclaimer_content">
                                                <span className="text-dark fs-16px">Terms are subject to change for each individual auction.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4">
                                    <div className="">
                                        <a href="#" className="bg_light_gradient fs-16px p-3 d-block border border-radius text-center">Sales Tax Exemption Forms</a>
                                        <div className="d-flex flex-wrap disclaimer mt-4">
                                            <div className="disclaimer_img">
                                                <img src={disclaimer} alt="" />
                                            </div>
                                            <div className="disclaimer_content">
                                                <p className="d-flex justify-content-between help_center">
                                                    <span className="text-dark fs-16px pe-4">Sign form electronically via Hello Sign</span>
                                                    <a href="#" className="text-primary fs-16px text-decoration-underline">Click here</a>
                                                </p>
                                                <p className="d-flex justify-content-between help_center">
                                                    <span className="text-dark fs-16px pe-4">PDF format to be printed</span>
                                                    <a href="#" className="text-primary fs-16px text-decoration-underline">Download</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-5 pb-5 bg_light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fw-bold fs-36">Frequently Asked Questions</h3>
                        </div>
                        <div className="mt-4">
                            <div className="accordion" id="accordionExample">
                                {FrequentlyAskedQuestions.map((faq: any, index: any) => {
                                    return (
                                        <div className="accordion-item">
                                            <>
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className={`${handleaAccordion === index ? 'accordion-button' : 'accordion-button collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={handleaAccordion == index ? "true" : "false"} aria-controls="collapseOne"
                                                        onClick={(() => {
                                                            { handleaAccordion !== index ? setAccordion(index) : setAccordion("") }

                                                        })}
                                                    > {faq.question} </button>
                                                </h2>
                                                {index === handleaAccordion && (
                                                    <div id="collapseOne" className={`${handleaAccordion === index ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body pt-0">
                                                            <strong>{faq.answerStrong}</strong> {faq.answerNormal} <code>{faq.andCode}</code>{faq.afterCodeText}
                                                        </div>
                                                    </div>
                                                )}
                                            </>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="pt-5 pb-5 bg_overlap_opacity bg_center_gradiant bg_center bg_cover background_attachment_fixed" style={{
                backgroundImage: "url(" + customerSupport + ")"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mb-5">
                            <h2 className="text-white fw-bold mb-4">Customer Support</h2>
                            <h5 className="text-white">If you have any additional questions, concerns or suggestions, please contact us and our team will get in touch with you.</h5>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-4 text-start pt-3 pb-3">
                            <h5 className="text-white fs-18 mb-4">Physical Address</h5>
                            <p className="fs-18 text-white">DPA Auctions<br /> 900 Bud Blvd<br /> Fremont, NE 68025 </p>
                        </div>
                        <div className="col-md-4 text-start pt-3 pb-3">
                            <h5 className="text-white fs-18 mb-4">Mailing Address</h5>
                            <p className="fs-18 text-white">DPA Auctions<br /> 900 Bud Blvd<br /> Fremont, NE 68025</p>
                        </div>
                        <div className="col-md-4 text-start pt-3 pb-3">
                            <h5 className="text-white fs-18 mb-4"> <a className="text-white text-decoration-underline" href="mailto:customer.service@DPAauctions.com"> customer.service@DPAauctions.com </a></h5>
                            <p className="fs-18 mb-0 text-white">800-492-9090 or 402-721-4388</p>
                            <p className="fs-18 mb-0 text-white">Monday – Friday</p>
                            <p className="fs-18 mb-0 text-white">8:00am – 5:00pm CST</p>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}
export default HelpCenter;