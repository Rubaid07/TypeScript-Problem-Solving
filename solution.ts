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
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

