// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import '../style/Form.css';
//
// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: '',
//             email: ''
//         }
//         this.handleIdChange = this.handleIdChange.bind(this);
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleIdChange(e) {
//         this.setState({
//             id: e.target.value
//         })
//     }
//
//     handleEmailChange(e) {
//         this.setState({
//             email: e.target.value
//         })
//     }
//
//     handleSubmit(e) {
//         e.preventDefault();
//         console.log(this.state)
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className="formField">
//                 <input type="text" value={this.state.id} onChange={this.handleIdChange}/> id
//                 <input type="text" value={this.state.email} onChange={this.handleEmailChange}/> email
//                 <button>Save</button>
//                 <Link to="/">Home</Link>
//             </form>
//         )
//     }
// }
//
// export default Form;