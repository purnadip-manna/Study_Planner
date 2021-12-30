import { Component } from 'react';
class Forms extends Component {
    render() { 
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" id="formModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create new Note</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label for="noteTitle">Note Title</label>
                            <input type="text" className="form-control" id="noteTitle" required/>
                        </div>
                        <div className="form-group">
                            <label for="noteContent">Description</label>
                            <textarea className="form-control" id="noteContent" rows="3"></textarea>
                        </div>
                        <label for="notePriority">Set Priority</label>
                        <select class="form-control" id="notePriority">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save Note</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Forms;