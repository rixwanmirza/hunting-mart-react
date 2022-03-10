import React from "react";
import Field from "../Components/form/InputTypes/Field";

const ContactUs=(props)=>{
    return(
        <section className="section">
            <div className="container">
                <form className="form">
                    <Field type="text" placeholder="First Name" />
                    <Field type="email" placeholder="Email" required="required" />
                    <Field type="password" placeholder="Enter Password"/>
                </form>
            </div>
        </section>
    )
}

export default ContactUs;
