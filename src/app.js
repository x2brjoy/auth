import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAO0w7uqY4d2wnp8Idd13NPlVdC9aDeIoE',
			authDomain: 'auth-cbq.firebaseapp.com',
			databaseURL: 'https://auth-cbq.firebaseio.com',
			projectId: 'auth-cbq',
			storageBucket: 'auth-cbq.appspot.com',
			messagingSenderId: '327922357901'
		});

		firebase.auth().onAuthStateChanged((user) => {
			// login -> user there
			// logout -> user null

			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
			//console.log('state is: ' + this.state.loggedIn);
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>Log out</Button>
				);
			case false:
				return <LoginForm />;
			default: 
				return (
					<View style={styles.spinnerViewStyle}>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	spinnerViewStyle: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'  
	}
};


export default App;
