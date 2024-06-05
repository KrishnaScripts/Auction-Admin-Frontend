import disclaimer from "../assets/images/disclaimer.svg";
const HelpCenterSalesTax = () => {
    return (
        <>

            <main className="bg_light">
                <section className="breadcum pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Company</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Sales Tax Exemption Forms</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="pt-4 pb-5 bg_light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex flex-wrap disclaimer">
                                    <div className="disclaimer_img">
                                        <img src={disclaimer} alt="" />
                                    </div>
                                    <div className="disclaimer_content">
                                        <span className="text-dark fs-16px">DPA Auctions is required by law to collect sales tax on all applicable transactions. Tax rates will be based on the item’s location. Tax will be collected on all applicable items unless the Buyer provides proof of tax exemption. This proof of tax exemption must be submitted before tax amounts will be removed from the invoice.  Please complete the exemption form from the state in which the item(s) is located, not the location of the purchaser.  Law requires that exemption forms are auction specific and will need to be completed for each individual auction. DPA Auctions cannot offer advice, opinions or guarantees about whether a Bidder is, in fact, tax exempt. For eligibility questions, please contact your tax consultant. DPA Auctions will not be held liable for States’ registration requirements in regards to exemptions. Guidelines and regulations regarding tax exemptions may vary between states. If you are eligible for an exemption, please complete the appropriate exemption certificate and email it to customer.service@DPAauctions.com or fax it to 402-721-4583.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4 border-top pt-4">

                                <div className="mb-4 d-flex flex-wrap align-items-center justify-content-between">
                                    <div className="col-auto">
                                        <h3 className="mt-2 mb-2">State List</h3>
                                    </div>
                                    <div className="col-auto">
                                        <input type="search" name="" placeholder="search state" className="form-control" />
                                    </div>
                                </div>

                                <ul className="p-0 m-0 column_count_3">
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">ARIZONA</h6>
                                        <p><a href="">Arizona Ag Exemtion Form</a></p>
                                        <p><a href="">Arizona Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">ALABAMA</h6>
                                        <p><a href="">Alabama Uniform Exemption MTC Form</a></p>
                                        <p><a href="">Alabama Ag Reduced Rate Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">ARKANSAS</h6>
                                        <p><a href="">Arkansas Ag Exemption Form</a></p>
                                        <p><a href="">Arkansas Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">CALIFORNIA</h6>
                                        <p><a href="">California Ag Exemption Form</a></p>
                                        <p><a href="">California Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">COLORADO</h6>
                                        <p><a href="">Colorado Farm Equipment Exemption Form DR 0511</a></p>
                                        <p><a href="">Colorado Resale Exemption Form DR 0563</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">FLORIDA</h6>
                                        <p><a href="">Florida Ag Exemption Form</a></p>
                                        <p><a href="">Florida Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">GEORGIA</h6>
                                        <p><a href="">Georgia Agriculture Tax Exemption Application</a></p>
                                        <p><a href="">Georgia Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">IDAHO</h6>
                                        <p><a href="">Idaho Ag Exemption Form</a></p>
                                        <p><a href="">Idaho Resale Exemption From</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">ILLINOIS</h6>
                                        <p><a href="">Illinois Ag Exemption Form</a></p>
                                        <p><a href="">Illinois Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">INDIANA</h6>
                                        <p><a href="">Indiana Sales Tax Exemption Form</a></p>
                                        <p><a href="">Indiana Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">IOWA</h6>
                                        <p><a href="">Iowa Sales Tax Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">KANSAS</h6>
                                        <p><a href="">Kansas Ag Exemption Form</a></p>
                                        <p><a href="">Kansas Resale Exemption Form – Kansas Residents ONLY</a></p>
                                        <p><a href="">Kansas Resale Exemption Form – Non-Kansas Residents ONLY</a></p>

                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">KENTUCKY</h6>
                                        <p><a href="">Kentucky Resale Form 51A105</a></p>
                                        <p><a href="">Kentucky Streamlined Exemption Form 51A260</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">LOUISIANA</h6>
                                        <p><a href="">Farm Exemption FAQs</a></p>
                                        <p><a href="">Louisiana Resale Exemption Form</a></p>
                                        <p><a href="">Louisiana Ag Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">MICHIGAN</h6>
                                        <p><a href="">Michigan Sales Tax Exemption Form 3372</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">MINNESOTA</h6>
                                        <p><a href="">Minnesota Exemption Form ST3</a></p>
                                    </li>

                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">MISSISSIPPI</h6>
                                        <p><a href="">Mississippi Certificate of Interstate Sales</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">MISSOURI</h6>
                                        <p><a href="">Missouri Ag Exemption Form</a></p>
                                        <p><a href="">Missouri Resale Exemption Form</a></p>

                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">NEBRASKA</h6>
                                        <p><a href="">Nebraska Ag Exemption Form</a></p>
                                        <p><a href="">Apply for a North Carolina Agricultural Production Number</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">NORTH DAKOTA</h6>
                                        <p><a href="">North Dakota Ag Exemption Form</a></p>
                                        <p><a href="">North Dakota Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">OHIO</h6>
                                        <p><a href="">Ohio Ag Exemption Form</a></p>
                                        <p><a href="">Ohio Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">OKLAHOMA</h6>
                                        <p><a href="">Oklahoma Ag Exemption Form</a></p>
                                        <p><a href="">Oklahoma Agricultural Exemption Application</a></p>
                                        <p><a href="">Oklahoma Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">PENNSYLVANIA</h6>
                                        <p><a href="">Minnesota Exemption Form ST3</a></p>
                                        <p><a href="">Pennsylvania Ag Exemption Form</a></p>
                                        <p><a href="">Pennsylvania Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">SOUTH DAKOTA</h6>
                                        <p><a href="">South Dakota Ag Exemption Information</a></p>
                                        <p><a href="">South Dakota Resale Exemption Form</a></p>
                                        <p><a href="">South Dakota RESIDENTS ONLY – Reduced Sales Tax Exemption</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">TENNESSEE</h6>
                                        <p><a href="">Tennessee Application For Ag Exemption</a></p>
                                        <p><a href="">Tennessee Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">TEXAS</h6>
                                        <p><a href="">Application – Texas Ag & Timber Exemption</a></p>
                                        <p><a href="">Texas Ag Exemption Form</a></p>
                                        <p><a href="">Texas Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">UTAH</h6>
                                        <p><a href="">Utah Ag Exemption Form</a></p>
                                        <p><a href="">Utah Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">VIRGINIA</h6>
                                        <p><a href="">Virginia Ag Exemption Form</a></p>
                                        <p><a href="">Virginia Resale Exemption Form (Out-of-state Residents)</a></p>
                                        <p><a href="">Virginia Resale Exemption Form (VA Residents)</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">WASHINGTON</h6>
                                        <p><a href="">Washington Ag Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">WISCONSIN</h6>
                                        <p><a href="">Wisconsin Ag Exemption Form</a></p>
                                        <p><a href="">Wisconsin Resale Exemption Form</a></p>
                                    </li>
                                    <li className="tax_exemption_forms mb-4">
                                        <h6 className="text-dark">WYOMING</h6>
                                        <p><a href="">Wyoming Ag Exemption Form</a></p>
                                        <p><a href="">Wyoming Resale Exemption Form</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </>
    )
}

export default HelpCenterSalesTax;