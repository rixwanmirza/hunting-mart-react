import React ,{useState} from "react";
import ContactList from "../ContactList/ContactList";
import SocialLinks from "../SocialLinks/SocialLinks";


const Topbar=(props)=>{

    return(
        <div className="top-header">
            <div className="container">
                <ContactList />
                <SocialLinks />
            </div>
        </div>
    )
}

export default Topbar;

// import React, { useState } from 'react';
//
// function Topbar() {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }
// export default Topbar;
