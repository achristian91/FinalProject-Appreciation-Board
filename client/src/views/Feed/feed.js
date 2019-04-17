import React, { Component } from 'react';
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import '../Feed/feed.css';
import 'react-activity-feed/dist/index.css';
/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from "../../components/AuthHelperMethods";
import Header from "../../assets/Material/Header/Header";
import HeaderLinks from "../../assets/Material/Header/HeaderLinks.jsx";
import Button from "../../assets/Material/CustomButtons/Button";

//Our higher order component
import withAuth from '../../components/withAuth';

class Feed extends React.Component {

    state = {
        username: ''
    }
    /* Create a new instance of the 'AuthHelperMethods' compoenent*/
    Auth = new AuthHelperMethods();

    _handleLogout = () => {
        this.Auth.logout()
        this.props.history.replace('/login');
    }

    //Render the protected component
    render() {
        let name = null;
        if (this.props.confirm) {
            name = this.props.confirm.username;
        }
        const { classes, ...rest } = this.props;
        
        //let name = this.props.confirm.username;
        console.log("Rendering Feedjs!")
        return (
            <div>
            <Header
            color="transparent"
            brand="Job Board"
            leftLinks={<Button
                id="logoutbutton"
                color="transparent"
                onClick={this._handleLogout}
              >LOGOUT</Button>}
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />  
          <div class="container-fluid">
          <div class="col-sm-8">
            <StreamApp
                apiKey="jvfgs4nqqs5a"
                appId="47855"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.9TgxkuopmcQR2ZH2IRSF5nCq4eTZSHp-IOrRmZ6hz3Q"
            >
                <NotificationDropdown notify />
                <StatusUpdateForm
                    feedGroup="timeline"
                    userId="user-one" />
                <FlatFeed
                    options={{ reactions: { recent: true } }}
                    notify
                    Activity={(props) =>
                        <Activity {...props}
                            Footer={() => (
                                <div style={{ padding: '8px 16px' }}>
                                    <LikeButton {...props} />
                                    <CommentField
                                        activity={props.activity}
                                        onAddReaction={props.onAddReaction} />
                                    <CommentList activityId={props.activity.id} />
                                </div>
                            )}
                        />
                    }
                />
            </StreamApp>
            </div>
            </div>
            </div>
        );
    }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.

export default withAuth(Feed);

