import React, { FunctionComponent, useState } from 'react';
import { DynamicForm, IDynamicInput } from 'syhzrl-react-dynamic-form';

import images from 'assets/images';

import Validators from 'lib/Validators';

import './RegistrationForm.css';

const RegistrationForm: FunctionComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const dynamicFormData: IDynamicInput[] = [{
        id: '001',
        type: 'text',
        label: 'First Name',
        value: firstName,
        onChangeHandler: setFirstName,
        errorText: 'First name cannot contain number or symbols',
        validator: Validators.validateString,
    },
    {
        id: '002',
        type: 'text',
        label: 'Last Name',
        value: lastName,
        onChangeHandler: setLastName,
        errorText: 'Last name cannot contain number or symbols',
        validator: Validators.validateString,
    },
    {
        id: '003',
        type: 'text',
        label: 'Email',
        value: email,
        onChangeHandler: setEmail,
        errorText: 'Please enter a valid email',
        validator: Validators.validateString,
    },
    {
        id: '004',
        type: 'text',
        label: 'Phone Number',
        value: phoneNum,
        onChangeHandler: setPhoneNum,
        errorText: 'Please enter a valid phone number',
        validator: Validators.validateNumber,
    }];

    return (
        <div className='registrationFormContainer'>
            <div className='regLeftWrapper'>
                <img
                    src={images.gigaChadSteve}
                    alt='Gigachad'
                    className='regImg'
                />
            </div>
            <div className='regRightWrapper'>
                <div className='regHeader'>Registration Form</div>

                <div className='regDesc'>Please fill in your information</div>

                <DynamicForm
                    data={dynamicFormData}
                    wrapperClassname='formWrapper'
                    inputWrapperClassname='inputWrapper'
                    inputClassname='registerInput'
                    labelClassname='registerLabel'
                    errorClassname='registerError'
                />

                <button
                    type='button'
                    onClick={() => console.log('userName')}
                    className='regButton'
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default RegistrationForm;
