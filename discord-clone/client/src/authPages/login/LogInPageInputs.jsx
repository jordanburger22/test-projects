import { useState } from "react";

import InputWithLabels from "../../shared/components/InputWithLabel";



function LoginPageInputs({mail, setMail, password, setPassword}) {
    return ( 
        <>
            <InputWithLabels 
                value={mail}
                setValue = {setMail}
                type="text"
                label="Email"
                placeholder="Enter Email Here"
            />
            <InputWithLabels 
                value={password}
                setValue = {setPassword}
                type="password"
                label="Password"
                placeholder="Enter Password Here"
            />
        </>
     );
}

export default LoginPageInputs;