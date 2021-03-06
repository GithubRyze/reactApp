import React from 'react';

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.state = {
            noteName: '',
            noteDescription: ''
        }
    }

    handleTextareaChange(event){
        this.setState({
            noteDescription: event.target.value
        });
    }

    handleInputChange(event){
        this.setState({
            noteName: event.target.value
        })
    }



    handleCancel(event) {
        this.setState({
            noteName: '',
            noteDescription: ''
        });
        event.preventDefault();
    }

    handleSave(event) { 
        if(this.props.onSubmit){
            if(!this.state.noteName || !this.state.noteDescription){
                alert('Notename and NoteDescription cannot be empty');
                event.preventDefault();
                return;
            }
            this.props.onSubmit(this.state.noteName,this.state.noteDescription);
        }      
        event.preventDefault();
    }

    render() {
        return (
            <form className="div-form">
                <div><span>Notes information</span></div>
                <div>
                    <input type="text" placeholder="Note Name" className="note-name-input" 
                    value ={this.state.noteName} onChange = {this.handleInputChange} />
                </div>
                <div>
                    <textarea type="text" placeholder="Note informations" className="note-information-input" 
                    value = {this.state.noteDescription} onChange={this.handleTextareaChange} />
                </div>
                <div>
                    <button className="submit-btn" onClick={this.handleSave}>Save</button>
                    <button className="cancel-btn" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>
        )

    }
}