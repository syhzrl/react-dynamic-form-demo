const validateString = (value: string): boolean => {
    const regex = /^[a-zA-Z ]*$/;

    return regex.test(value);
};

const validateNumber = (value: string): boolean => {
    const regex = /^[0-9 ]*$/;

    return regex.test(value);
};

const validatePassword = (password: string): boolean => {
    if (password.length === 0) return true;

    if (password.length < 8) return false;

    const regex = /^[a-zA-Z0-9 ]/;

    return regex.test(password);
};

export default {
    validateString,
    validateNumber,
    validatePassword,
};
