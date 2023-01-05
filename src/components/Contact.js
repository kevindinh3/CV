import React, {useState} from 'react';

const Contact = () => {
    const [details, setDetails] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDetails((prev) => {
            return{...prev, [name]: value}
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // print this on new page
        console.log(details);
    }

    return (
        <form className = "Contact" onSubmit = {handleSubmit} >
            <label> Name: </label>
                <input
                    name = 'name'
                    type = 'text'
                    onChange = {handleChange} />
            <label> Phone: </label>
                <input
                    name = 'phone'
                    type = 'number'
                    onChange = {handleChange} />
            <label> Email: </label>
                <input
                    name = 'email'
                    type = 'email'
                    onChange = {handleChange} />
            <button type = 'submit'> Submit </button>
        </form>
    )
}


export default Contact