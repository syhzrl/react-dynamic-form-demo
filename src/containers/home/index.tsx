import React from 'react';

import DynamicForm from 'components/DynamicForm';
import { IDynamicForm, IDynamicInput } from 'components/types/DynamicFormTypes';
import UserForm from './components/UserForm';
import RegistrationForm from './components/RegistrationForm';

const HomeScreen = (): JSX.Element => {
    return (
        <div
            style={{
                backgroundColor: 'pink',
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
                padding: '40px 0',
            }}
        >
            <UserForm />

            <RegistrationForm />
        </div>
    );
};

export default HomeScreen;
