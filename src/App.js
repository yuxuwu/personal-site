import React, { Component } from "react";
import { matchPath, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import Sidebar from "./components/sidebar";
import Content from "./components/content";

const LABELS = ["about", "projects", "resume", "posts"];

// TODO: consider removing code for labels
class App extends Component {
	static propTypes = {
		location: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		const onRootPath = (matchPath(this.props.location.pathname, { path: "/", exact: true }) != null)
		this.state = {
			selectedLabel: "about",
			labels: LABELS.map(label => { return label; }),
			sidebarActive: onRootPath
		}
	}

	render() {
		return (
			<div className="container">
				<Sidebar
					onLabelSelect={selectedLabel => { this.setState({ selectedLabel, sidebarActive: false }) }}
					labels={this.state.labels}
					isSidebarActive={this.state.sidebarActive}
				/>
				<Content
					isSidebarActive={this.state.sidebarActive}
				/>
			</div>
		);
	}
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;