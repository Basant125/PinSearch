/** @format */

import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Button } from "@material-ui/core";

const Search = ({ setDetail, setLoader }) => {
	const [searchText, setSearchText] = useState("");

	const URL = "https://api.postalpincode.in/pincode/";
	const handleSearch = (e) => {
		setSearchText(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const check = checkInput(searchText);
		console.log(check);

		if (check) {
			try {
				setLoader(true);
				const { data } = await axios.get(`${URL}${searchText}`);
				setDetail(data);
				setLoader(false);
				return data;
			} catch (error) {
				new error(error.mesage);
				setLoader(true);
			}
		} else {
			toast("Pin length should be 6 0r not a string", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			console.log("error");
		}
	};

	const checkInput = (data) => {
		if (data.length === 0) {
			return false;
		} else if (data.length < 6) {
			return false;
		} else if (data.length > 6) {
			return false;
		} else if (data.length === 6) {
			return true;
		}
	};
	return (
		<Box className='search'>
			<ToastContainer />
			<form onSubmit={handleSubmit}>
				<Box className='input-container'>
					<input
						type={"text"}
						placeholder='Enter Pin Code eg: 674001'
						className='search-input'
						value={searchText}
						onChange={handleSearch}></input>
					<Button variant='contained' className='submit-btn' type='submit'>
						{" "}
						search
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default Search;
