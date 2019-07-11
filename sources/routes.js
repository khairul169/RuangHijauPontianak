import React from 'react'
import { YellowBox } from 'react-native'
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import slideTransition from 'react-navigation-slide-from-right-transition'
import Footer from './components/footer'

// Disable ViewPagerAndroid deprecated warning
YellowBox.ignoreWarnings(['ViewPagerAndroid']);

// Screens
import Home from './home'
import Events from './events'
import Post from './post'
import Stats from './stats'
import Account from './account'

const indexTabIcons = [
	'home',
	'google-hangouts',
	'image-filter-center-focus',
	'leaf',
	'account-circle'
]

const indexTabNavigator = createMaterialTopTabNavigator({
	Home,
	Events,
	Post,
	Stats,
	Account
}, {
	tabBarPosition: 'bottom',
	tabBarComponent: (props) => <Footer {...props} tabIcons={indexTabIcons} />
})

const stackContainer = createStackNavigator({
	index: indexTabNavigator
}, {
	headerMode: 'none',
	transitionConfig: slideTransition
});

export default createAppContainer(stackContainer);
