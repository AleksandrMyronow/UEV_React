import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passport_id: '',
            name: '',
            surname: '',
            id_code: '',
            passport_pass: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handlePassIdChange = this.handlePassIdChange.bind(this);
        this.handlePassportPassChange = this.handlePassportPassChange.bind(this);
        this.handleIdCodeChange = this.handleIdCodeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePassIdChange(e) {
        this.setState({
            passport_id: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        })
    }

    handleIdCodeChange(e) {
        this.setState({
            id_code: e.target.value
        })
    }

    handlePassportPassChange(e) {
        this.setState({
            passport_pass: e.target.value
        })
    }

    handleSubmit(e) {
       e.preventDefault();
       console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-field">
                <div className="form-field-div"><input type="text" value={this.state.passport_id} onChange={this.handlePassIdChange} className="form-field-input"/> Password ID</div>
                <div className="form-field-div"><input type="text" value={this.state.name} onChange={this.handleNameChange} className="form-field-input"/> Name</div>
                <div className="form-field-div"><input type="text" value={this.state.surname} onChange={this.handleSurnameChange} className="form-field-input"/> Surname</div>
                <div className="form-field-div"><input type="text" value={this.state.id_code} onChange={this.handleIdCodeChange} className="form-field-input"/> Identification code</div>
                <div className="form-field-div"><input type="password" value={this.state.passport_pass} onChange={this.handlePassportPassChange} className="form-field-input"/> Passport password</div>
                <button className="form-field-btn">Ввойти</button>
                <div className="form-field-div"><Link to="/">На главную</Link></div>
            </form>
        )
    }
}

export default Form;