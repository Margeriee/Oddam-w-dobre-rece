import React from 'react';
import {Formik} from 'formik';
import {Decoration} from '../../assets/Decoration';
import {Footer} from '../Footer/Footer';
import './ContactUs.scss';

export const ContactUs = () => {
    return (
        <section className="section__contactUs" id="contactUs">
            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validate={values => {
                    const errors = {};
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Podany email jest nieprawidłowy!';
                    }
                    if (values.name.includes(" ") || !values.name) {
                        errors.name = 'Podane imię jest nieprawidłowe!';
                    }
                    if ((values.message.length < 30)) {
                        errors.message = 'Wiadomość musi mieć conajmniej 30 znaków!';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);

                    // resetForm();
                }}
                
                // onSubmit={ async (values, { setSubmitting }) => {
                //     const res = await fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                //         method: 'GET',
                //         headers: {
                //             'Content-Type': 'application/json',
                //         body: JSON.stringify(values)
                //         }}).then(response => response.json())

                //     setTimeout(() => {
                //         alert(JSON.stringify(res, null, 2));
                //         setSubmitting(false);
                //     }, 400);
                // }}
            >
                {({values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit}) => (
                        <form className="section__contactUs__form" onSubmit={handleSubmit}>
                            <h2>Skontaktuj się z nami</h2>
                            <Decoration/>
                            <div className="section__contactUs__form--inputs">
                                <div>
                                    <label>Wpisz swoje imię</label>
                                    <input  
                                        type="name"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="Małgorzata"
                                    />
                                    <span className="section__contactUs--errors">{errors.name && touched.name && errors.name}</span>
                                    <label>Wpisz swój email</label>
                                    <input  
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="abc@xyz.pl"
                                    />
                                    <span className="section__contactUs--errors">{errors.email && touched.email && errors.email}</span>
                                </div>
                                <div>    
                                    <label>Wpisz swoją wiadomość</label>
                                    <textarea 
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                    />
                                    <span className="section__contactUs--errors">{errors.message && touched.message && errors.message}</span>
                                </div>
                            </div>
                            <button type="submit">Wyślij</button>
                        </form>
                    )
                }
            </Formik>
            <Footer/>
        </section>
    )
}