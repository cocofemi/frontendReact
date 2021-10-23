import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../public/styles/styles.css'
import { userActions } from '../actions';

function RegisterPage() {
    const [user, setUser] = useState({
        firstName: '',
        surname: '',
        email: '',
        occupation: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.surname && user.email && user.occupation && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="form-border col-lg-8 offset-lg-2">
            <h2 className="title">Registration</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label style={{ fontSize: '20px'}}>First Name</label>
                    <input type="text" size="lg" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} style={{ height: '50px'}}/>
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '20px'}}>Surname</label>
                    <input type="text" name="surname" value={user.surname} onChange={handleChange} className={'form-control' + (submitted && !user.surname ? ' is-invalid' : '')} style={{ height: '50px'}}/>
                    {submitted && !user.surname &&
                        <div className="invalid-feedback">Surname is required</div>
                    }
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '20px'}}>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} style={{ height: '50px'}}/>
                    {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '20px'}}>Occupation</label>
                    <input type="text" name="occupation" value={user.occupation} onChange={handleChange} className={'form-control' + (submitted && !user.occupation ? ' is-invalid' : '')} style={{ height: '50px'}}/>
                    {submitted && !user.occupation &&
                        <div className="invalid-feedback">Occupation is required</div>
                    }
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '20px'}}>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} style={{ height: '50px'}}/>
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                    <Link to="/login" className="btn btn-link" style={{ fontSize:'30px'}}>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export { RegisterPage };