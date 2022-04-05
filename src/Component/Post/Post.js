/** @format */

import React from "react";
import "./Post.css";
import { Box, Paper, Typography } from "@material-ui/core";

const post = ({ post }) => {
	const { Name, Block, District, State } = post;
	return (
		<Paper className='post'>
			<Box className='post-heading'>
				<ul>
					<li style={{ listStyle: "none" }}>
						<Box className='post-detail'>
							<Box className='Box'>
								<Typography variant='h5' className='text text-name'>
									Name
								</Typography>
							</Box>
							<Box className='Box'>
								<Typography variant='h5' className='text text-name'>
									{Name}
								</Typography>
							</Box>
						</Box>
						<Box className='post-detail'>
							<Box className='Box'>
								<Typography variant='h5' className='text'>
									Block
								</Typography>
							</Box>
							<Box className='Box'>
								<Typography variant='h5' className='text'>
									{Block}
								</Typography>
							</Box>
						</Box>
						<Box className='post-detail'>
							<Box className='Box'>
								<Typography variant='h5' className='text'>
									District
								</Typography>
							</Box>
							<Box className='Box'>
								<Typography variant='h5' className='text'>
									{District}
								</Typography>
							</Box>
						</Box>
						<Box className='post-detail'>
							<Box className='Box'>
								<Typography variant='h5' className='text'>
									State
								</Typography>
							</Box>

							<Box className='Box'>
								<Typography variant='h5' className='text'>
									{State}
								</Typography>
							</Box>
						</Box>
					</li>
				</ul>
			</Box>
		</Paper>
	);
};

export default post;
