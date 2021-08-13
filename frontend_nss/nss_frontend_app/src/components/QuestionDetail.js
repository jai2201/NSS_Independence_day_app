import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QuestionDetail = (props) => {
	const [question, setQuestion] = useState({});

	useEffect(() => {
		const slug = props.match.params.pk;

		const fetchData = async () => {
			try {
				const res = await axios.get(
					`${process.env.REACT_APP_API_URL}/question/${slug}`
				);
				setQuestion(res.data);
			} catch (error) {}
		};
		fetchData();
	}, [props.match.params.pk]);

	console.log(props.match.params);

	return (
		<div className="container mt-3">
			<h1
				className="title"
				style={{
					fontFamily: "Girassol, cursive cursive",
					color: "whitesmoke",
					fontSize: 40,
					fontStretch: "condensed",
				}}
			>
				{question.ranking}
			</h1>
			<div
				className="mt-3 mb-3"
				style={{
					backgroundColor: "white",
					opacity: 0.5,
					marginLeft: 4,
					borderRadius: 4,
				}}
			>
				<p
					style={{
						fontFamily: "Galdeano, sans-serif",
						fontSize: 20,
						color: "black",
						marginLeft: 4,
						padding: 15,
					}}
				>
					{question.question_desc}
				</p>
			</div>


			<p className="lead mb-5">
				<button
					class="button button1"
					style={{
						backgroundColor: "whitesmoke",
						border: 0,
						color: "white",
						padding: 8,
						textAlign: "center",
						textDecoration: "none",
						margin: 4,
						cursor: "pointer",
						marginLeft: 4,
					}}
				>
					<Link
						to="/questions/"
						className="font-weight-bold"
						style={{
							textDecoration: "none",
							color: "black",
							fontFamily: "Galdeano, sans-serif",
							fontSize: 18,
						}}
					>
						Back to Blogs
					</Link>
				</button>
			</p>
		</div>
	);
};
export default QuestionDetail;