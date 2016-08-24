import React, {Component} from 'react';

class Repo extends React.Component{

	render(){
		const {repo} = this.props;
		return(
			<ul className="list-group repos">
					<li className="list-group-item">
						<div className="list-right">
							{repo.language}
							<a target="_blank" href={repo.html_url + "/network"} className="forks" title="Forks"><i className="fa fa-code-fork" aria-hidden="true"></i> 0</a>
							<a target="_blank" href={repo.html_url + "/stargazers"} className="starred" title="Stargazers"><i className="fa fa-star" aria-hidden="true"></i> 0</a>
						</div>
						<a href={repo.html_url} target="_blank">
							<div className="list-left">
								<i className="fa fa-database" aria-hidden="true"></i>
								<span id="repo-name">{repo.name}</span>
								<p>{repo.description}</p>
							</div>
						</a>
					</li>
			</ul>
		)
	}
}
export default Repo