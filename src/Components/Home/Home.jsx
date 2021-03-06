import React from 'react';
import myImg from '../../assets/img/muneeb.png'
import MyCv from '../../assets/CV.docx';
function Home() {
    return (
        <div style={{ height: '100vh' }}>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5" style={{ color: 'rgb(53,171,57)', fontFamily: 'Poppins, sans-serif', fontSize: '17px' }}>
                            <h2
                                style={{ fontFamily: 'Poppins, sans-serif', color: '#3e3939', fontSize: '60px', marginBottom: '1.2rem', lineHeight: '60px', fontWeight: '600', marginTop: '9rem' }}>
                                Muneeb
                                <span style={{ color: 'rgb(53,171,57)' }}> Ur </span>
                                 Rehman
                            </h2>
                            <p
                                style={{ marginBottom: '25px', fontFamily: 'Roboto, sans-serif', color: '#696969', fontWeight: '300', textAlign: 'justify' }}>
                                I am a graduate of computer science with hands on experience in web development, web
                                services development (C#) and
                                android application development. I have done my graduation from Arid University in 2020 in
                                the filed of Computer
                                Science. I have good knowledge of server side & database languages such as WCF services
                                (C#), JavaScript, React.js,
                                bootstrap, SQL & SQLite. I have excellent communication skills in English and I am always
                                keen to learn new
                            technologies.<br /><br /></p>
                            <a href={MyCv} className="download-button" style={{ letterSpacing: '0.5px', fontWeight: '500' }} download>Download Resume</a>
                        </div>
                        <div className="col-lg-7" style={{ color: 'rgb(45,46,48)' }}>
                            <div className="border rounded-circle"
                                style={{ width: '551px', height: '551px', backgroundColor: '#35ab39', marginTop: '4.6rem', marginLeft: '3rem', backgroundImage: `url(${myImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'auto', backgroundPosition: 'center' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Home;