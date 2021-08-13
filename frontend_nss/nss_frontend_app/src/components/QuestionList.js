import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QuestionList = () => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const res = await axios.get(`${process.env.REACT_APP_API_URL}/questions/`);
				setQuestions(res.data);
			} catch (error) {}
		};

		fetchQuestions();
	}, []);

	const getQuestions = () => {
        let list = [];
        let result = [];

		questions.map((question) => {
			return list.push(
							<Link
								to={`/question/${question.id}`}
								style={{
									textDecoration: "none",
									color: "#60a3bc",
									fontFamily: "Galdeano, sans-serif",
								}}
							>
								{question.ranking}
							</Link>
			);
		});

		for (let i = 0; i < list.length; i += 2) {
			result.push(
				<div key={i} className="row mb-0">
					<div className="col-md-6 p-4">{list[i]}</div>
					<div className="col-md-6 p-4">{list[i + 1] ? list[i + 1] : null}</div>
				</div>
			);
		}

		return result;
	};

	return (
		<div>
			<div className="container mt-2">{getQuestions()}</div>
		</div>
	);
};

export default QuestionList;