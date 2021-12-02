import {useState} from 'react'
import Head from "next/head";
import Footer from "../components/Footer";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import Register from "../components/Register";



export default function Home() {
  
   
  const [loginShow, setLoginShow] = useState(false)
  const [registerShow, setRegisterShow] = useState(true)
  

  const toggle = ()=>{
    setLoginShow(!loginShow);
    setRegisterShow(!registerShow)
  }

 
  

  return (
    <div style={{width: '100%'}}>
      <Head>
       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>

        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        

      </Head>
      <main>
        <NavBar />
        <div className="container p-4 mt-4" style={{ marginTop: "80px" }}>
            <center>
            <div className="form__index w-50">
               <div className="register"> 
                <span className="check__register" style={{display:  registerShow === true ? 'block' : 'none'  }}>
                  <i className="fas fa-check"></i>
                </span>
               <i className="fas fa-user-tag" onClick={()=> registerShow !== true ? toggle() : '' }></i> 
               <p>register</p>
               <p className="small">register block</p>
               </div>
               <div className="login">
               <span className="check__login" style={{display:  loginShow === true ? 'block' : 'none'  }}>
                  <i className="fas fa-check"></i>
                </span>
                 <i className="fas fa-sign-in-alt" onClick={()=>loginShow !== true ? toggle() : ''}></i>
                 <p>sign in</p>
                 <p className="small">sign in block</p>
                 </div>
             </div>
            </center>
            <center>
              <Login show={loginShow}/>
              <Register show={registerShow} toggle={toggle}/>
            </center>
        </div>

      </main>
      <Footer />
    </div>
  );
}
