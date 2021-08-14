import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../static/css/response.css'

const CorrectResponse = () => {
    return (
        <Fragment>
            <center>
                <Link
                    to='/questions/'
                    style={{
                        textDecoration: 'none',
                        color:'green',
                        
                    }}
                >
                    <div className="main-div-response-page">
                        <h1 className="message"> Congrats !!</h1>
                        <img src="https://acegif.com/wp-content/gif/confetti-25.gif" style={{width:'50%'}} />
                    </div>
                </Link>
            </center>
        </Fragment>
    )
}

export default CorrectResponse;