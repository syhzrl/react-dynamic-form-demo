import React, { FunctionComponent, useState } from 'react';

import { IDynamicInput } from 'components/types/DynamicFormTypes';
import DynamicForm from 'components/DynamicForm';
import Validators from 'lib/Validators';

const UserForm: FunctionComponent = () => {
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
        <div
            style={{
                backgroundColor: 'yellow',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '50%',
            }}
        >
            <div>User Form</div>

            <DynamicForm
                data={dynamicFormData}
            />

            <button
                type='button'
                onClick={() => console.log('userName', userName)}
            >
                Submit
            </button>
        </div>
    );
};

export default UserForm;
