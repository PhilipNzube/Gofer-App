import Logo from './images/logo.png';
import FB from './images/FBImg.png';
import GOOGLE from './images/GoogleImg.png';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
    const GoToCreateAccount = () => {
        navigate("/");
    }

    const GoToForgotPassword = () => {
        navigate("/ForgotPassword");
    }

    const GoToHomePage = () => {
        navigate("/HomePage2");
    }
    return (
        <>
            <div id="Elilipse"></div>
            <div id="ModalBody">
                <div id="ModalCont">
                    <div id="LOGO">
                        <img alt="LOGO" src={Logo} />
                    </div>
                    <div id="FBSIGNIN">
                        <img id="FB" alt="FaceBookLogo" src={FB} /><span id="FBSIGNINTEXT"> Sign In With Facebook</span>
                    </div>
                    <div id="GOOGLESIGNIN">
                        <img id="GOOGLE" alt="GoogleLogo" src={GOOGLE} /><span id="GOOGLESIGNINTEXT"> Sign In With Google</span>
                    </div>
                    <div id="OR">
                        <hr /><span>OR</span><hr />
                    </div>
                    <form>
                        <div id="SixthInput">
                            <label id="EmailOrUsernamelabel">Email or username</label>
                            <div id="EMAILORUSERNAME">
                                <input name="emailorusername" id="Emailorusername" type="text" required placeholder="Email or Username" />
                            </div>
                        </div>

                        <div id="SeventhInput">
                            <label id="seventhpasswordlabel">Password</label><span id="LostPSWText" onClick={GoToForgotPassword}>Lost your password?</span>
                            <div id="SEVENTHPASSWORD">
                                <input name="seventhpassword" id="SeventhPassword" type="password" required placeholder="Password" />
                            </div>
                        </div>

                        <div id="SIGNINBUTTON">
                            <input id="SignInButton" type="submit" value="Sign in" onClick={GoToHomePage} />
                        </div>
                    </form>
                    <p id="Register">Not a member? <span id="RegisterLink" onClick={GoToCreateAccount}>Sign up now</span></p>
                </div>
            </div>
            <div id="Elilipse2"></div>
        </>
    )
}