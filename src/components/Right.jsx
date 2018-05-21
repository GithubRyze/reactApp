import React from 'react';
import Notes from './Notes';
import Input from '../components/Input';
import UserInfo from '../components/UserInfo';
import PageIndicate from '../components/PageIndicate';
export default class Right extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            totalNote: 0,
            refresh: false,
            offset: 0
        };
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
        this.noteOnSubmit = this.noteOnSubmit.bind(this);
        this.postNote = this.postNote.bind(this);
        this.refreshNote = this.refreshNote.bind(this);
        this.selectNotePage = this.selectNotePage.bind(this);
    }

    componentDidUpdate(preProps, preState) {
        if (this.state.refresh)
            this.refreshNote(0);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user.id !== nextProps.user.id) {
            this.setState({
                refresh: true
            });
        }
    }

    selectNotePage(page) {
        this.refreshNote(page);

    }

    handleDeleteNote(note) {
        const url = 'http://localhost:8001/deleteNote?id=' + note.id;
        const req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        req.onreadystatechange = () => {
            const data = JSON.parse(req.response);
            if (data.code === 200) {
                this.refreshNote(this.state.offset);
            }
        };
        try {
            req.send();
        } catch (err) {
            alert('Delete note failed, Server is offline');
        }
    }

    refreshNote(offset) {
        const url = 'http://localhost:8001/queryNotes?user_id=' + this.props.user.id + '&offset=' + offset;
        const req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        req.onreadystatechange = () => {
            const data = JSON.parse(req.response);
            let totalNote = data.total;
            let list = this.state.notes;
            list = data.rows;
            this.setState({
                notes: list,
                totalNote: totalNote,
                refresh: false,
                offset: offset
            });
        };
        try {
            req.send();
        } catch (err) {
            alert('Refresh note failed, Server is offline');
        }
    }

    postNote(noteName, noteDescription) {//http://localhost:8001/addNote
        const url = 'http://localhost:8001/addNote';
        const req = new XMLHttpRequest();
        req.open('POST', url, false);
        req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        req.onreadystatechange = () => {
            const data = JSON.parse(req.response);
            let list = this.state.notes;
            let total = this.state.totalNote + 1;
            if (list.length > 1) {
                list.pop();
            }
            list.push(data.data);
            list.reverse();
            this.setState({
                notes: list,
                totalNote: total
            });
        };
        const note = {
            user_id: this.props.user.id,
            noteName: noteName,
            noteDescription: noteDescription
        }
        try {
            req.send(JSON.stringify(note));
        } catch (err) {
            alert('Add note failed, Server is offline');
        }

    }

    componentDidMount() {


    }

    noteOnSubmit(noteName, noteDescription) {
        this.postNote(noteName, noteDescription);
    }

    render() {
        return (
            <div className="div-right">
                <UserInfo user={this.props.user} />
                <Input onSubmit={this.noteOnSubmit} />
                {
                    this.state.notes.map((note, i) => {
                        return (
                            <Notes key={i} note={note} deleteNote={this.handleDeleteNote} />
                        );
                    })
                }
                <PageIndicate pages={this.state.totalNote} selectNotePage={this.selectNotePage} offset={this.state.offset} />
            </div>
        );
    }
}