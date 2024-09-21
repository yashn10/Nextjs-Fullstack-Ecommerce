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
            <h4 className="center-align" style={{ paddingTop: "4%", fontSize: "2rem" }}>Login Here</h4>

            <form className="col s12" style={{ padding: '2% 30%' }} onSubmit={submit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" name="email" value={data.email} onChange={handleinput} required />
                        <label htmlFor="email">Email</label>
                        <span className="helper-text" data-error="Please enter a valid email" data-success=""></span>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" name="password" value={data.password} onChange={handleinput} required />
                        <label htmlFor="password">Password</label>
                        <span className="helper-text" data-error="Password is required" data-success=""></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <span>Not Signed Up?
                            <Link href={'/signup'}> Signup Here</Link>
                        </span>
                    </div>
                    <div className="col s6 right-align">
                        <button className="btn waves-effect waves-light" type="submit">
                            Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default Login
