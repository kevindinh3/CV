import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: '',
            title: '',
            date: ''
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
            <form className = "Education" onSubmit = {this.handleSubmit} >
                <label> School: </label>
                    <input
                        name = 'school'
                        type = 'text'
                        onChange = {this.handleChange} />
                <label> Title of Study: </label>
                    <input
                        name = 'title'
                        type = 'text'
                        onChange = {this.handleChange} />
                <label> Graduation Date: </label>
                    <input
                        name = 'date'
                        type = 'date'
                        onChange = {this.handleChange} />
                <button type = 'submit'> Save </button>
            </form>
        )
    }
}


export default Education