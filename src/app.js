import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAO0w7uqY4d2wnp8Idd13NPlVdC9aDeIoE',
			authDomain: 'auth-cbq.firebaseapp.com',
			databaseURL: 'https://auth-cbq.firebaseio.com',
			projectId: 'auth-cbq',
			storageBucket: 'auth-cbq.appspot.com',
			messagingSenderId: '327922357901'
		});
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}


export default App;
