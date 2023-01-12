import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            email: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState((prev) => {
            return{...prev, [name]: value}
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // print this on new page
    }
    
    render() {
        return (
            <form className = "Contact" onSubmit = {this.handleSubmit} >
                <label> Name: </label>
                    <input
                        name = 'name'
                        type = 'text'
                        onChange = {this.handleChange} />
                <label> Address: </label>
                    <input
                        name = 'address'
                        type = 'text'
                        onChange = {this.handleChange} />
                <label> Phone: </label>
                    <input
                        name = 'phone'
                        type = 'number'
                        onChange = {this.handleChange} />
                <label> Email: </label>
                    <input
                        name = 'email'
                        type = 'email'
                        onChange = {this.handleChange} />
                <button type = 'submit'> Save </button>
            </form>
        )
    }
}


export default Contact