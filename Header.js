import { useState } from 'react';
import {LOGO_URL} from '..//utils/constans'

const Header = ()=>{
    const [btnchange ,setBtnchange] = useState("login");
    return(
         <div className="header">
            <div className="logo">
                <img className='logoimg' src={LOGO_URL} alt="compny-logo"/>

            </div>
            <div className="nav-item">
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>cart</li>
                    <button onClick={()=>{
                      btnchange==="login" ? setBtnchange("logout") :setBtnchange("login")
                    }}
                    >{btnchange}</button>
                </ul>

            </div>

         </div>
    );
};

export default Header;