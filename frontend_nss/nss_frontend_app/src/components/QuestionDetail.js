import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import question_mark from '../static/image/question_mark.svg';
import '../static/css/question_detail_page.css';

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

    return (
        <Fragment>
            <div className="main-div-question-page">
                <img src={question_mark} style={{width:'20%', marginTop:'200px'}} />
                <div className="question-details">
                    <h1 className="question-heading">Question {question.ranking}</h1>
                    <p className="question-desc">{question.question_desc}</p>
                    <div style={{display:'flex' , justifyContent:'space-around'}}>
                        <Link
                            className="response-button-link"
                            to='/correct/'
                            >
                            <button className="response-button" style={{backgroundColor:'green'}}><b>Congratulate</b></button>
                        </Link>
                        <Link
                            className="response-button-link" 
                            to='/wrong/'
                            >
                            <button className="response-button" style={{backgroundColor:'red'}}><b>Oops !</b></button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
	);
};
export default QuestionDetail;