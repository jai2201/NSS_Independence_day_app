import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../static/css/response.css'

const WrongResponse = () => {
    return (
        <Fragment>
            <center>
                <Link
                    to='/questions/'
                    style={{
                        textDecoration: 'none',
                        color:'red',
                        
                    }}
                >
                    <div className="main-div-response-page">
                        <h1 className="message"> Oops ..</h1>
                        <img src="https://media.giphy.com/media/1Y7ChRtbWnYONjDidg/giphy.gif" style={{width:'35%'}} />
                    </div>
                </Link>
            </center>
        </Fragment>
    )
}

export default WrongResponse;