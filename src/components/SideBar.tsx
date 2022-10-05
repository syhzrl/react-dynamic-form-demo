import React, { FunctionComponent } from 'react';

import './SideBar.css';

interface SideBarProps {
    onClickHandler: (selectedForm: string) => void;
}

const SideBar: FunctionComponent<SideBarProps> = (props: SideBarProps) => {
    const { onClickHandler } = props;
    return (
        <div className='mainContainer'>
            <button
                type='button'
                className='sideBarButton'
                onClick={() => onClickHandler('login')}
            >
                Login Form
            </button>

            <button
                type='button'
                className='sideBarButton'
                onClick={() => onClickHandler('register')}
            >
                Register Form
            </button>
        </div>
    );
};

export default SideBar;
