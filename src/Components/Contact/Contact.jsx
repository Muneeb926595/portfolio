import React, { useState } from 'react';
import AddressImg from '../../assets/img/icons8_address_2.svg';
import EmailImg from '../../assets/img/icons8_email_open.svg';
import PhoneImg from '../../assets/img/icons8_phone.svg';
import emailjs from 'emailjs-com';
function Contact() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [subject, setSubject] = useState("");
    let [message, setMessage] = useState("");
    let [sent, setSent] = useState({ isFirst: true, sucess: false });

    //send email to my gmail
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_ltJG77Zs', e.target, 'user_Cd6cR9lwxOnCLwbWFkI3A')
            .then((result) => {
                setSent({ isFirst: false, sucess: true });
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            }, (error) => {
                setSent({ isFirst: false, sucess: false });
            });
    }

    return (
        <div style={{ height: '100vh' }}>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2
                                style={{
                                    color: '#3e3939', fontFamily: 'Poppins, sans-serif', fontWeight: '600', lineHeight: '1.2em', fontSize: '3.2rem', marginBottom: '10px', marginTop: '10px'
                                }}>
                                Let's Get In Touch<br />
                            </h2>
                            <div className="alert alert-success" style={{ padding: '7px', marginBottom: '0px', display: `${sent.isFirst ? 'none' : `${sent.sucess ? 'block' : 'none'}`}` }}>
                                <strong style={{ marginRight: "10px" }}>Success!</strong>
                                Message Sent Successfully.
                            </div>
                            <div className="alert alert-danger" style={{ padding: '7px', marginBottom: '0px', display: `${sent.isFirst ? 'none' : `${sent.sucess ? 'none' : 'block'}`}` }}>
                                <strong style={{ marginRight: "10px" }}>Failed!</strong>
                                Message Sending Failes.
                            </div>
                            <form onSubmit={sendEmail} id="tex-fo" style={{ padding: '0px' }}>
                                <div className="text-center d-flex align-items-end" style={{ width: '100%' }}>
                                    <div className="form-group" style={{ width: '50%', marginRight: '10px' }}>
                                        <input name="name" value={name} onChange={(e) => { setName(e.target.value) }}
                                            className="border-secondary form-control" type="text"
                                            style={{ fontFamily: 'Poppins, sans-serif', width: '100%' }}
                                            placeholder="Name" required />
                                    </div>
                                    <div className="form-group border-info" id="tex-fo" style={{ width: '50%' }}>
                                        <input name="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                                            className="border-secondary form-control" type="email"
                                            style={{ fontFamily: 'Poppins, sans-serif', paddingRight: '0', width: '100%' }}
                                            placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="form-group" id="tex-fo">
                                    <input name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} className="border-secondary form-control" type="text"
                                        style={{ fontFamily: ' Poppins, sans-serif', width: '100%' }}
                                        placeholder="Subject" required />
                                </div>
                                <div className="form-group" id="tex-fo" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value) }}
                                        className="border-secondary form-control"
                                        style={{ height: '99px', fontFamily: 'Barlow, sans-serif', width: '100%' }}
                                        placeholder="Message" required>

                                    </textarea>
                                </div>
                                <button className="btn btn-success btn-block p-2 mr-2  contact-button" type="submit">
                                    Send Message
                                </button>
                            </form>
                            <div style={{ backgroundColor: '#f9f9f9', margin: '0px', marginTop: '20px' }}>
                                <div className="d-flex justify-content-start"
                                    style={{ padding: '0px', paddingTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
                                    <div><img style={{ width: '50px', height: '50px', marginRight: '16px' }}
                                        src={AddressImg} alt='address_icon' /></div>
                                    <div>
                                        <h6 style={{ color: '#35ab39', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                                            Address</h6>
                                        <p
                                            style={{ color: '#696969', fontFamily: 'Roboto, sans-serif', fontSize: '15px', fontWeight: '300' }}>
                                             Street 3, Jannah Lane Range road, Rawalpindi.<br /></p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <div className="d-flex flex-row" style={{ paddingTop: '6px', paddingLeft: '20px' }}>
                                        <div><img style={{ width: '50px', height: '50px', marginRight: '16px' }}
                                            src={EmailImg} alt='email_icon' /></div>
                                        <div>
                                            <h6
                                                style={{ color: 'rgb(53,171,57)', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                                                Email</h6>
                                            <p
                                                style={{ color: '#696969', fontWeight: '300', fontFamily: 'Roboto, sans-serif', fontSize: '15px' }}>
                                                muneebkhann0@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row" style={{ paddingTop: '10px', paddingLeft: '10px' }}>
                                        <div><img style={{ width: '50px', height: '50px', marginRight: '16px' }}
                                            src={PhoneImg} alt='phone_icon' /></div>
                                        <div>
                                            <h6
                                                style={{ color: 'rgb(53,171,57)', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                                                Phone</h6>
                                            <p
                                                style={{ color: '#696969', fontFamily: 'Roboto, sans-serif', fontWeight: '300', fontSize: '15px' }}>
                                                03171511383</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <iframe title="Mylocation"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.5617723875966!2d73.02075793580819!3d33.59718906080612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95b2d80e9371%3A0x7ef167fd7f4e6143!2sIqra%20fashion!5e0!3m2!1sen!2s!4v1598332596721!5m2!1sen!2s"
                                width="100%" height="100%" frameBorder="0" style={{ border: '0' }} allowFullScreen=""
                                aria-hidden="false" tabIndex="0"></iframe>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
