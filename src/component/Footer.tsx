import { socialIcons, footerOptions, bottomIcons } from "../utils/constants";
import AuctionLogo from '../assets/images/DPA-Auctions-Logo.svg'

const Footer = () => {
    return (
        <>
            <footer className="pt-5 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-3 pb-3">
                            <div className="">
                                <h3>Get the DPA News Letter</h3>
                                <p className="mb-0">and receive latest updates on our auctions! The privacy policy applies.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-3 pb-3">
                            <div className="form-group d-flex align-items-center">
                                <input type="text" placeholder="Enter your email" className="form-control p-3 me-3 fs-16px" name="" />
                                <button type="submit" className="btn btn-danger p-3 px-lg-4 px-4">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-4 mb-4 bg_color_light opacity-1" />
                    <div className="row">
                        <div className="col-md-3 mb-4 mt-3">
                            <div className="">
                                <div className="footer_logo mb-3">
                                    <a href="#"><img src={AuctionLogo} /> </a>
                                </div>
                                <ul className="d-flex align-items-center ps-0 social_icon">
                                    {socialIcons.map((icons, index) => {
                                        return (
                                            <li className="me-3" key={index}><a href="#"><img src={icons.icon} /> </a> </li>
                                        )
                                    })}
                                </ul>
                                <p className="mb-2"><a href="#" className="text-primary letter-spacing">800-492-9090</a> </p>
                                <p className="mb-2"><a href="#" className="text-primary letter-spacing word-wrap-break-word">customer.service@DPAauctions.com</a> </p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row links">
                                {footerOptions.map((footer, index) => {
                                    return (
                                        <div className="col-md-3 col-6 mb-4 mt-3" key={index}>
                                            <h5 className="fs-16px">{footer.mainLabel}</h5>
                                            <ul className="m-0 p-0">
                                                {footer.childLabel.map((child, childIndex) => {
                                                    return (
                                                        <li key={childIndex}><a href={child.url}>{child.label}</a> </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                                <span>© 2022 DPA Auctions. All Rights Reserved.</span>
                                <ul className="mt-1 mb-1 pt-1 pb-1 ps-0 me-0 d-flex align-items-center">
                                    {bottomIcons.map((bottom, index) => {
                                        return (
                                            <li className="ms-2 me-2" key={index}> <a href="#"> <img src={bottom.icon} alt={`bottom_icons_${index}`} /> </a> </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer