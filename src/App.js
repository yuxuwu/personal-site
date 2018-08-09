import React, { Component } from "react";
import { matchPath, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import Sidebar from "./components/sidebar";
import Content from "./components/content";

// Sidebar labels, add to this to add a label. Might need to adjust SCSS
const LABELS = ["about", "projects", "résumé", "posts"];

class App extends Component {
	static propTypes = {
		location: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		/* On load, determine if we are on "/". This makes this.state.sidebarActive true.
		 * If we are not on "/", matchPath() returns a null object */
		const onRootPath = (matchPath(this.props.location.pathname, { path: "/", exact: true }) != null)
		this.state = {
			selectedLabel: "",
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
					selectedLabel={this.state.selectedLabel}
					isSidebarActive={this.state.sidebarActive}
				/>
				<Content
					selectedLabel={this.state.selectedLabel}
				/>
			</div>
		);
	}
}

// Need router for props, to find location
const AppWithRouter = withRouter(App);
export default AppWithRouter;