import React, {useState} from 'react';
import signupSchema from '../validations/signupSchema'
import * as yup from 'yup';

const useForm = (initialState, schema) => {
    const [state, setState] = useState(initialState);

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setState({
                ...state,
                formData: {
                    ...state.formData,
                    [name]: value
                },
                errors: {
                    ...state.errors,
                    [name]: ''
                }
            }))
            .catch((err) => setState({
                ...state,
                formData: {
                    ...state.formData,
                    [name]: value
                },
                errors: {
                    ...state.errors,
                    [name]: err.errors[0]
                }
            }))
    }

    const handleChange = e => {
        const {value, name, type, checked} = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        validate(name, valueToUse)
    }

    return [state, handleChange]
}

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
        term: false
    },
    errors: {
        username: '',
        email: '',
        password: '',
        term: ''
    }
}

export default function SignupForm() {
    const [ state, handleChange ] = useForm(initialState, signupSchema);

    console.log('formData ---- ', state.formData);
    console.log('ERROR ---- ', state.errors)

    const handleSubmit= e => {
        e.preventDefault();
        if(state.errors.username || state.errors.email || state.errors.password || state.errors.term){
            console.log('cannot submit');
        } else {
            console.log('submitted!!!')
        }
    }



    return (
        <div>
            <h2>sign up form</h2>
            <form className='register-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        name='username'
                        type='text'
                        placeholder='Username'
                        value={state.formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div style={{color: 'red'}}>{state.errors.username}</div>

                <div className="form-group">
                    <input
                        name='email'
                        type='text'
                        placeholder='Email'
                        value={state.formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div style={{color: 'red'}}>{state.errors.email}</div>

                <div className="form-group">
                    <input
                        name='password'
                        type='text'
                        placeholder='Password'
                        value={state.formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div style={{color: 'red'}}>{state.errors.password}</div>

                <div className="form-group" id='term'>
                    <label>
                        <input
                            name='term'
                            type='checkbox'
                            id='checkbox'
                            checked={state.formData.term}
                            onChange={handleChange}
                        />
                        I accept the
                        <a
                            className='conditions'
                            href='#'
                            style={{
                                color: '#4cc9f0',
                                textDecoration: 'underline'
                            }}
                        >
                            Terms of Use
                        </a>
                        &amp;
                        <a
                            className='conditions'
                            href='#'
                            style={{
                                color: '#4cc9f0',
                                textDecoration: 'underline'
                            }}
                        >
                            Privacy Policy
                        </a>
                    </label>

                </div>
                <div style={{color: 'red'}}>{state.errors.term}</div>

                <button id='register-btn'>Register</button>
            </form>


        </div>

    )
}


