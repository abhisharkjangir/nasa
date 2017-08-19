import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursesPage';
import ApodPage from './components/apod/ApodPage';
import EpicPage from './components/epic/EpicPage';
import EarthPage from './components/earth/EarthPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="apod" component={ApodPage}/>
    <Route path="epic" component={EpicPage}/>
    <Route path="earth" component={EarthPage}/>
    <Route path="courses" component={CoursePage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
  </Route>
);
