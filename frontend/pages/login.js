import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'


const Login = () => {

    const router = useRouter();

    const [data, setdata] = useState({
        email: "", password: ""
    })

    const handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setdata({ ...data, [name]: value });
    }

    const submit = async (e) => {
        e.preventDefault();

        const { email, password } = data; // Destructure formData
        const body = JSON.stringify({ email, password }); // Serialize only necessary properties

        try {
            const response = await fetch('http://localhost:8000/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            })

            const res = await response.json();

            if (res.success) {
                router.push('/');
                console.log('User signed in successfully');
                window.alert('Login successfull');
                localStorage.setItem("authToken", res.token);
                console.log("Token:", localStorage.getItem("authToken"));
            } else {
                console.log('Invalid credentials');
                window.alert('Invalid credentials');
            }

        } catch (error) {
            console.error('Error:', error);
            window.alert('An error occurred');
        }

    }

    return (

        <div className="container">

            <h4 style={{ textAlign: "center", paddingTop: "4%", fontSize: "xx-large" }}>Login Here</h4>

            <form className="col s12" style={{ padding: '2% 30%' }} onSubmit={submit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" name="email" value={data.email} onChange={handleinput} />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" name="password" value={data.password} onChange={handleinput} />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className='row'>
                    <span>Not Signup? Signup
                        <Link href={'/signup'}> Here</Link>
                    </span>
                    <button className="btn waves-effect waves-light" style={{ float: "right" }} type="submit">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>

        </div>

    )

}

export default Login
