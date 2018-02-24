import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BannerContent extends Component {
	componentWillMount() {
		// initialise the data and set it up here if any
		console.log("inside LandingPage -> componentWillMount ");
		console.log(this.props);
	}

	render() {
		return (
			<div id="bannerContent">
				 <div className="row noPad noMargin skater-img"></div>
				 <div className="col-sm-12 col-md-6 pad16 noPad bannerContent"> 
					<p className="fontDisplayBold fontSize_8 col-md-10 white pad16 noBottomPad noLeftPad noMargin">
						A Simple HTML Page <br/>
					</p> 
					<p className="fontDisplay white fontSize_4 col-md-7 pad16 noBottomPad noLeftPad noMargin">
						Title  1 <br/>
						Title  2
					</p>
				</div>
			</div>
		);


	}

}

export default BannerContent;