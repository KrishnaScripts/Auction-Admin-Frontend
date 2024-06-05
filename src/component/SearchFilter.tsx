import { useEffect, useState } from 'react';
import Select from 'react-select';
import { states, category } from '../utils/constants';
import { FilterData } from '../utils/interface';
interface Props {
    searchData: any,
    type: boolean
}

const SearchFilter: React.FC<Props> = ({ searchData, type }) => {

    const [filterData, setFilterData] = useState<FilterData>({ keyword: '', category: [], state: [], zipcode: '', mile: '' })

    const changeHandler = (fieldName: string, value: any) => {
        const updateData = { ...filterData, [fieldName]: value }
        setFilterData(updateData)
    }
    return (
        <>

            <div className="tab-pane fade show active" id="view" role="tabpanel" aria-labelledby="view-tab">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            {type && (
                                <>
                                    <div className="col-lg-3 mb-4">
                                        <div className="custom_dropdown">
                                            <label className="mb-2">BEGINNING DATE</label>
                                            <input type="date" className="form-control" placeholder="Select Beginning …" name="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-4">
                                        <div className="custom_dropdown">
                                            <label className="mb-2">End date</label>
                                            <input type="date" className="form-control" placeholder="Select Eend Date" name="" />
                                        </div>
                                    </div>
                                </>
                            )}
                            <div className="col-lg-3 mb-4">
                                <div className="custom_dropdown">
                                    <label className="mb-2">Keyword</label>
                                    <input type="text" className="form-control" placeholder="Comma separated ke…" name="keyword" onChange={(e) => changeHandler(e.target.name, e.target.value)} />
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="custom_dropdown">
                                    <label className="mb-2">Category</label>
                                    <div className="position-relative">
                                        <Select
                                            isMulti
                                            placeholder="Select from Tracto…"
                                            options={category}
                                            className='category'
                                            name='category'
                                            onChange={(e) => changeHandler("category", e)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="custom_dropdown">
                                    <label className="mb-2">State</label>
                                    <div className="position-relative">
                                        <Select
                                            isMulti
                                            placeholder="Alabama, Alaska, …"
                                            options={states}
                                            className='state'
                                            name='state'
                                            onChange={(e) => changeHandler("state", e)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {!type && (
                                <div className="col-lg-3 mb-4">
                                    <div className="custom_dropdown">
                                        <label className="mb-2">Zip Code</label>
                                        <input type="text" className="form-control" placeholder="Enter zip code" name="zipcode" onChange={(e) => changeHandler(e.target.name, e.target.value)} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-wrap align-items-start">
                            {!type && (
                                <div className="mile mt-4 pt-1 mb-1">
                                    <ul className="ps-0 d-flex flex-wrap align-items-center">
                                        {["50", "100", "250"].map((data, index) => {
                                            return (
                                                <li className="mile_checkbox" key={index}>
                                                    <input type="radio" id={data} name="mile" onClick={(e: any) => changeHandler(e.target.name, data)} />
                                                    <label htmlFor={data}> <span>{data} </span> <span>miles</span> </label>
                                                </li>
                                            )
                                        })}
                                        {/* <li className="mile_checkbox">
                                        <input type="radio" id="50" name="mile" />
                                        <label htmlFor="50"> <span>50 </span> <span>miles</span> </label>
                                    </li>
                                    <li className="mile_checkbox">
                                        <input type="radio" id="100" name="mile" />
                                        <label htmlFor="100"> <span>100 </span> <span>miles</span> </label>
                                    </li>
                                    <li className="mile_checkbox">
                                        <input type="radio" id="250" name="mile" />
                                        <label htmlFor="250"> <span>250 </span> <span>miles</span> </label>
                                    </li> */}
                                    </ul>
                                </div>
                            )}
                            <div className="mt-4 pt-1">
                                <button type="submit" className="btn btn-primary pt-2 pb-2 ps-xl-5 ps-lg-4 pe-lg-4 pe-xl-5 ps-lg-4 pe-lg-4 ps-4 pe-4" onClick={() => searchData(filterData)}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchFilter;


