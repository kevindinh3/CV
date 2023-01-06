// import './styles/App.css'
import React, { useState } from 'react'

const Experience = () => {
    const [details, setDetails] = useState({
        company: '',
        position: '',
        start: '',
        end: '',
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
        <form onSubmit = {handleSubmit} >
            <label> Company: </label>
                <input
                    name = 'company'
                    type = 'text'
                    onChange = {handleChange} />
            <label> Position Title: </label>
                <input
                    name = 'position'
                    type = 'text'
                    onChange = {handleChange} />
            <label> Start Date: </label>
                <input
                    name = 'start'
                    type = 'date'
                    onChange = {handleChange} />
            <label> End Date: </label>
                <input
                    name = 'end'
                    type = 'date'
                    onChange = {handleChange} />
            <button type = 'submit'> Save </button>
        </form>
    )
}


export default Experience