const formatValue = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    if (typeof value === 'boolean') {
        return !value;
    }
}   

const getLength = (input: string | any[]) => {
    if (typeof input === 'string') {
    return input.length;
    }
    if (Array.isArray(input)) {
    return input.length;
    }
    throw new Error('Invalid input type');
}

