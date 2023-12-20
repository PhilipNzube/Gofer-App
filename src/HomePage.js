import FindGofer from './images/FIND GOFERS LOGO B TEXT 1.png';
import NairaImg from './images/nigeria-naira-currency-symbol-svgrepo-com 1.png';
import TagImg from './images/Frame.png';
import CheckImg from './images/game-icons_check-mark.png';
import ClientSignup from './images/client-sign-up-img (1) 1.png';
import Tasker from './images/become-a-tasker-img (1) 1.png';
import DP from './images/DRP 1.png';
import SocialIcon1 from './images/Social1.png';
import SocialIcon2 from './images/Social2.png';
import SocialIcon3 from './images/Social3.png';
import SocialIcon4 from './images/Social4.png';
import SocialIcon5 from './images/Social5.png';
import SocialIcon6 from './images/Social6.png';
import SocialIcon7 from './images/Social7.png';
import SocialIcon8 from './images/Social8.png';
import TopSideBarIcon from './images/Group 211.png';
import TopCloseSideBarIcon from './images/CloseBut.png';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    setTimeout(() => {
        document.body.style.overflowY = "auto";   
    }, 100);
    const Navigate = useNavigate();
    const GoToSignInPage = () => {
        Navigate("/SignIn");
    }

    let Clicked = "False";
    const TopSliderOutBar = () => {
        if (Clicked == "False") {
            document.body.style.overflowY = "hidden";
            document.getElementById("TopSiderbarIconID").style.visibility = "hidden";
            document.getElementById("TopSideBarSlider").style.display = "block";
            Clicked = "True";
        }
        else
            if (Clicked == "True") {
                document.body.style.overflowY = "auto";
                document.getElementById("TopSideBarSlider").style.display = "none";
                document.getElementById("TopSiderbarIconID").style.visibility = "visible";
                Clicked = "False";
            }
    }
    return (
        <>
            <div id="HomePageCont">
                <div id="TopBar">
                    <img id="FindGofer" alt="Logo" src={FindGofer} />
                    <div id="TopSideBarMain">
                        <img id="TopSiderbarIconID" className="TopSideBarIcon" alt="TopSideBarIcon" src={TopSideBarIcon} onClick={TopSliderOutBar} />
                    </div>
                    <div id="RightTopFix">
                        <span id="Loca">Location</span>
                        <span id="Serve">Services</span>
                        <span id="SignUpBut">Sign Up</span>
                        <span id="SignInBut" onClick={GoToSignInPage}>Sign In</span>
                    </div>
                </div>

                <div id="Frames">
                    <div id="Frame1">
                        <div id="TopSideBarSlider">
                            <div id="TopSideBar2">
                                <img className="TopSideBarIcon2" alt="TopSideBarIcon2" src={TopCloseSideBarIcon} onClick={TopSliderOutBar} />
                                <span id="Loca">Location</span>
                                <span id="Serve">Services</span>
                                <span id="SignUpBut">Sign Up</span>
                                <span id="SignInBut" onClick={GoToSignInPage}>Sign In</span>
                            </div>
                        </div>


                        <div id="Frame1Modal">
                            <div id="Frame1ModalCont">
                                <p id="Frame1MainText">Get help. Get happiness.</p>
                                <div id="Frame1Form">
                                    <input id="Frame1Input" type="text" placeholder='I need help with...' />
                                    <span id="GetHelpBut">Get help today</span>
                                </div>
                                <div id="Frame1More">
                                    <span id="F1More1">Home Cleaning</span>
                                    <span id="F1More2">TV Mounting</span>
                                    <span id="F1More3">Mounting</span>
                                    <span id="F1More4">See more</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="Frame2">
                        <p id="Frame2MainText">Popular projects in your area</p>
                        <div id="Frame2Cards">
                            <div id="F2Card1">
                                <p id="F2Card1Text">Furniture Assembly</p>
                                <p id="F2Card1Text2"><img id="TagImg" alt="Tag" src={TagImg} />Avg. Project:<span><img id="NairaImg" alt="Naira" src={NairaImg} />5000</span></p>
                            </div>

                            <div id="F2Card2">
                                <p id="F2Card1Text">TV Mounting</p>
                                <p id="F2Card1Text2"><img id="TagImg" alt="Tag" src={TagImg} />Avg. Project:<span><img id="NairaImg" alt="Naira" src={NairaImg} />5000</span></p>
                            </div>


                            <div id="F2Card3">
                                <p id="F2Card1Text">Home Cleaning</p>
                                <p id="F2Card1Text2"><img id="TagImg" alt="Tag" src={TagImg} />Avg. Project:<span><img id="NairaImg" alt="Naira" src={NairaImg} />5000</span></p>
                            </div>


                            <div id="F2Card4">
                                <p id="F2Card1Text">Handyman Services</p>
                                <p id="F2Card1Text2"><img id="TagImg" alt="Tag" src={TagImg} />Avg. Project:<span><img id="NairaImg" alt="Naira" src={NairaImg} />5000</span></p>
                            </div>


                            <div id="F2Card5">
                                <p id="F2Card1Text">Hanging Pictures</p>
                                <p id="F2Card1Text2"><img id="TagImg" alt="Tag" src={TagImg} />Avg. Project:<span><img id="NairaImg" alt="Naira" src={NairaImg} />5000</span></p>
                            </div>

                            <div id="F2Card6">
                                <p id="F2Card1Text">Plumbing Services</p>
                                <p id="F2Card1Text2"><img id="TagImg" alt="Tag" src={TagImg} />Avg. Project:<span><img id="NairaImg" alt="Naira" src={NairaImg} />5000</span></p>
                            </div>
                        </div>
                    </div>

                    <div id="Frame3">
                        <div id="Frame3Overlay">
                            <div id="Frame3Cont">
                                <p id="F3Text1">Everyday life made easier</p>
                                <p id="F3Text2">When life gets busy, you don’t have to tackle it alone.
                                    Get time back for what you love without breaking the
                                    bank.</p>
                                <ol>
                                    <p id="F3Text3"><img id="CheckImg" alt="CheckMark" src={CheckImg} />Choose your Tasker by reviews, skills, and price</p>
                                    <p id="F3Text4"><img id="CheckImg" alt="CheckMark" src={CheckImg} />Schedule when it works for you — as early as today</p>
                                    <p id="F3Text5"><img id="CheckImg" alt="CheckMark" src={CheckImg} />Chat, pay, tip, and review all through one platform</p>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div id="Frame4">
                        <p id="F4Text1">Ready to get started?</p>
                        <div id="F4Cont">
                            <div id="F4Text2">
                                <img id="F4Text2a" alt="Client-Signup" src={ClientSignup} />
                                <span id="F4Text2b">Hear that? The sweet sigh of
                                    relief. Start getting more done.</span>
                                <span id="F4Text2c">Sign up</span>
                            </div>

                            <div id="F4Text3">
                                <hr id="F4Divider" />
                            </div>

                            <div id="F4Text4">
                                <img id="F4Text4a" alt="Tasker" src={Tasker} />
                                <span id="F4Text4b">Grow your own business while
                                    saving the day for busy neighbors.</span>
                                <span id="F4Text4c">Become a tasker</span>
                            </div>
                        </div>
                    </div>


                    <div id="Frame5">
                        <p id="Frame5MainText">Cities where we work - Findgofer</p>
                        <div id="Frame5Form">
                            <input id="Frame5Input" type="text" placeholder='Search by zip code' />
                            <span id="CheckAvail">Check Availability</span>
                        </div>
                        <p id="Frame5MainText2">Get help today</p>
                        <div id="Frame5MoreMain">
                            <div id="Frame5More">
                                <span id="F5More1">Handyman Services</span>
                                <span id="F5More2">Hauling Services</span>
                                <span id="F5More3">Help Moving</span>
                                <span id="F5More4">Hire a Personal Assistance</span>
                            </div>

                            <div id="Frame5More">
                                <span id="F5More5">Hire a Painter</span>
                                <span id="F5More6">Yard Cleanup & Removal</span>
                                <span id="F5More7">Laundry Services</span>
                                <span id="F5More8">Hanging Pictures Help</span>
                            </div>

                            <div id="Frame5More">
                                <span id="F5More9">Light Installation</span>
                                <span id="F5More10">TV Mounting</span>
                                <span id="F5More11">Furniture Delivery</span>
                                <span id="F5More12">Furniture Removal</span>
                            </div>
                        </div>
                    </div>

                    <div id="Frame6">
                        <div id="Frame6Cont">
                            <img id="FindGofer" alt="Logo" src={FindGofer} />
                            <span id="FollowUs"><img id="FollowUsImg" src={DP} alt="FollowUs" />Follow us @FindGofer</span>
                        </div>
                        <hr id="Frame6Divider" />

                        <div id="F6MainCont">
                            <div id="Frame6Cont2">
                                <p id="F6Cont2Header">MENU</p>
                                <div id="F6ContBody">
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                </div>
                            </div>

                            <div id="Frame6Cont2">
                                <p id="F6Cont2Header">MENU</p>
                                <div id="F6ContBody">
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                </div>
                            </div>


                            <div id="Frame6Cont2">
                                <p id="F6Cont2Header">MENU</p>
                                <div id="F6ContBody">
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                    <span>Sub menu</span>
                                </div>
                            </div>


                            <div id="Frame6Cont3">
                                <p id="F6Cont2Header2">Follow us on all socials</p>
                                <div id="F6ContBody2">
                                    <img className="SocialIcon" alt="SocialIcon1" src={SocialIcon1} />
                                    <img className="SocialIcon" alt="SocialIcon2" src={SocialIcon2} />
                                    <img className="SocialIcon" alt="SocialIcon3" src={SocialIcon3} />
                                    <img className="SocialIcon" alt="SocialIcon4" src={SocialIcon4} />
                                    <img className="SocialIcon" alt="SocialIcon5" src={SocialIcon5} />
                                    <img className="SocialIcon" alt="SocialIcon6" src={SocialIcon6} />
                                    <img className="SocialIcon" alt="SocialIcon7" src={SocialIcon7} />
                                    <img className="SocialIcon" alt="SocialIcon8" src={SocialIcon8} />
                                </div>
                            </div>
                        </div>


                        <div id="F6FinalMainCont">
                            <div id="F6FinalCont1">
                                <span id="FinalF6BoldText">Copyright 2023   FindGofer</span>
                                <span id ="FinalF6BoldText2">Powered by FindGofer</span>
                            </div>
                            <div id="F6FinalCont2">
                                <span>Privacy Policy                 </span>
                                <span>|</span>
                                <span>Affiliate</span>
                                <span>|</span>
                                <span>Developers API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}