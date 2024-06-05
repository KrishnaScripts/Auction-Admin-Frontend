interface Props {
    Image: any,
    Title: any,
    SubTitle: any,
    PageName: any,
    parentPageName: any
}
const BackgroundImage: React.FC<Props> = ({ Image, Title, SubTitle, PageName, parentPageName }) => {
    return (
        <>
            <section className="breadcum pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="#">{parentPageName}</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{PageName}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="bg_img bg_cover bg_overlap position-relative bg_overlap_opacity d-flex align-items-center bg_center min-height-300" style={{
                backgroundImage: "url(" + Image + ")"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-white fw-bold mb-4">{Title}</h2>
                            <h3 className="text-white">{SubTitle}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BackgroundImage;
