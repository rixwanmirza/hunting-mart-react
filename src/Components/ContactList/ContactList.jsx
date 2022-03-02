import React from "react";




const ContactList=()=>{

    return(
        <ul className="contact-list">
            <li>
                <a href="tel:+923000433361" className="tel">
                    <i className="fal fa-phone"></i> +92 300 0433361
                </a>
            </li>
            <li>
                <a href="https://wa.me/923331234567" className="tel">
                    <i className="fab fa-whatsapp"></i> +92 923331234567
                </a>
            </li>
            <li>
                <a href="mailto:info@huntingmart.pk" className="email">
                    <i className="fal fa-envelope"></i> info@huntingmart.pk
                </a>
            </li>
        </ul>
    )
}

export default ContactList;
