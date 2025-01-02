import React, { useState } from 'react'

export default function Home() {
    const [Showform, setShowform] = useState(false);
    const [showinput, setshowinput] = useState(false);


    return (
        <>
            <nav className='navbar navbar-expand-lg bg-primary'>
                <div className='container-fluid'>
                    <div style={{ marginRight: '10px' }}>
                        <img src='data:image/jpeg;base64,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' alt='logo/iamge' style={{ height: '15px', width: '15px', borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></img>
                    </div>
                    <a className='navbar-brand' href='/'>Inventory Management System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            </li>
                        </ul>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </div>
                </div>
            </nav>
            <section className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                <div className='row'>
                    <div className='col-12' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <div className="form-check" style={{ padding: '20px' }}>
                            <input className="form-check-input" type="checkbox" checked={Showform} value="" id="flexCheckIndeterminate" onChange={(e) => setShowform(e.target.checked)} />
                            <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                Item
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={showinput} onChange={(e) => setshowinput(e.target.checked)} value="" id="flexCheckIndeterminate" />
                            <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                Supplier
                            </label>
                        </div>
                    </div>
                </div>

            </section>


            {Showform && (
                <section>
                    <h1 className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Item Details</h1>
                    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', backgroundColor: '#7F56D9', opacity: '0.5', borderRadius: '20px', width: '70%', marginBottom: '15px' }}>
                        <form action="">
                            <div className="row" style={{ padding: '20px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'height': '40vh' }}>
                                <div className="col-md-12">
                                    <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vh', padding: '10px', borderRadius: '10px', }}>
                                        <div className="col-md-6">
                                            <label htmlFor="Item_name" className="form-label">Item Name</label>
                                            <input type="text" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter item name' maxLength={225} />
                                            <div id="length" className="form-text" style={{ fontSize: 'small' }}>Max 50 character</div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="Quantity" className="form-label">Quantity</label>
                                            <input type="number" className="form-control" id="quantity_detail" placeholder='Enter quantity' maxLength={10} />
                                            <div id="length" className="form-text" style={{ fontSize: 'small' }}>Numeric Value</div>
                                        </div>
                                    </div>
                                    <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vh', padding: '10px', borderRadius: '10px' }}>
                                        <div className="col-md-6">
                                            <label htmlFor="Item_name" className="form-label">Unit Price</label>
                                            <input type="number" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter item name' />
                                            <div id="length" className="form-text" style={{ fontSize: 'small' }}>Numeric value(USD)</div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="Quantity" className="form-label">Date of Submission</label>
                                            <input type="text" className="form-control" id="quantity_detail" placeholder='Enter quantity' />
                                            <div id="length" className="form-text" style={{ fontSize: 'small' }}>Format: MM/DD/YYYY</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form >
                    </div >
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <div className="container row" style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                            <div className="col-md-4">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ fontWeight: 'bold', fontSize: '30px' }}>Submitted Data</p>
                                </div>
                                <div style={{ fontSize: 'small' }}>
                                    <p>The data submitted bu users will be displayed below
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </div>
                            </div>
                        </div >
                    </div>
                </section>
            )}


            {showinput && (
                <section >
                    <h1 className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Supplier Details</h1>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7F56D9', opacity: '0.5', borderRadius: '20px', width: '70%', height: '70vh' }}>
                        <form action="">
                            <div className="row" style={{ padding: '20px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'height': '40vh' }}>
                                <div className="col-md-12">
                                    <div className='row' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100vh', padding: '10px', borderRadius: '10px', }}>
                                        <div className="col-md-6">
                                            <label htmlFor="Item_name" className="form-label">Supplier Name</label>
                                            <input type="text" className="form-control" id="item_name" aria-describedby="Enter" placeholder='Enter Supplier name' maxLength={225} />
                                            <div id="length" className="form-text" style={{ fontSize: 'small' }}>Max 50 characters</div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="Quantity" className="form-label">Company Name</label>
                                            <input type="text" className="form-control" id="quantity_detail" placeholder='Enter Company name' maxLength={225} />
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
                        </form >
                    </div>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <div className="container row" style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                            <div className="col-md-4">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ fontWeight: 'bold', fontSize: '30px' }}>Submitted Data</p>
                                </div>
                                <div style={{ fontSize: 'small' }}>
                                    <p>The data submitted bu users will be displayed below
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </div>
                            </div>
                        </div >
                    </div>
                </section >
            )
            }



        </>
    )
}
