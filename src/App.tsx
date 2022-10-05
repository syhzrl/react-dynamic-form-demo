import React, { useState } from 'react';

import SideBar from 'components/SideBar';
import LoginForm from 'components/LoginForm';
import RegistrationForm from 'components/RegistrationForm';

import './App.css';

const App = (): JSX.Element => {
    const [selectedForm, setSelectedForm] = useState('login');

    const renderForms = () => {
        if (selectedForm === 'register') {
            return (
                <RegistrationForm />
            );
        }

        return (
            <LoginForm />
        );
    };

    return (
        <div className='appContainer'>
            <SideBar
                onClickHandler={setSelectedForm}
            />

            <div className='formContainer'>
                {renderForms()}
            </div>
        </div>
    );
};

export default App;
