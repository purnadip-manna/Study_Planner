import { Component } from 'react';
const config = require("../config.json");

class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: 1,
            noteTitle: "",
            noteContent: "",
            notePriority: "high",
            error: null,
            data: ""
        }
        this.setTitle = this.setTitle.bind(this);
        this.setContent = this.setContent.bind(this);
        this.setPriority = this.setPriority.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    setTitle(e){
        this.setState({noteTitle: e.target.value});
    }

    setContent(e){
        this.setState({noteContent: e.target.value});
    }

    setPriority(e){
        this.setState({notePriority: e.target.value});
    }

    saveData(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch(config.server_url+'/savedata', requestOptions)
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    data: result
                });
            },
            (errors) => {
                this.setState({
                    error : errors
                });
            }
        )
        .then(() => window.location.reload());        
    }
    render() { 
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" id="formModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create new Note {this.state.data}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="noteTitle">Note Title</label>
                            <input type="text" className="form-control" onChange={this.setTitle} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="noteContent">Description</label>
                            <textarea className="form-control" rows="3" onChange={this.setContent}></textarea>
                        </div>
                        <label htmlFor="notePriority">Set Priority</label>
                        <select className="form-control" onChange={this.setPriority}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.saveData}>Save Note</button>
                        <button type="button" className="btn btn-secondary" id='closeBtn' data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Forms;