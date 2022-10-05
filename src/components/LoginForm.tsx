import React, { FunctionComponent, useState } from 'react';
import { DynamicForm, IDynamicInput } from 'syhzrl-react-dynamic-form';

import images from 'assets/images';

import Validators from 'lib/Validators';

import './LoginForm.css';

const LoginForm: FunctionComponent = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const dynamicFormData: IDynamicInput[] = [{
        id: '001',
        type: 'text',
        label: 'Username',
        value: userName,
        onChangeHandler: setUserName,
        errorText: 'Username cannot contain number or symbols',
        validator: Validators.validateString,
    },
    {
        id: '002',
        type: 'password',
        label: 'Password',
        value: password,
        onChangeHandler: setPassword,
        errorText: 'Password must be minimum 8 characters long',
        validator: Validators.validatePassword,
    }];

    return (
        <div className='loginFormContainer'>
            <img
                src={images.gigaChadGif}
                alt='Gigachad Minecraft Steve'
                className='gigaChadImg'
            />

            <div className='loginHeader'>
                Login
            </div>

            <DynamicForm
                data={dynamicFormData}
                wrapperClassname='formWrapper'
                inputWrapperClassname='inputWrapper'
                inputClassname='loginInput'
                labelClassname='inputLabel'
                errorClassname='errorLabel'
            />

            <button
                type='button'
                onClick={() => console.log('userName', userName)}
                className='loginButton'
            >
                Login
            </button>
        </div>
    );
};

export default LoginForm;
