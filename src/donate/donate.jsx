import React, { Component } from 'react';
import { Jumbotron, Button, Progress, InputGroup, Input, Tooltip, Alert } from 'reactstrap';

import './donate.css';

export default class Donate extends Component {
    constructor() {
        super();
        this.state = {
            donateSum : 134,
            tooltipOpen: false,
            donatorsCount : 1,
            successAlertIsShow : false,
            errorAlertIsShow : false
        };
    };

    toggle = () => {
        this.setState({tooltipOpen: !this.state.tooltipOpen});
    };

    donate = () => {
        let donatedValue = +(document.getElementById('donate-input').value);
        let sum =  donatedValue + this.state.donateSum;

        //if donated value < 0 alert error message
        if(donatedValue<0){
            this.setState({
                errorAlertIsShow: true
            });
            setTimeout(()=> this.setState({errorAlertIsShow : false}), 2000)
            return;
        }
        //if donated value > 1000 alert success message and set sum value to 0
        //else - setState with new donateSum
        if(sum>1000){
            sum = 0;
            this.setState({
                donateSum: sum,
                donatorsCount: this.state.donatorsCount + 1,
                successAlertIsShow : true
            });
            setTimeout(()=> this.setState({successAlertIsShow : false}), 2000)
        }else {
            this.setState({
                donateSum: sum,
                donatorsCount: this.state.donatorsCount + 1
            })
        }
    };

    render() {
        return (
            <section class-name="donate">
                <main className='donate-container'>
                    <Alert color="success" isOpen={this.state.successAlertIsShow}>Thanks! The sum is over 1k. Lets donate again! </Alert>
                    <Alert color="danger" isOpen={this.state.errorAlertIsShow}>You can't donate a negative value! </Alert>
                    <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="sumProgress" toggle={this.toggle}>${1000 - this.state.donateSum} still needed for this project!</Tooltip>

                    <Progress color="warning" id='sumProgress' value={this.state.donateSum/1000 * 100} />
                    <Jumbotron>
                        <h4><span className='orange-text'>Only 3 days left</span> to found this project!</h4>
                        <p className="lead">Join the {this.state.donatorsCount} other who have already supported this project. Every dollar helps.</p>
                        <hr className="my-2" />
                        <div className="lead-footer">
                            <InputGroup>
                                <Input placeholder="$" id='donate-input' type="number" step="1" />
                            </InputGroup>
                            <Button color="success" onClick={this.donate}>Give Now</Button>
                        </div>
                    </Jumbotron>
                </main>
            </section>
        )
    }
}