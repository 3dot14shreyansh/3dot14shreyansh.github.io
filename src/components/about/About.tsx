import { BiCoffeeTogo } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { ImHeadphones, ImBooks } from "react-icons/im";
import { TiCamera } from "react-icons/ti";
import { IoIosBicycle } from "react-icons/io";
import { Popup } from 'semantic-ui-react'

import "./about.css";
import { useEffect } from "react";
const AOS = require('aos');


const About = () => {

    useEffect(() => {
        AOS.init({
          duration : 1200
        });
      }, []);

    return (
        <div id="about-sec">
        <div>
            <p className="heading sec">About <strong>Me</strong></p>
        </div>
        <div className="col-grid">
            <div className="col">
                <div data-aos="fade-left" data-aos-duration="1500" className="boxed card">
                    <p>
                        <span className="about-intro">
                            Appreciate everything, even the ordinary.<br /> 
                            <strong>Especially</strong>the ordinary.<br />
                            Keep drumming.
                        </span>
                        <br />

                        I have strong inclination in gauging a data from as many perspective
                        as I can and then love making them to work for solving a problem.
                        I try to keep my codes and life minimalistic yet intutive. I love In-house 
                        garden and travelling by roads. I actively work towards the road safety.
                        <br />
                        <br />
                        <br />

                        <i>If you are looking out for anything related to data science learning resources, career transition  
                            <br />project collaborations, or simply anything 
                            <br/>not listed and has to do with data science, dogs, plants or hybrid automobile.
                        <br />I'm happy to connect.<br /></i>
                        <div className="button" onClick={() => window.open("https://www.instagram.com/direct/inbox/")}>
                            Meet me on Instagram!
                        </div>
                        
                        
                    </p>
                </div>
            </div>
            
            <div className="col">
                <div data-aos="zoom-in-right" data-aos-duration="1100" className="boxed details card">
                    <p className="bio">He / him</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1300" className="boxed details card">
                    <p className="bio">26 years old</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1500" className="boxed details card">
                    <p className="bio">Sagittarius</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1300" className="boxed details card">
                    <p className="bio">Minimalist</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1300" className="boxed details card">
                    <p className="bio">Love for Dogs and Plants</p>
                </div>

                <div data-aos="zoom-in-right" data-aos-duration="1300" className="boxed details card">
                    <p className="bio">Toyota & LandRover</p>
                </div>
            
                <div className="hobbies">
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200" className="material-icons">
                                <BiCoffeeTogo color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content={<div>coffee<br />coffee<br />coffee</div>}
                        className="popped"
                        position='bottom center'
                    />

                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className="material-icons">
                                <ImHeadphones color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='all genre tunes'
                        className="popped"
                        position='bottom center'
                    />
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <TiCamera color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='romanticizing life through my shots'
                        className="popped"
                        position='bottom center'
                    />
                    
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <IoIosBicycle color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content='cycling through streets'
                        className="popped"
                        position='bottom center'
                    />

                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <ImBooks color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content={"reading when i'm bored"}
                        className="popped"
                        position='bottom center'
                    />
                    <Popup
                        trigger={
                            <span data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1800" className="material-icons">
                                <ImBooks color="#c7666c" fontSize="25px"/>
                            </span>
                        }
                        content={"reading when i'm bored"}
                        className="popped"
                        position='bottom center'
                    />
                    

                    

                    
                    
                </div>
            </div>

        </div>
        </div>
    )
}

export default About