import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'

const Signup = () => {

    const router = useRouter();

    const [data, setdata] = useState({
        name: '', email: '', phone: '', address: '', password: ''
    })

    const handleinput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setdata({ ...data, [name]: value });

    }

    const submit = async (e) => {
        e.preventDefault();

        const { name, email, phone, address, password } = data;
        const body = JSON.stringify({ name, email, phone, address, password });

        try {
            const response = await fetch('http://localhost:8000/userregister', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            })

            const res = await response.json();

            if (res.success) {
                router.push('/login');
                console.log('User registered successfully');
                window.alert('Registration successfull');
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

            <h4 style={{ textAlign: "center", paddingTop: "4%", fontSize: "xx-large" }}>Signup Here</h4>

            <form method='post' className="col s12" style={{ padding: "2% 20%" }} onSubmit={submit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" name='name' value={data.name} onChange={handleinput} className="validate" />
                        <label htmlFor="first_name">Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" type="email" name='email' value={data.email} onChange={handleinput} className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="contact" type="number" name='phone' value={data.phone} onChange={handleinput} className="validate" />
                        <label htmlFor="contact">Contact</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="password" type="password" name='password' value={data.password} onChange={handleinput} className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" name='address' value={data.address} onChange={handleinput} data-length="120"></textarea>
                        <label htmlFor="textarea2">Address</label>
                    </div>
                </div>
                <div className='row'>
                    <span>Already Signup? Signin
                        <Link href={'/login'}> Here</Link>
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

export default Signup