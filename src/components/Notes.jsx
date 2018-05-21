import React from 'react';
export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
    }
    static defaultProps = {
        note: {
            name: 'noteName',
            noteDescription: 'note Description',
            creatTime: new Date()
        }
    }

    format = function formatDate(date) {
        const createTime = new Date(date);
        const duration = (+Date.now() - createTime.getTime()) / 1000;
        if (duration < 60) {
            return `${Math.round(Math.max(duration, 1))} SECONDS AGO`;
        } else if (duration > 60 && duration < 3600) {
            return `${Math.round(duration / 60)} MINUTES AGO`;
        } else if (duration > 3600 && duration < 24 * 3600) {
            return `${Math.round(duration / 3600)} HOURS AGO`;
        } else {
            return `${Math.round(duration / (24 * 3600))} DAYS AGO`;
        }
    }

    deleteNote(){
        if(this.props.deleteNote){
            this.props.deleteNote(this.props.note);
        }
    }

    render() {
        return (
            <div className="div-note">
                <div className="note-header">
                    <span className="note-span">Notes</span>
                    <button className="note-delete-btn" onClick = {this.deleteNote}/>
                </div>
                <div className="note-content">
                    <div><span>{this.props.note.notename}</span></div>
                    <div><p>{this.props.note.notedescription}</p></div>
                </div>
                <div>
                    <span className="span-time">{this.format(this.props.note.createdAt)}</span>
                </div>
            </div>
        );
    }
}