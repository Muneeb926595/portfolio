import React from 'react';
import MySlider from '../Slider/MySlider';
function Client() {
    return (
        <div style={{ marginTop: '5rem' }}>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3" style={{ marginRight: '0', marginTop: '8%' }}>
                            <h6
                                style={{ color: 'rgb(53,171,57)', fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '15px' }}>
                                What Client Says About us<br /></h6>
                            <h1
                                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '3.2rem', marginBottom: '20px', fontWeight: '600', lineHeight: '1.2em', color: '#3e3939', marginRight: '25px' }}>
                                Our Clients &amp; Reviews<br /></h1>
                            <p style={{ color: '#696969', fontFamily: 'Roboto, sans-serif', fontWeight: '300', marginRight: '22px' }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority.<br /></p>
                        </div>
                        <div className="col-lg-7 pt-5">
                            <MySlider />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Client;