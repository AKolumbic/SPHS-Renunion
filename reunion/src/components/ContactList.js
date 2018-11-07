import React, { Component } from 'react';
import axios from'axios';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            contacts: []
        }
    }

    componentDidMount() {
        console.log("here")
        axios.get('http://localhost:5555/info')
        .then(res => {
            this.setState({ contacts: res.data })
            console.log(this.state.contacts);
        })
        .catch(err => {
          console.log(err);
        })
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addToList = () => {
        const contactInfo = {
            name: this.state.name,
            email: this.state.email,
        }
        console.log("here")
        console.log(contactInfo)
        axios.post('http://localhost:5555/info', contactInfo)
        .then(res => this.setState({ 
            name: '',
            email: ''
        }))
        .catch(err => {
            console.log(err);
          })
    }

    render() { 
        return ( 
            <div>
                <form>
                    <input type="text" onChange={this.handleInput} name="name" value={this.state.name} placeholder="NAME"/>
                    <input type="text" onChange={this.handleInput} name="email" value={this.state.email} placeholder="EMAIL"/>
                    <button onClick={this.addToList}>Submit</button>
                </form>
                <div>
                    {this.state.contacts.map(contact => {
                        return (
                        <div key="contact._id">
                            <div>{contact.name}</div>
                            <div>{contact.email}</div>
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ContactList;