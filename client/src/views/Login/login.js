import React, { Component } from "react";

/* We want to import our 'AuthHelperMethods' component in order to send a login request */
import AuthHelperMethods from '../../components/AuthHelperMethods';
import { Link } from 'react-router-dom';

// import '../Login/login.css';

import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import Header from "../../assets/Material/Header/Header.jsx";
import HeaderLinks from "../../assets/Material/Header/HeaderLinks.jsx";
import Footer from "../../assets/Material/Footer/Footer.jsx";
import GridContainer from "../../assets/Material/Grid/GridContainer.jsx";
import GridItem from "../../assets/Material/Grid/GridItem.jsx";
import Card from "../../assets/Material/Card/Card.jsx";
import CardBody from "../../assets/Material/Card/CardBody.jsx";
import CardHeader from "../../assets/Material/Card/CardHeader.jsx";
import CardFooter from "../../assets/Material/Card/CardFooter.jsx";


import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage";


import image from "../../assets/img/bg7.jpg";

import '../Login/login.css';



class Login extends Component {

    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthHelperMethods();

    state = {
        username: "",
        password: ""
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {

        e.preventDefault();
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.replace('/portal');
            })
            .catch(err => {
                alert(err);
            })
    }

    componentWillMount() {
        /* Here is a great place to redirect someone who is already logged in to the protected route */
        if (this.Auth.loggedIn())
            this.props.history.replace('/portal');
    }

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            function () {
                this.setState({ cardAnimaton: "" });
            }.bind(this),
            700
        );
    }

    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden"
        };
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <React.Fragment>
                <div>
                    <Header
                        absolute
                        color="transparent"
                        brand="Job Board"
                        rightLinks={<HeaderLinks />}
                        {...rest}
                    />
                    <div
                        className={classes.pageHeader}
                        style={{
                            backgroundImage: "url(" + image + ")",
                            backgroundSize: "cover",
                            backgroundPosition: "top center"
                        }}
                    >
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={4}>
                                    <Card className={classes[this.state.cardAnimaton]}>
                                        <form className={classes.form}>
                                            <CardHeader color="primary" className={classes.cardHeader}>
                                                <h4>Login</h4>
                                            </CardHeader>
                                            {/* <p className={classes.divider}>Login to the Portal</p> */}
                                            <CardBody>
                                                <div className="box-form">
                                                    <i class="fa fa-user icon"></i>
                                                    <input
                                                        placeholder="Username"
                                                        name="username"
                                                        type="text"
                                                        onChange={this._handleChange}
                                                    />
                                                    <i class="fa fa-key icon"></i>
                                                    <input
                                                        placeholder="Password"
                                                        name="password"
                                                        type="password"
                                                        onChange={this._handleChange}
                                                    />
                                                </div>
                                            </CardBody>
                                            <CardFooter className={classes.cardFooter}>
                                                <button size="lg" color="danger" className="form-submit" onClick={this.handleFormSubmit}>
                                                    Login
                          </button>
                                            </CardFooter>
                                        </form>
                                        <Link className="link" to="/signup">Don't have an account? <span className="link-signup">Signup</span></Link>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(loginPageStyle)(Login);
