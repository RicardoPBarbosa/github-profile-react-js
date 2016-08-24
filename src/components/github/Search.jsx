import React, {Component} from 'react';

class Search extends React.Component{
	onSubmit(e){
		e.preventDefault();
		let username = this.refs.username.value.trim();
		if(!username){
			alert('Please enter a username');
			return;
		}
		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}

	render(){
		return(
			<div>
				<nav className="navbar navbar-default">
			      <div className="container">
			        <div className="navbar-header">
			          <a className="navbar-brand" href="https://github.com"><i className="fa fa-github" aria-hidden="true"></i></a>
			        </div>
					<form onSubmit={this.onSubmit.bind(this)} className="navbar-form navbar-left">
						<div className="form-group">
							<input type="text" ref="username" className="form-control" placeholder="Search GitHub" />
						</div>
					</form>
			      </div>
			    </nav>
			</div>
		)
	}
}

export default Search