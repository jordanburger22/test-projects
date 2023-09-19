import InputWithLabels from "../../shared/components/InputWithLabel";


function RegisterPageInputs(props){
    const {mail, setMail, username, setUsername, password, setPassword} = props;

    return (
        <>
            <InputWithLabels 
                value={mail}
                setValue={setMail}
                label = "E-mail"
                type="email"
                placeholder = "Enter your e-mail"
            />   
            <InputWithLabels 
                value={username}
                setValue={setUsername}
                label = "UserName"
                type="text"
                placeholder = "Enter your user name"
            />   
            <InputWithLabels 
                value={password}
                setValue={setPassword}
                label = "Password"
                type="password"
                placeholder = "Enter your password"
            />   
        </>
    )
}

export default RegisterPageInputs;