import { Component } from 'react';
import Note from './note';
const config = require("../config.json");

class NoteArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            notes: []
          };
    }
    componentDidMount(){
        let url = config.server_url;
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    notes: result
                });
            },

            (errors) => {
                this.setState({
                    isLoaded: true,
                    error : errors
                });
            }
        );
    }

    render() {
        const { error, isLoaded, notes } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading Notes...</div>;
        } else {
            return (
              <div className="row">
                    {notes.map(note => (
                        <div className="col-sm-6 wrapper" key={note._id}>
                            <Note
                                pid={note._id}
                                title={note.title}
                                content={note.content}
                                date={note.date}
                                priority={note.priority}
                            />
                        </div>
                    ))}
                    
              </div>
            );
        }
    }
}
 
export default NoteArea;