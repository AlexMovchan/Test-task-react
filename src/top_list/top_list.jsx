import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Icon} from 'react-fa'
import myFetch from '../myFetch';
import './top_list.css';

//List of songs component which repeated from JSON data
let SongsList = (props) => (
    <section>
        <hr/>
        <h2 className='text-center'>{props.title}</h2>
        <hr/>
        <main className="card-container">
            {props.data.map((item) => (
                <Card key={item.id.attributes['im:id']}>
                    <CardImg top width="170" src={item['im:image'][2].label} />
                    <CardBody>
                        <CardTitle>{item.title.label}</CardTitle>
                        <footer className='card-container_footer'>
                            <Button color="success">Buy {item['im:price'].label}</Button>
                            <Icon name="heart" onClick={props.click} />
                        </footer>
                    </CardBody>
                </Card>
                )
            )}
        </main>
    </section>
);

//Animation component before songs list loaded.
let LoadingAnimation = () => (
    <section className='loading-container'>
        <Icon spin name="spinner" size='5x'/>
        <h6>Loading songs, wait please !</h6>
    </section>
);

export default class TopList extends Component {
    constructor() {
        super();
        this.state = {
            data : [],
            contentIsLoaded : false,
            title : ''
        };
    }
    //get music list fetch request on routing state change
    componentDidMount() {
        this.getTopMusic()
    }
    //get music list fetch request
    getTopMusic = () => {
        myFetch()
            .then((data) => {
                console.log(data);
                this.setState({data : data.feed.entry, contentIsLoaded: true, title: data.feed.title.label});
            })
    };
    //add 'red' class to clicked heard-icon
    toggleLike = (e) => {
        e.currentTarget.classList.add('red');
    };

    render() {
        return (
            this.state.contentIsLoaded ? <SongsList data={this.state.data} title={this.state.title} click={this.toggleLike}/> : <LoadingAnimation/>
        )
    }
}

