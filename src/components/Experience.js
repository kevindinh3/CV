import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            position: '',
            start: '',
            end: '',
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
            <form className = "Experience" onSubmit = {this.handleSubmit} >
                <label> Company: </label>
                    <input
                        name = 'company'
                        type = 'text'
                        onChange = {this.handleChange} />
                <label> Position: </label>
                    <input
                        name = 'position'
                        type = 'text'
                        onChange = {this.handleChange} />
                <label> Start: </label>
                    <input
                        name = 'start'
                        type = 'date'
                        onChange = {this.handleChange} />
                <label> End: </label>
                    <input
                        name = 'end'
                        type = 'date'
                        onChange = {this.handleChange} />
                <button type = 'submit'> Save </button>
            </form>
        )
    }
}


export default Experience