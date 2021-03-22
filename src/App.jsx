import React from "react";
import Header from "./components/header/header";
import Navigation from "./components/navigation/navigation";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

function App(props) {
    const {state} = props;
    return (
        <BrowserRouter>
            <div id="#wrapper">
                <Navigation navigations={state.sidebar.navigations}/>
                <Header/>
                <div className="main_content">
                    <Route exact path="/" render={()=><Profile posts={state.posts} friends={state.friends} />}/>
                    <Route exact path="/dialogs/:id" render={({match}) => {
                        const {id} = match.params;
                        return <Dialogs state={state} id={id}/>}}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/music" component={Music}/>
                    <Route exact path="/settings" component ={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
