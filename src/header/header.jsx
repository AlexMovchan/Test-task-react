import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

let HeadList = (props) => {
    return (
        <ul className='head-list'>
            {props.data.map((item) => (
                <li key={ item.id } onClick={ props.click.bind(this) }>
                    <Link to={ item.href }>{ item.name }</Link>
                </li>
                )
            )}
        </ul>
    )
};

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            items:[
                {name: 'TOP list', id: 1, href: '/top_list'},
                {name:'Donate', id: 2, href: '/donate'},
            ]
        };
    };

    showActive (e) {
        //remove class from all li elem's
        [...document.getElementsByTagName('li')].forEach((item) => item.className = '');
        //add class to current li
        e.target.parentElement.className += 'active';
    }
    render(){
        return (
            <header>
                <HeadList data={ this.state.items } click={ this.showActive.bind(this) }/>
            </header>
        )
    }
}