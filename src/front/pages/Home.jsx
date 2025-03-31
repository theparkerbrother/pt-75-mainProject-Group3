
import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons'; // Import the bomb icon
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { MoviesHeader } from "../components/MoviesHeader";
import { MoviesRow } from "../components/MoviesRow";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const isAuthenticated = store.user?.isAuthenticated;

	const movies = [
		{
			title: "Inside Out 2",
			poster: "https://image.tmdb.org/t/p/w500/kvJqs0vm29U0xJa373wlzHb3FRh.jpg",
			anticipationScore: 9.3,
			satisfactionScore: 8.2,
			myAnticipationScore: 7.5,
			mySatisfactionScore: 9.0,
			designation: "/bomb-solid.svg",
		},
		{
			title: "The Wild Robot",
			poster: "https://image.tmdb.org/t/p/w500/vm94OwAJdVE62BnNdrkM0aAgnEi.jpg",
			anticipationScore: 5.1,
			satisfactionScore: 9.4,
			myAnticipationScore: 6.2,
			mySatisfactionScore: 8.5,
			designation: "/hit.svg",
		},
	];

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL;

			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file");

			const response = await fetch(backendUrl + "/api/hello");
			const data = await response.json();

			if (response.ok) dispatch({ type: "set_hello", payload: data.message });

		} catch (error) {
			console.error("Could not fetch the message from the backend:", error);
		}
	};

	useEffect(() => {
		loadMessage();
	}, []);

	return (
		<div className="text-center mt-5">
			{/* <h1 className="display-4">Home Screen</h1>
			<p>This is the message from the backend...</p>
			<p>{store.message ? store.message : "Loading..."}</p> */}
			<div className="container">
				<table className="table">
					<MoviesHeader isAuthenticated={isAuthenticated} />
					<tbody>
						{movies.map((movie, index) => (
							<MoviesRow key={index} movie={movie} isAuthenticated={isAuthenticated} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};