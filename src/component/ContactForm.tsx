
interface Props {
}
const ContactForm: React.FC<Props> = ({ }) => {
    return (
        <>
            <div className="col-lg-9">
                <form>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Name (required)" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="City (required)" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="State (required)" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Zip (required)" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Phone (required)" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email (required)" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Promo Code" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="mb-3">
                                <textarea className="form-control" placeholder="Equipment (required)" rows={5}> </textarea>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="mb-3">
                                <input type="button" name="" value="Send" className="btn btn-primary ps-4 pe-4 pt-2 pb-2" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm;