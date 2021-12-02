import React from 'react'
import style from  '../styles/Nav.module.css'
function Footer() {
    return (
        <div>
            <div className={style.footer}>
                 <div className="p-4 footer__mb">
                   <center>
                   <img src="/logo.png"  className="w-16 h-16"/>
                   </center>
                 </div>
            </div>
        </div>
    )
}

export default Footer
