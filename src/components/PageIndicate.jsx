import React from 'react';
export default class PageIndicate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: 0,
        }
    }


    handleClick(page) {
        if (this.props.selectNotePage) {
            this.props.selectNotePage(page);
        }
    }

    componentWillReceiveProps(newProps) {
        let size = newProps.pages;
        if (size % 2 === 0) {
            size = size / 2;
        } else {
            size = (size + 1) / 2;
        }
        this.setState({
            pages: size
        });
    }

    render() {
        const list = (pages) => {
            let res = [];
            for (let page = 0; page < pages; page++) {
                let color = { backgroundColor: '#ffffff' };
                if (page === this.props.offset) {
                    color.backgroundColor = '#19C3CF';
                }
                res.push(<a style={color} key={page} onClick={this.handleClick.bind(this, page)} >{page + 1}</a>)
            }
            return res;
        }
        return (
            <div className="div-page-indicate">
                <span className="page-indicate-span">&lt;</span>
                {
                    list(this.state.pages)
                }
                <span className="page-indicate-span" >&gt;</span>
            </div>
        );
    }
} 