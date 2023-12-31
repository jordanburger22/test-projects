import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../stores/actions/authActions";
import { useNavigate } from "react-router-dom";


function RegisterPage({register}) {

    const history = useNavigate();
    const [mail, setMail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isFormValid, setIsFormValid] = useState(false);

    function handleRegister(){
        const userDetails = {
            mail,
            username,
            password
        }
        register(userDetails, history);
    }

    useEffect(() => {
        setIsFormValid(validateRegisterForm({mail, username, password}));
    }, [mail, username, password, setIsFormValid]);

    return (
        <>
            <AuthBox>
                <Typography variant="h5" sx={{ color: "white" }}>
                    Create an account
                </Typography>
                <RegisterPageInputs
                    mail={mail}
                    setMail={setMail}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
                <RegisterPageFooter
                    handleRegister={handleRegister}
                    isFormValid={isFormValid}
                />
            </AuthBox>
        </>
    );
}

const mapActionstoProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionstoProps)(RegisterPage);