import React from 'react'
import { YellowBox } from 'react-native'
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import slideTransition from 'react-navigation-slide-from-right-transition'
import Footer from './components/footer'

// Disable ViewPagerAndroid deprecated warning
YellowBox.ignoreWarnings(['ViewPagerAndroid']);

// Main screens
import Home from './home'
import Events from './events'
import Feeds from './feeds'
import Account from './account'

// Screens stacks
import UploadPhoto from './upload-photo.js'

const indexTabIcons = [
	'home',
	'leaf',
	'google-hangouts',
	'account-circle'
]

const indexTabNavigator = createMaterialTopTabNavigator({
	Home,
	Feeds,
	Events,
	Account
}, {
	tabBarPosition: 'bottom',
	tabBarComponent: (props) => <Footer {...props} tabIcons={indexTabIcons} />
})

const stackContainer = createStackNavigator({
	index: indexTabNavigator,
	UploadPhoto
}, {
	headerMode: 'none',
	transitionConfig: slideTransition
})

export default createAppContainer(stackContainer);
