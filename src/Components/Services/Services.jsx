import React from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import '../../assets/css/styles.min.css';
import Img1 from '../../assets/img/icons8_city.svg';
import Img2 from '../../assets/img/icons8_math.svg';
import BackgroundImg from '../../assets/img/office-front.jpeg'

function Services() {
    return (
        <div style={{ height: '100%' }}>
            <section style={{
                marginTop: '3rem', marginLeft: '50px'
            }}>
                <div className="container-fluid">
                    < div className="row">
                        <div className="col-lg-5" style={{ paddingRight: '3rem', marginLeft: '0px' }}>
                            <p
                                style={{ marginBottom: '15px', color: '#35ab39', fontFamily: 'Poppins, sans-serif', lineHeight: '1.2em', fontWeight: 'bold' }}>
                                1 Year Of Experience<br /></p>
                            <h1
                                style={{
                                    fontFamily: 'Poppins, sans-serif', fontSize: '3.2rem', marginBottom: '26px', lineHeight: '1.2em', fontWeight: '600', color: '#3e3939'
                                }}>
                                My Services &amp; Skills <br /></h1>
                            <div className="d-flex flex-column justify-content-between" style={{ height: '35vh' }}>
                                <span className="h6">Android Development</span>
                                <div className="progress" data-toggle="tooltip" data-bs-tooltip="" style={{ fontSize: '12px' }}
                                    title="Android Development">
                                    <div className="progress-bar bg-success" aria-valuenow="80" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '80%', borderRadius: '100px' }}><span
                                            style={{ fontWeight: '500' }}>80%</span>
                                    </div>
                                </div>
                                <span className="h6">Web Development</span>
                                <div className="progress" data-toggle="tooltip" data-bs-tooltip="" title="Web Development">
                                    <div className="progress-bar bg-success" aria-valuenow="80" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '80%', borderRadius: '100px' }}><span
                                            style={{ fontWeight: '500' }}>80%</span>
                                    </div>
                                </div>
                                <span className="h6">ReactJs Development</span>
                                <div className="progress" data-toggle="tooltip" data-bs-tooltip="" title="Web Design">
                                    <div className="progress-bar bg-success" aria-valuenow="80" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '75%', borderRadius: '100px' }}><span
                                            style={{ fontWeight: '500' }}>75%</span>
                                    </div>
                                </div>
                                <span className="h6">Web Services Development</span>
                                <div className="progress" data-toggle="tooltip" data-bs-tooltip="" title="UI / UX Design">
                                    <div className="progress-bar bg-success" aria-valuenow="70" aria-valuemin="0"
                                        aria-valuemax="100" style={{ width: '75%', borderRadius: '100px' }}><span
                                            style={{ fontWeight: '500' }}>75%</span>
                                    </div>
                                </div>

                            </div>

                            <div className="d-flex justify-content-between" style={{ marginTop: '50px' }}>
                                <div className="d-flex">
                                    <div><img style={{ width: '55px', height: '55px', marginTop: '6px', marginRight: '12px' }}
                                        src={Img1} alt="customer_img" />
                                    </div>
                                    <div>
                                        <h1
                                            style={{ fontFamily: 'Poppins, sans-serif', margin: '0px', lineHeight: '1.2em', fontSize: '30px' }}>
                                            3</h1>
                                        <p style={{ color: '#696969', fontFamily: 'Roboto, sans-serif', fontWeight: '300' }}>
                                            Customers</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div><img style={{ width: '50px', height: '50px', marginTop: '6px', marginRight: '12px' }}
                                        src={Img2} alt="projects_img" />
                                    </div>
                                    <div>
                                        <h1
                                            style={{ fontFamily: 'Poppins, sans-serif', margin: '0px', lineHeight: '1.2em', fontSize: '30px' }}>
                                            15</h1>
                                        <p style={{ color: '#696969', fontFamily: 'Roboto, sans-serif', fontWeight: '300' }}>Projects
                                    </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7">
                            <div className="col-xs-12 col-sm-6 col-md-6  col-sm-push-6"
                                style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', height: '400px', backgroundPosition: 'center', width: '100%', marginLeft: '40%' }}>
                            </div>
                            <div
                                style={{ position: 'absolute', top: '40%', left: '0px', height: '60%', backgroundColor: '#35ab39', width: '70%' }}>
                                <p
                                    style={{ color: 'rgb(255,255,255)', fontFamily: 'Roboto, sans-serif', padding: '0px', paddingTop: '50px', paddingRight: '50px', paddingLeft: '50px', fontWeight: '300' }}>
                                    Any desktop publishing packages and web page is a editors now use Lorem Ipsum as their
                                default model text, and a search for their infancy.<br /><br /> any desktop publishing
                                packages and web page editors now use.<br /></p>
                                <h5
                                    style={{ color: 'rgb(255,255,255)', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', paddingRight: '50px', paddingLeft: '50px' }}>
                                    Muneeb Ur Rehman</h5>
                                <p
                                    style={{ color: 'rgb(255,255,255)', fontFamily: 'Roboto, sans-serif', paddingRight: '50px', paddingLeft: '50px', fontWeight: '300' }}>
                                    Fresh Graduated<br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Services;