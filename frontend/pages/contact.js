import React, { useState } from 'react'
import { useRouter } from "next/router";


const Contact = () => {

    const router = useRouter();

    const [data, setdata] = useState({
        name: '', email: '', phone: '', message: ''
    })


    const handle = (e) => {
        const name = e.target.name
        const value = e.target.value

        setdata({ ...data, [name]: value });
    }


    const submit = async (e) => {
        e.preventDefault()

        const { name, email, phone, message } = data; // Destructure formData
        const body = JSON.stringify({ name, email, phone, message }); // Serialize only necessary properties

        try {

            const response = await fetch('http://localhost:8000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            })

            const res = await response.json();
            setdata(res);

            if (res.success) {
                router.push('/');
                console.log('User message received successfully');
                window.alert('User message received successfully');
            } else {
                console.log('Invalid credentials');
                window.alert('Invalid credentials');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }


    }


    return (

        <div className="container">

            <h4 style={{ textAlign: "center", paddingTop: "4%", fontSize: "xx-large" }}>Any Queries? Contact Us</h4>

            <form className="col s12" style={{ padding: "2% 20%" }} onSubmit={submit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="name" type="text" name='name' value={data.name} onChange={handle} className="validate" required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="contact" type="number" name='phone' value={data.phone} onChange={handle} className="validate" required />
                        <label htmlFor="contact">Contact</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" name='email' value={data.email} onChange={handle} className="validate" required />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" name='message' value={data.message} onChange={handle} data-length="120" required ></textarea>
                        <label htmlFor="textarea2">Textarea</label>
                    </div>
                    <button className="btn waves-effect waves-light" style={{ float: "right" }} type="submit">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>

        </div>

    )

}


export default Contact
