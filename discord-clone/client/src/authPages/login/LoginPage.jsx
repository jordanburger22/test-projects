import AuthBox from "../../shared/components/AuthBox";
import LoginPageInputs from "./LogInPageInputs";
import LoginHeader from "./LoginHeader"
import { useState, useEffect } from "react";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../shared/utils/validators";
import {connect} from "react-redux";
import { getActions } from "../../stores/actions/authActions";
import { useNavigate } from "react-router-dom";


function LoginPage({login}) {
    const history = useNavigate();
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        setIsFormValid(validateLoginForm(mail, password))
    }, [mail, password, setIsFormValid])

    function handleLogin(e){
        const userDetails = {
            mail,
            password
        }

        login(userDetails, history)
    }

    return (
        <>
            <AuthBox>
                <LoginHeader />
                <LoginPageInputs
                    mail={mail}
                    setMail={setMail}
                    password={password}
                    setPassword={setPassword}
                />
                <LoginPageFooter isFormValid = {isFormValid} handleLogin = {handleLogin}/>
            </AuthBox>
        </>
    );
}

const mapActionstoProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}


export default connect(null, mapActionstoProps)(LoginPage);