import { useState } from "react"

function Login(){
    const [username,setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [error,setError]=useState('');
    async function handleSubmit(e){
        e.preventDefault();
        setError('')
        try{
            const res = await fetch('http://localhost:8080/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({username,password})
            });
            const text = await res.text();
            console.log('status:', res.status, '| body:', text);

            if (!res.ok) { setError('Invalid username or password'); return; }
            console.log('token response:', JSON.parse(text));
        }catch (err) {
            setError('Could not reach the server');
            console.error(err);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input value={username} onChange={(e)=> setUsername(e.target.value)}
                placeholder="Username"/>
                <input value={password} type="password" onChange={(e)=> setPassword(e.target.value)}
                placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;