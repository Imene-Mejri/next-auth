import React, {useEffect} from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router'


function Logo() {
    const auth = useSelector(state => state.auth)
    const router = useRouter();
    
    useEffect(()=>{
        if(!auth.authenticate){
            router.push('/')
         }
    })
  return (
    <div style={{ width: "100%" }}>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />

        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <main>
        <NavBar />

        <div>
          <center>
          <img src="/logo.png"  className="logo"/>
          </center>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Logo;
