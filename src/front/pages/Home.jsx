
import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons'; // Import the bomb icon
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

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
					<thead className="thead-dark">
						<tr>
							<th scope="col" className="text-start">Title</th>
							<th scope="col">Poster</th>
							<th scope="col">Anticipation Score</th>
							<th scope="col">Satisfaction Score</th>
							<th scope="col">Designation</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-start">Inside Out 2</td>
							<td>
								<img
									src="https://image.tmdb.org/t/p/w500/kvJqs0vm29U0xJa373wlzHb3FRh.jpg"
									alt="The Wild Robot Poster"
									style={{ width: "50px", height: "auto" }}
								/>
							</td>
							<td>9.3</td>
							<td>8.2</td>
							<td>
								<img
									src="/bomb-solid.svg"
									alt="Bomb!"
									style={{ width: "35px", height: "auto" }}
								/>
							</td>
						</tr>
						<tr>
							<td className="text-start">The Wild Robot</td>
							<td>
								<img
									src="https://image.tmdb.org/t/p/w500/vm94OwAJdVE62BnNdrkM0aAgnEi.jpg"
									alt="The Wild Robot Poster"
									style={{ width: "50px", height: "auto" }}
								/>
							</td>
							<td>5.1</td>
							<td>9.4</td>
							<td>
								<img
									src="/hit.svg"
									alt="Hit!"
									style={{ width: "35px", height: "auto" }}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};