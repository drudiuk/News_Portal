import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './styles.scss';
import Header from 'components/Header';
import MainPage, {routeMain as routeMainPage} from 'pages/MainPage';
import Contacts, {routeMain as routeContacts} from 'pages/Contacts';
import NewsListPage, {routeMain as routeNewsList} from 'pages/NewsListPage';
import NewsDetail, {routeMain as routeNewsDetail} from 'pages/NewsDetail';
import Footer from 'components/Footer';

const AppContent = () => {
    return (
        <div className='mainWrapper'>
            <Header/>
            <main>
                <Switch>
                    <Route exact path={routeMainPage()} component={MainPage}/>
                    <Route exact path={routeNewsList()} component={NewsListPage}/>
                    <Route exact path={routeContacts()} component={Contacts}/>
                    <Route exact path={routeNewsDetail()} component={NewsDetail}/>
                    <Redirect to={{pathname: routeMainPage()}}/>
                </Switch>
            </main>
            <Footer/>
        </div>
    )
}

export default AppContent;