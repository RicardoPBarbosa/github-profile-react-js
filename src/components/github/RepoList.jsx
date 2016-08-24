import React, {Component} from 'react';
import Repo from './Repo.jsx';

class RepoList extends React.Component{

	render(){
		return(
			<div>
				<div className="panel panel-default">
					<div className="panel-heading"><h3 className="panel-title">Recent Repositories</h3></div>
  					<div className="panel-body">
					{
						this.props.userRepos.map(repo => {
							return <Repo
										repo={repo}
										key={repo.id}
										{...this.props}
									/>
						}.bind(this))
					}
					</div>
				</div>
			</div>
		)
	}
}

export default RepoList