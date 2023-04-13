import {useState} from "react"

const Login = () =>{
    const [message, setMessage] = useState('Hello there!')
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Login successfully!')}>Login</button>
        </div>
    )
}

export default Login