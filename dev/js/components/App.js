import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LinkButton  from "./../common/linkButton"
import BannerContent  from "./BannerContent"
import SwapContent  from "./swapContent"
import SimContent  from "./simContent"
import FAQContent  from "./faqContent"



class App extends Component {
	componentWillMount() {
		// initialise the data and set it up here if any
		console.log("inside LandingPage -> componentWillMount ");
		console.log(this.props);
	}

	render() {
		return (
			<div className="container noPad">
				<BannerContent {...this.props}/>
                <SwapContent {...this.props}/>
                <SimContent {...this.props}/>
                <FAQContent {...this.props}/>
			</div>
		);


	}

}

export default App;