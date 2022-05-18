import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";

import HotelPage from "./components/accommodations/hotels/HotelPage"
import GuesthousePage from "./components/accommodations/guesthouse/GuesthousePage"
import BBPage from "./components/accommodations/bb/BBPage"
import DetailPage from "./components/accommodations/details/DetailPage";

import Search from "./components/home/Search";
import BookPage from "./components/accommodations/details/BookPage";
import LoginPage from "./components/login/LoginPage";
import ContactPage from "./components/contact/ContactPage";

import DashboardPage from "./components/dashboard/DashboardPage";
import ContactMessages from "./components/dashboard/posts/ContactMessages";
import AddPost from "./components/dashboard/posts/AddPost";

import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext"; //imports auth, sucess login


import "./sass/style.scss";

function App() {
	return (
		<>
		<AuthProvider> 
		<Router>
			<Nav />

			<div className="container">
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/contact">
						<ContactPage />
					</Route>
					<Route path="/search">
						<Search />
					</Route>

					<Route path="/detail/:id">
						<DetailPage />
					</Route>
					<Route path="/book/:id">
						<BookPage />
					</Route>
					<Route path="/hotels">
						<HotelPage />
					</Route>
					<Route path="/guesthouse">
						<GuesthousePage />
					</Route>
					<Route path="/bb">
						<BBPage />
					</Route>


					<Route path="/dashboard" exact>
							<DashboardPage />
						</Route>
						<Route path="/dashboard/posts/contact-messages" exact>
							<ContactMessages />
						</Route>
						<Route path="/dashboard/posts/add">
							<AddPost />
						</Route>

				</Switch>
			</div>
		</Router>
		</AuthProvider>
		</>
	);
}

export default App;
