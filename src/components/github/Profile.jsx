import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Profile extends React.Component{
	convertDate(date){
		var parts         = date.split("T");
		parts             = parts[0].split("-");
		var convertedDate = new Date(parts[0], parts[1] - 1, parts[2]);
		var day           = convertedDate.getDate();
		var month         = convertedDate.getMonth();
		month             = monthNames[month].substring(0, 3);
		var year          = convertedDate.getFullYear();
    	return ("" + month + " " + day + ", " + year);
	}

	render(){
		return(
			<div className="container">
			    <div className="row">
					<div className="col-md-4">
						<a target="_blank" href={this.props.userData.html_url} title="Visit Profile">
							<img src={this.props.userData.avatar_url} alt={this.props.userData.name} className="thumbnail" style={{width:"100%"}} />
						</a>
						<div className="profile_infos">
							<p className="full-name">{this.props.userData.name}</p>
							<p className="nickname">{this.props.userData.login}</p>
							<p className="bio">{this.props.userData.bio}</p>
							<ul className="list-group contacts">
								<li className="list-group-item"><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.userData.location}</li>
								<li className="list-group-item"><i className="fa fa-envelope" aria-hidden="true"></i> <a href={"mailto:" + this.props.userData.email}>{this.props.userData.email}</a></li>
								<li className="list-group-item"><i className="fa fa-clock-o" aria-hidden="true"></i> Joined on {this.convertDate("2016-07-01T13:13:18Z")}</li>
							</ul>
							<ul className="list-group stats">
								<a target="_blank" href={this.props.userData.html_url + "/followers"}><li className="list-group-item"><strong>{this.props.userData.followers}</strong><span>Followers</span></li></a>
								<a target="_blank" href={this.props.userData.html_url + "/following"}><li className="list-group-item"><strong>{this.props.userData.following}</strong><span>Following</span></li></a>
								<li className="list-group-item"><strong>{this.props.userData.hireable ? <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> : <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>}</strong><span>Hireable</span></li>
							</ul>
						</div>
					</div>
					<div className="col-md-8">
						<ul className="nav nav-tabs">
						  <li role="presentation"><a><i className="fa fa-user" aria-hidden="true"></i> Overview</a></li>
						  <li role="presentation" className="active"><a><i className="fa fa-database" aria-hidden="true"></i> Repositories</a></li>
						  <li role="presentation"><a><i className="fa fa-rss" aria-hidden="true"></i> Public activity</a></li>
						</ul>
			    		<RepoList userRepos={this.props.userRepos} />
					</div>
			    </div>
			</div>
		)
	}
}

export default Profile