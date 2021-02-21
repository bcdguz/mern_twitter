//This is needed because validator will crash if input is not a str!

const validText = str => {
    return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;