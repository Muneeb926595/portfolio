import React from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import '../../assets/css/styles.min.css';
import UiUxImg from '../../assets/img/icons8_flying_mortarboard.svg';
import DevImg from '../../assets/img/icons8_web_accessibility.svg';
import AppImg from '../../assets/img/icons8_design.svg';
function About() {
    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-md-center align-items-md-center">
                            <div className="row">
                                <div className="col-md-6 d-md-flex justify-content-md-center align-items-md-center">
                                    <div>
                                        <div className="card"
                                            style={{ border: 'none', boxShadow: ' 0px 0px 8px 1px rgba(145, 140, 145, 0.35)', borderRadius: '10px' }}>
                                            <div className="card-body">
                                                <div className="border rounded-circle d-flex justify-content-center align-items-center"
                                                    style={{
                                                        width: '55px', height: '55px', backgroundColor: '#35ab39', marginBottom: '1rem'
                                                    }}>
                                                    <img style={{ width: '35px', height: '35px' }}
                                                        src={UiUxImg} alt="" />
                                                </div>
                                                <h4 className="card-title">UI / UX Design</h4>
                                                <p className="card-text text-dark"
                                                    style={{
                                                        fontWeight: '400', textAlign: 'justify'
                                                    }}>
                                                    UX designer with 1 + years experience and specialization in complex
                                                    web application design.Achieved 15% increase
                                                    in user satisfaction and 20% increase in conversions through the
                                                    creation of interactively tested, data- driven, and
                                                user-centered design.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-md-flex flex-column justify-content-md-center align-items-md-center"
                                        style={{ maxHeight: '85vh', marginTop: '38px' }}>
                                        <div className="card"
                                            style={{
                                                marginBottom: '10%', marginTop: '20px', border: 'none', boxShadow: '0px 0px 8px 1px rgba(145, 140, 145, 0.35)', borderRadius: '10px'
                                            }}>
                                            <div className="card-body">
                                                < div className="border rounded-circle d-flex justify-content-center align-items-center"
                                                    style={{ width: '55px', height: '55px', backgroundColor: '#35ab39', marginBottom: '1rem' }}>
                                                    <img style={{ width: '35px', height: '35px' }}
                                                        src={DevImg} alt="" />
                                                </div>
                                                <h4 className="card-title">Development</h4>
                                                <p className="card-text text-dark"
                                                    style={{ fontWeight: '400', textAlign: 'justify' }}>I am a graduate of
                                                    computer science with hands on experience in web development, web
                                                    services development (C#) and
                                                android application development.</p>
                                            </div>
                                        </div>
                                        <div className="card"
                                            style={{ border: 'none', boxShadow: '0px 0px 8px 1px rgba(145, 140, 145, 0.35)', borderRadius: '10px' }}>
                                            <div className="card-body">
                                                <div className="border rounded-circle d-flex justify-content-center align-items-center"
                                                    style={{ width: '55px', height: '55px', backgroundColor: '#35ab39', marginBottom: '1rem' }}>
                                                    <img style={{ width: '35px', height: '35px' }}
                                                        src={AppImg} alt="" />
                                                </div>
                                                <h4 className="card-title">App Design</h4>
                                                <p className="card-text text-dark"
                                                    style={{ fontWeight: '400', textAlign: 'justify' }}>I have done my
                                                    graduation from Arid University in 2020 in the filed of Computer
                                                    Science. I have good knowledge of JavaScript,
                                                React.js, bootstrap.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p
                                style={{ color: 'rgb(53,171,57)', marginTop: '9rem', marginBottom: '15px', fontFamily: 'Poppins, sans-serif', fontWeight: '700', lineHeight: '1.2rem' }}>
                                Basic info about Me<br /></p>
                            <h1
                                style={{ fontSize: '3.2rem', marginBottom: '25px', lineHeight: '1.2em', fontFamily: 'Poppins, sans-serif', fontWeight: '600', color: '#3e3939' }}>
                                Digital Creator &amp; Strategists<br /></h1>
                            <p
                                style={{ color: '#212529', fontFamily: 'Roboto, sans-serif', fontSize: '16px', fontWeight: '300', lineHeight: '25px' }}>
                                I am a graduate of computer science with hands on experience in web development, web services development (C#) and android application development. I have done my graduation from Arid University in 2020 in the filed of Computer Science. <br /><br />I have good knowledge of server side & database languages such as WCF services (C#), JavaScript, React.js, bootstrap, SQL & SQLite. I have excellent communication skills in English and I am always keen to learn new technologies.
                            hidden the middle.<br /></p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default About;