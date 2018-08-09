import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
	render() {
		const m_sidebarClassName = this.props.isSidebarActive ? "sidebar sidebar--active" : "sidebar";

		return (
			<div className={m_sidebarClassName}>
				<div className="logo">
					<h2>yu xuan wu</h2>
					<h4>web & graphics</h4>
					<h4>development</h4>
				</div>
				<ul className="labels">
					{/*Generates routes based on labels prop*/}
					{this.props.labels.map((label) => {
						return (
							<li
								onClick={() => { this.props.onLabelSelect(label) }}
								className="labels__item"
								key={label}
							>
								<Link className="labels__link" to={"/" + label}>{label}</Link>
							</li>
						);
					})}
				</ul>
				<div class="links">
					<a href="mailto:yuxu.wu1@gmail.com" className="links__link">yuxu.wu1@gmail.com</a>
					<a href="https://github.com/yuxuwu/" className="links__link" target="_blank" rel="noopener noreferrer">github://yuxuwu</a>
					<a href="https://www.linkedin.com/in/yu-xuan-wu/" target="_blank" className="links__link" rel="noopener noreferrer">linkedin://yu-xuan-wu</a>
				</div>
			</div>
		);
	}
}