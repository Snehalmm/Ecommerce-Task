const inrFormat = (amount) => {
    let number = Number(amount);
    if (number === Math.floor(number)) {
        const curr = Number(amount).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0

        });
        return curr.replace('₹', '');
    } else {
        const curr = Number(amount).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',

        });
        return curr.replace('₹', '');
    }
};

export default inrFormat;
