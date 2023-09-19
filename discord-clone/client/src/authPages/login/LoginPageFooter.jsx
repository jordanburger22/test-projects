import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

function getFormNotValidMessage(){
    return "Enter a valid email address, Password should containt 6-12 characters.";
}

function getFormValidMessage(){
    return "Press to Log in";
}


function LoginPageFooter({ handleLogin, isFormValid }) {

    const history = useNavigate();

    function handlePushToRegisterPage() {
        history('/register');
    }

    return (
        <>
        <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
            <div>

                <CustomPrimaryButton label="Login" additionalStyles={{ marginTop: "30px" }} disabled={!isFormValid} onClick={handleLogin} />
            </div>
        </Tooltip>
            <RedirectInfo
                text="Need an account? "
                redirectText="Create an account"
                additionalStyles={{ marginTop: "5px" }}
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    );
}

export default LoginPageFooter;