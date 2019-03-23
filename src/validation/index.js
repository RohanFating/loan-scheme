const regx = {
    number: '^[0-9]*$',
}
export const validateType = (type, value, message) => {
    if(!value) {
        return message;
    }
    const regExp = new RegExp(regx[type])
    return regExp.test(value) ? undefined : message;
};


export const isRequired = (value, message) => !value || value === 'Please select' ? message : undefined;