import React from 'react'

export default function DataForm() {
    return (
        <>
            {/* Item field */}
            <section>
                <h1 className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Item Details</h1>
                <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', backgroundColor: '#7F56D9', opacity: '0.5', borderRadius: '20px', width: '70%' }}>
                    <form action="">
                        <div className="row" style={{ padding: '20px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'height': '40vh' }}>
                            <div className="col-md-12">
                                <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vh', padding: '10px', borderRadius: '10px', }}>
                                    <div className="col-md-6">
                                        <label htmlFor="Item_name" className="form-label">Item Name</label>
                                        <input type="text" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter item name' />
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Max 50 character</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="Quantity" className="form-label">Quantity</label>
                                        <input type="text" className="form-control" id="quantity_detail" placeholder='Enter quantity' />
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Numeric Value</div>
                                    </div>
                                    {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button> */}
                                </div>
                                <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vh', padding: '10px', borderRadius: '10px' }}>
                                    <div className="col-md-6">
                                        <label htmlFor="Item_name" className="form-label">Unit Price</label>
                                        <input type="text" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter item name' />
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Numeric value(USD)</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="Quantity" className="form-label">Date of Submission</label>
                                        <input type="text" className="form-control" id="quantity_detail" placeholder='Enter quantity' />
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Format: MM/DD/YYYY</div>
                                    </div>
                                    {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button> */}
                                </div>
                            </div>
                        </div>
                    </form >
                </div >
            </section>


            {/* Supplier field */}
            <section>
                <h1 className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Supplier Details</h1>
                <form action="">
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7F56D9', opacity: '0.5', borderRadius: '20px', width: '70%', height: '70vh' }}>
                        <div className="row" style={{ padding: '20px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'height': '40vh' }}>
                            <div className="col-md-12">
                                <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vh', padding: '10px', borderRadius: '10px', }}>
                                    <div className="col-md-6">
                                        <label htmlFor="Item_name" className="form-label">Supplier Name</label>
                                        <input type="text" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter Supplier name' />
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Max 50 characters</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="Quantity" className="form-label">Company Name</label>
                                        <input type="text" className="form-control" id="quantity_detail" placeholder='Enter Company name' />
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Max 50 characters</div>
                                    </div>
                                </div>


                                <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vh', padding: '10px', borderRadius: '10px', }}>
                                    <div className="col-md-6">
                                        <label htmlFor="country" className="form-label">Country </label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>USA</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </select>
                                        {/* <input type="text" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter Supplier name' /> */}
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Select country from the list</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="country" className="form-label">State </label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Florida</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </select>
                                        {/* <input type="text" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter Supplier name' /> */}
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Select state from the list</div>
                                    </div>
                                </div>



                                <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vh', padding: '10px', borderRadius: '10px' }}>
                                    <div className="col-md-6">
                                        <label htmlFor="Item_name" className="form-label">City</label>
                                        <input type="text" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter City' />
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Max 50 characters</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input type="email" className="form-control" id="quantity_detail" placeholder='Enter email address' />
                                        <div id="length" className="form-text" style={{ fontSize: 'small' }}>Valid email format</div>
                                    </div>
                                    {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </section>
        </>
    )
}
