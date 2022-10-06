import React from "react";
import {BsShieldCheck} from 'react-icons/bs'
import logo1 from './images/logo1.png'
import logo2 from './images/logo2.png'
import imagX from './images/imagX.png'
import nv1 from './images/nv1.png'
import nv2 from './images/nv2.png'
import doctor from './images/doctor.png'
import vy from './images/vy.png'
import bt  from './images/bt.png'
import {AiFillStar} from 'react-icons/ai'
import './home.css'

import {BsTelephone,BsCalendar2Date} from 'react-icons/bs'
import {GoDiffAdded} from 'react-icons/go'
import {TbDental} from 'react-icons/tb'
const Homme=()=>{

    return(
            <div>
                <div className="bg-white">
                    <div className="container-fluid">
                        <div className="row">
                            <nav className=" col navbar navbar-expand-lg navbar-light">
                                {/* <div className="col-2"> */}
                                
                                    {/* <!--Cette partie nous permet de metre notre logo de page--> */}
                                    <a className="navbar-brand">
                                    <img src={logo2} className='im2 img-fluid' alt="Info Logo" />
                                    <img src={logo1}  alt="Info Logo" className="im1" />
                                     Dentics
                                    </a>
                                    
                                    {/* <img src={logo} className='im0' alt="Info Logo" /> */}

                                    {/* <!--pour creer un bouton au cas ou l'ecran et petit pour qu'il puisse defiler--> */}
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                {/* </div> */}
                                {/* <!-- id="navbarContent" className="collapse navbar-collapse permet le defilement--> */}
                                <div className="col-lg-9 col-md-10 col-sm-12 ">
                                    <div id="navbarContent" className="collapse navbar-collapse">
                                        <div className="col-10">
                                            <ul className="navbar-nav row " >
                                            <li className="nav-item active col-2 ms-4">
                                                <a className="nav-link " style={{
                                                    color:" #516EFF",
                                                    size: "30px"
                                                }} href=" ">Homme</a>
                                            </li>
                                            <li className="nav-item col-2">
                                                <a className="nav-link" href=" ">Service</a>
                                            </li>
                                            <li className="nav-item col-2">
                                                <a className="nav-link" href=" ">About us </a>
                                            </li> 
                                            <li className="nav-item col-2">
                                                <a className="nav-link" href=" ">Registre</a>
                                            </li>
                                            </ul>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-primary"> Apoinnement</button>
                                        </div> 
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr/>

        {/*  partie I */}
                <div className="row mt-5 ">
                    <div className="col-lg-6 col-md-10 col-sm-12 ">
                        <h1> We Provide High <br></br> Quality <span>Dental</span> Service</h1>
                        <p className="p"> Appropriately embrace transparent materials via turnkey niche markets.
                        Appropriately embrace transparent materials via turnkey niche markets. </p>
                        <div className="col-lg-6 col-md-4 col-sm-6 mb-10">
                            <button className="btn btn1 w-50 mb-3 mt-3"> Get Start</button>

                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-6 mb-10">
                            
                            
                            <button className="btn btn2 border border-gray w-50 mb-3 mt-3"> Learn More</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 col-sm-6 ">
                        <img src={nv1} className=' img-fluid nv1' alt="nv1"/> 
                    </div>
                </div>

        {/*  partie II*/}
                                                
                <div className="row pt pt-4">
                    <div className="col-5">
                        <h1> How to get our Service ?</h1>
                        <h6>Just fllowing this simple steps</h6>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="card bg-white bi  ">
                                <div className="card-body text-center">
                                <p className="card-text"><BsTelephone className="ico"/><br></br>Call for appointement</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="card bg-white bi">
                                <div className="card-body text-center">
                                <p className="card-text"><BsCalendar2Date className="ico"/> <br></br>Geting your data </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="card bg-white bi ">
                                <div className="card-body text-center">
                                <p className="card-text"><GoDiffAdded className="ico"/><br></br>Consult your Dentist</p>
                                </div>
                            </div>

                        </div>
                    
                    </div>
                </div>

            {/* partie III */}
                <div className="row mt-1">
                    <div className="col-lg-6 col-md-10 col-sm-12  sg">
                        <h1 className=""> Always <span>Lough</span><br></br>
                        Whenever Its Possible
                        </h1>
                        <hr></hr>
                        <img src={imagX} className='imagX img-fluid' alt='info header'/>
                    </div>
                    <div className="col-lg-6 col-md-10 col-sm-12 ">
                        <p className="ps ">
                            We also offer treatments that improve the appearance of your smile 
                            giving you the confidence boost you deserve.
                            The process or our treatment below.
                        </p>
                        <hr></hr>
                        <div className=" row mb-3">
                            <div className="col-lg-6 col-md-10 col-sm-12 ">
                                <h3 >WHAT WE PROVIDE</h3>
                            </div>
                        
                        </div>
                        <div className="row">
                            <div className="col-6">
                                
                                <ul className="ul2">
                                    <li className="mb-2"><BsShieldCheck/> Check ups

                                    </li>
                                    <li className="mb-2"><BsShieldCheck/> Cosmetic dentistry

                                    </li>
                                    <li className="mb-2"><BsShieldCheck/> Orthodintics

                                    </li>
                                    <li className="mb-2"><BsShieldCheck/> Preventative checks

                                    </li>
                                </ul>

                            </div>
                            <div className="col-6">
                                <ul className="ul2">
                                    <li className="mb-2"><BsShieldCheck/> Emergences

                                    </li>
                                    <li className="mb-2"><BsShieldCheck/> Dental implants

                                    </li>
                                    <li className="mb-2"><BsShieldCheck/> Children's dentistry

                                    </li>
                                    <li className="mb-2"><BsShieldCheck/> Telephone consultation

                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div> 
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-10 col-sm-12 ">
                        <h1 className="">What make us <strong>Special</strong></h1>
                    </div>
                    <div className="col-lg-6 col-md-10 col-sm-12  ">
                        <h1 className=""> KEY<span> FEATURE</span> </h1>
                    </div>
                    <hr></hr>
                </div>

            {/*  partie IV*/}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col mb-4 mt-4 ">
                            <div className="card-deck row">
                                <div className="card  ">
                                    <div className="card-body text-center">
                                        <TbDental className="ico"/><br></br>
                                        <h5> Laser Tchnologie</h5>
                                        <p className="card-text"> Call for appointement je suis fatiget trop fatigun,nmflkvnm,nnn</p>
                                    </div>
                                </div>
                                <div className="card  ">
                                    <div className="card-body text-center">
                                        <TbDental className="ico"/><br></br>
                                        <h5> Laser Tchnologie</h5>
                                        <p className="card-text"> Call for appointement je suis fatiget trop fatigun,nmflkvnm,nnn</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <TbDental className="ico"/><br></br>
                                        <h5> Laser Tchnologie</h5>
                                        <p className="card-text"> Call for appointement je suis fatiget trop fatigun,nmflkvnm,nnn</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col mb-4 mt-4 ">
                            <div className="card-deck row">
                                <div className="card  ">
                                    <div className="card-body text-center">
                                        <TbDental className="ico"/><br></br>
                                        <h5> Laser Tchnologie</h5>
                                        <p className="card-text"> Call for appointement je suis fatiget trop fatigun,nmflkvnm,nnn</p>
                                    </div>
                                </div>
                                <div className="card  ">
                                    <div className="card-body text-center">
                                        <TbDental className="ico"/><br></br>
                                        <h5> Laser Tchnologie</h5>
                                        <p className="card-text"> Call for appointement je suis fatiget trop fatigun,nmflkvnm,nnn</p>
                                    </div>
                                </div>
                                <div className="card  ">
                                    <div className="card-body text-center">
                                        <TbDental className="ico"/><br></br>
                                        <h5> Laser Tchnologie</h5>
                                        <p className="card-text"> Call for appointement je suis fatiget trop fatigun,nmflkvnm,nnn</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            {/* partie V */}
                <div className="row tr mt-4">
                    <div className="col">
                        <h3 className="mt-2">Let Us Brighten <strong> Your Smile !</strong></h3>
                        <h6 className="mytext">
                            Helping patients achieve good dental health 
                            beautiful smile is a privilege  responsibility. 
                            For over 30 years, we proudly provided the best dental 
                            experience in New York. Our comfort-first approach is designed 
                            to meet the needs of you your entire family.
                        </h6>
                        <button className="btn mb-4 mt-4 text-white border border-white">Make Apoinnement</button>
                    </div>
                </div>

            {/*  partie VI */}
                <div className="container-fluid px-4 mt-5">
                    <div className="row">
                        <div className=" col-lg-6 col-md-10 col-sm-12 ps">
                            <h1>WHO <span> WE ARE</span></h1>
                            <hr></hr>
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-12  sv">
                        <h1>Our Glorious <br></br><strong>History</strong></h1>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-lg-6 col-md-10 col-sm-12  ps  ">
                            <img src={nv2} className='img-fluid' alt="nv2"/>
                        
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-12  sv px-4">
                          
                            <div className="card ms-4  float-md-end" >
                                <div className="card-body">
                                    <h3 className="hb">Our History</h3>
                                    <p className="card-text pb">
                                        Dentics is a well-known name in dental and oral
                                        care in New York. The journey of this institution 
                                        started in 1990 under the hands of Dr. Jonathon Doe, 
                                        Gold Medalist of Harvard University. Dentics dental
                                        center has been leading the way in dental treatment 
                                        in USA for more than 30 years in keeping with the 
                                        evolution of time and the modernization of the era.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* partie VII */}
                <div className="sg mt-4">
                    <div className="row ">
                            <div className="col-lg-6 col-md-10 col-sm-12 ">
                                <h2 className=""> Meet Some of Our <b></b> <strong>Brains</strong></h2>
                            </div>
                            <div className="col-lg-6 col-md-10 col-sm-12 ">
                                <h2 className="">MEET OUR DOCTORS  <span>Brains</span></h2>
                            </div>
                        <hr></hr>
                    </div>
                    <div className="row mt-5 mb-5 px-4">
                        <div className="col-sm-3">
                            <div className="card  px-4 mt-3">
                                <img className="card-img-top tag img-fluid" src={doctor} alt='imh'/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Doctor diouf</h5>
                                    <p className="card-text"> She is the best doctor in this city</p>
                                    <button className="btn border border-primary rounded text-primary">Apoinnement</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card  px-4 mt-3 " >
                                <img className="card-img-top img-fluid tag" src={doctor} alt='imh'/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Doctor diouf</h5>
                                    <p className="card-text"> She is the best doctor in this city</p>
                                    <button className="btn border border-primary rounded text-primary">Apoinnement</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                                <div className="card px-4 mt-3 ">
                                    <img className="card-img-top tag img-fluid" src={doctor} alt='imh'/>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Doctor diouf</h5>
                                        <p className="card-text"> She is the best doctor in this city</p>
                                        <button className="btn border border-primary rounded text-primary">Apoinnement</button>
                                    </div>
                                </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card px-4 mt-3 ">
                                <img className="card-img-top img-fluid tag" src={doctor} alt='imh'/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Doctor diouf</h5>
                                    <p className="card-text"> She is the best doctor in this city</p>
                                    <button className="btn border border-primary rounded text-primary">Apoinnement</button>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>

            {/* partie VIII*/}
                <div className="row tr ">
                    <div className="col-lg-6 col-md-10 col-sm-12   ">
                        {/* <img src={BG} className='bg float-md-start' alt="bg"/>  */}
                            <div className="card col-lg-12 col-md-10 col-sm-12   bg-white samacl">
                                <img className="card-img-top img-fluid mt-2 px-2" src={bt} alt='imh'/>
                                <div className="card-body">
                                <h5 className="card-title text-dark">Samantha Payne <br></br>
                                <AiFillStar className="star"/> <AiFillStar className="star"/> <AiFillStar className="star"/> 
                                <AiFillStar className="star"/>
                                </h5>
                                
                                </div>
                            </div>
                       
                    </div>
                    <div className="col-lg-6 col-md-10 col-sm-12  ps">
                        <hr className="bg-white"></hr>
                        <h2>What our clinet says about us</h2>
                        <p className="mt-5 text-white"> I’ve seen a lot of Dentists over my
                            lifetime because I’ve had some serious
                            dental issues. But my highest praise goes 
                            to Dr. Jonathon Doe and his staffs .
                            I was always very anxious going to the d
                            entist but this time at Digital Implant,
                            my experience was so painless and relaxed
                            their was no discomfort whatsoever.
                        </p>
                    </div>
                </div>

            {/* partie IX */}
                <div>
                    <div className="row mt-4">
                        <div className="col-lg-6 col-md-10 col-sm-12 ">
                            <h1>MAKE AN <span>APPOINTEMENT</span></h1>
                            <hr></hr>
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-12 ">
                            <h1>Consult with our <br></br><strong>Doctor</strong></h1> 
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-sm-12  ">
                             <img src={vy} className="img-fluid" alt="vy"/> 
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-12  px-5">
                            <form>
                                <div className="form-row mt-4">
                                    <div className="col-lg-6 col-md-10 col-sm-12 ">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="First name"/>
                                    </div>
                                    <div className="col-lg-6 col-md-10 col-sm-12 ">
                                        <label>FirstName</label>
                                        <input type="text" className="form-control" placeholder="Last name"/>
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-lg-6 col-md-10 col-sm-12 ">
                                        <label for="inputDate">Date</label>
                                        <input type="date" className="form-control" placeholder="First name"/>
                                    </div>
                                    <div className="col-lg-6 col-md-10 col-sm-12 ">
                                        <label>Doctor</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Doctor Fall</option>
                                            <option>Dr Diop</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-lg-6 col-md-10 col-sm-12 ">
                                        <label>Messages</label>
                                        <textarea className="form-control " id="exampleFormControlTextarea1" rows="4" cols='6'></textarea>
                                    </div>
                                </div>
                                <div className="form-check col-lg-6 col-md-10 col-sm-12 ">
                                <input className="form-check-input" type="checkbox" value=""  />
                                <label className="form-check-label" for="flexCheckCheckedDisabled">
                                    You agree to our frindly privency plolice
                                </label>
                                </div>
                            </form>
                            <div className="col-lg-12 col-md-10 col-sm-12  mt-4"> 
                            <button className='btn btn-primary container rounded text-white'> Confirme Apoinnement</button>
                            </div>
                        </div>
                    </div>
                </div> 
            {/* partie X */} 
                <footer>
                    <div className=" mt-4">
                        <div className="row  px-5">
                            <div className="col-10 lot mx-4  rounded">
                                <h2 className="text-white mt-5"> Subscribe to our newsletter  </h2>
                                <div className="row mb-5"> 
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-10">
                                        <button className='btn zs rounded text-white w-90 mt-3' > FirstName</button>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-10 ">
                                        <button className='btn btn  zs  rounded text-white w-90 mt-3 '> Email Adress</button>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 mb-10 "> 
                                    <button className='btn  bg-white rounded text-gray w-70 mt-3'> Subscribe Now</button>
                                    </div>  
                                </div>

                            </div>
                        </div>

                        <div className="row bg-primary mt-5  ">
                            <div className="col-lg-3 col-md-6 col-sm-12 border border-end-1">
                                <h1 className="text-white">Dentics</h1>
                                <p className="p0 px-5">
                                Dentics is a well-known name in dental and oral care in New York. 
                                The journey of this institution started in 1990

                                </p>
                            </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 mb-10 border border-end-1">
                                <p className="p0"> We are welcoming you</p>
                                <h2 className="p0">Want to visit<br></br> our clinic ?</h2>
                                <p className="p0"> Saturday - Thusday</p>
                                <p className="p0">10 am - 9pm</p>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-sm-12 ftr border border-end-1 ">
                                <p className="p0"> Important link</p>
                                <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <ul className="gkb">
                                        <li> Facebook</li><b></b>
                                        <li> Twitter</li><b></b>
                                        <li> Instagram</li><b></b>
                                    </ul>

                                </div>
                               
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <ul className="gkb">
                                        <li> Career</li><b></b>
                                        <li> Support</li><b></b>
                                        <li> Privancy policy</li><b></b>
                                    </ul>
                                </div>

                                </div>
                            
                            </div>
                                
                            <div className="col-lg-3 col-md-6 col-sm-12ftr border border-start-1">
                                <p className="p0 mb-4"> Say hello to us</p>
                                <p className="p0 mb-3"> Hello@reallygreatsite.com</p>
                                <p className="p0 mb-2"> Address</p>
                                <p className="p0"> 123 Anywhere St.,Any</p>
                                <p className="p0"> Hello@reallygreatsite.com</p>
                            </div>
                        
                        </div>

                
                    </div>  
                </footer> 
            </div>
        );
    }


export default Homme;