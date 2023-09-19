import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

function getFormNotValidMessage() {
    return "Username should containt 3- 12 characters.\n Password should contain 6-12 characters. \n Correct email address is required.";
}

function getFormValidMessage() {
    return "Press to Log in";
}


function RegisterPageFooter({ handleRegister, isFormValid }) {

    const history = useNavigate();

    function handlePushToLoginPage() {
        history('/login');
    }

    return (
        <>

            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                <div>
                    <CustomPrimaryButton
                        label="Register"
                        additionalStyles={{ marginTop: "30px" }}
                        disabled={!isFormValid}
                        onClick={handleRegister} />
                </div>
            </Tooltip>

            <RedirectInfo
                text=" "
                redirectText="Already have an account?"
                additionalStyles={{ marginTop: "5px" }}
                redirectHandler={handlePushToLoginPage}
            />

        </>

    );
}

export default RegisterPageFooter;