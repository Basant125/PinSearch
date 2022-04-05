/** @format */

import { Box, Container, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Search from "../../Search/Search";
import Post from "../Post/Post";
import cuid from "cuid";
import "./Posts.css";

const Posts = () => {
	const [detail, setDetail] = useState("");
	const [loader, setLoader] = useState(false);
	console.log(detail);
	return (
		<Box className='posts'>
			<Box>
				<Typography variant='h3' className='heading'>
					Search Your PostOffice <br /> with PinCode
				</Typography>
			</Box>
			<Search setDetail={setDetail} setLoader={setLoader} />

			{detail?.length > 0 ? (
				<Box className='post-message'>
					<h4>{detail[0]?.Message}</h4>
				</Box>
			) : (
				""
			)}
			<Box className='postOffices'>
				<Container>
					{loader ? (
						<Box className='loader'> loading....</Box>
					) : (
						<Grid
							container
							spacing={2}
							justifyContent='center'
							alignItems='center'>
							{detail[0]?.PostOffice?.map((name) => {
								return (
									<Grid item xs={12} sm={6} md={4} key={cuid()}>
										<Post post={name} />
									</Grid>
								);
							})}
						</Grid>
					)}
				</Container>
			</Box>
		</Box>
	);
};

export default Posts;
