import React, { Component } from 'react';
import axios from 'axios';

class Uploads extends Component {
    state = {
        selectedFile: null
    }

    selectedFileHandler = event => {
        this.setState = ({
            selectedFile: this.target.files[0]
        })
    }
    uploadHandler = () => {
        console.log("Hello!")
        axios.post('')
    }

    render() { 
        return ( 
            <div>
                <input type="file" onChange={this.selectedFileHandler} />
                <button onClick={this.uploadHandler} />
            </div>
        );
    }
}
 
export default Uploads;