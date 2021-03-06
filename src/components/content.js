import React from 'react';
import { Route } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import About from './content_pages/about';
import Projects from './content_pages/projects';
import Resume from './content_pages/resume';
import Posts from './content_pages/posts';

const Content = ({selectedLabel}) => {
    return (
        <div className="content-container">
			<Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
				<h1 className="section-header">{selectedLabel}</h1>
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/resume" component={Resume} />
				<Route path="/posts" component={Posts} />
			</Scrollbars>
       </div>
    );
};

export default Content;
