import React, { FunctionComponent, useState } from 'react';

import { IDynamicInput } from 'components/types/DynamicFormTypes';
import DynamicForm from 'components/DynamicForm';
import Validators from 'lib/Validators';

import './registrationFormStyle.css';

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
        validator: Validators.validateString,
    }];

    return (
        <div
            style={{
                backgroundColor: 'yellow',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '50%',
            }}
        >
            <div>Registration Form</div>

            <DynamicForm
                data={dynamicFormData}
            />

            <button
                type='button'
                onClick={() => console.log('userName')}
            >
                Submit
            </button>
        </div>
    );
};

export default RegistrationForm;
