import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        const sidebarClassName = this.props.isSidebarActive ? "sidebar sidebar--active" : "sidebar";

        return (
            <div className={sidebarClassName}>
                <div className="logo">
                    <h2>yu xuan wu</h2>
                    <h4>web & graphics</h4>
                    <h4>development</h4>
                </div>
                <ul className="labels">
                    {this.props.labels.map((label) => {
                        return ( 
                            <li 
								onClick={()=>{this.props.onLabelSelect(label)}} 
								className="labels__item"
                                key={label} 
                            >
                                <Link className="labels__link" to={"/"+label}>{label}</Link>
                            </li>
                        );
                    })}
                </ul>
				<div class="links">
					<a href="#" class="links__link">yuxu.wu1@gmail.com</a>
					<a href="#" class="links__link">github://yuxuwu</a>
					<a href="#" class="links__link">linkedin://yu-xuan-wu</a>
				</div>
            </div>
        );
    }
}