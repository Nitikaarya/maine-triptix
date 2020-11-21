import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Pricing.css';
import CheckIcon from '@material-ui/icons/Check';

function Pricing() {
    return (
        <div className="container">
            <h2 className="title">Pricing Table</h2> 
            <div className="row"> 
                <div className="col-md-3 col-sm-4">
                    <div className="card-design">
                    <Card className="card-design2">
                    <Card.Body>
                    <Card.Title style={{textAlign: "center"}}>BASIC</Card.Title>
                    <Card.Subtitle className="mb-4 ">$2/week</Card.Subtitle>
                    <Card.Text className="block">Unlimited Trip Tickets
                    <CheckIcon className="icon-style"/>
                    </Card.Text>
                    <Card.Text className="block">PDF Storage of all Trip Tickets
                    <CheckIcon className="icon-style1"/>
                    </Card.Text>
                    <Card.Text className="block">Password Protected Access to PDFs
                    <CheckIcon className="icon-style2"/>
                    </Card.Text>
                    <Button className="btn" >sign up now</Button>  
                    </Card.Body> 
                    </Card>
                    </div>
            </div>
                <div className="col-md-3 col-sm-4">
                    <div className="card-design">
                    <Card  className="card2" >
                    <div className="tag-design active">
                        <span className="tag">top sale</span>
                    </div>
                    <Card.Body>
                    <Card.Title style={{textAlign: "center"}}>STANDARD</Card.Title>
                    <Card.Subtitle className="mb-4" >$5 / MONTH</Card.Subtitle>
                    <Card.Text className="block">Unlimited Trip Tickets
                    <CheckIcon className="icon-style"/>
                    </Card.Text>
                    <Card.Text className="block">PDF Storage of all Trip Tickets
                    <CheckIcon className="icon-style1"/>
                    </Card.Text>
                    <Card.Text className="block">Password Protected Access to PDFs
                    <CheckIcon className="icon-style2"/>
                    </Card.Text>
                    <Button className="btn1" >sign up now</Button> 
                    </Card.Body> 
                    </Card>
                    {/* </div> */}
                    </div>
                </div>
                <div className="col-md-3 col-sm-4">
                    <div className="card-design">
                    <Card style={{marginLeft: "65%"}} className="card-design2">
                    <Card.Body>
                    <Card.Title style={{ textAlign: "center"}}>PREMIUM</Card.Title>
                    <Card.Subtitle className="mb-4">$50 / YEAR</Card.Subtitle>
                    <Card.Text className="block">Unlimited Trip Tickets
                    <CheckIcon className="icon-style"/>
                    </Card.Text>
                    <Card.Text className="block">PDF Storage of all Trip Tickets
                    <CheckIcon className="icon-style1"/>
                    </Card.Text>
                    <Card.Text className="block">Password Protected Access to PDFs
                    <CheckIcon className="icon-style2"/>
                    </Card.Text>
                    <Button className="btn" >sign up now</Button> 
                    </Card.Body> 
                    </Card>
                    </div>
                </div>
            </div>
        </div>    
    )
}
export default Pricing