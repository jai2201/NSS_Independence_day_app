import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../static/css/question_list_page.css';
import logo from "../static/image/logo.svg";

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
                        fontFamily: "Pacifico",
                        }}>
                <div className="question-number-box">
                    {question.ranking}
                </div>
                </Link>

			);
		});
                                        
		for (let i = 0; i < list.length; i += 4) {
			result.push(
				<div key={i} className="row mb-4">
					<div className="col-md-3 p-0">{list[i]}</div>
                    <div className="col-md-3 p-0">{list[i + 1] ? list[i + 1] : null}</div>
                    <div className="col-md-3 p-0">{list[i + 2] ? list[i + 2] : null}</div>
					<div className="col-md-3 p-0">{list[i + 3] ? list[i + 3] : null}</div>
				</div>
			);
		}

		return result;
    };
    
    return (
        <center>
            <div className="main-div">
                <img src={logo} className="nss-logo" />
                <p className="logo-text">NSS IITR Presents</p>
                <p className="heading" >SURPRISE SITUATION TRIVIA !!</p>
                <p className="sub-heading" >Select a Number</p>
                <div className="container">{getQuestions()}</div>
            </div>
        </center>
	);
};

export default QuestionList;
