import {Landing, SearchPage, ResultPage} from '../views/home/';

export const admin = [
	{
		path: "/admin",
		name: "Dashboard",
		icon: "user",
		// component: Dashboard,
		layout: "/admin",
	}
];

export  const home = [
	{
		path: "/",
		name: "Index",
		icon: "books",
		component: Landing,
		layout: "/",
	},
	{
		path: "/search",
		name: "Search",
		icon: "fa-search",
		component: SearchPage,
		layout: "/",
	},
	{
		path: "/result",
		name: "ResultPage",
		icon: "fa-question-circle",
		component: ResultPage,
		layout: "/",
	}
]

export const user = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: "user",
		// component: Dashboard,
		layout: "/user",
	}
]