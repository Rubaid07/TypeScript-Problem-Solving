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



const getLength = (input: string | any[]): number => {
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



type RatedItem = {
    title: string;
    rating: number;
}
const filterByRating = (items: RatedItem[]): RatedItem[] => {
    return items.filter(item => item.rating >= 4);
}



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (user: User[]): User[] => {
    return user.filter(user => user.isActive === true)
}



interface Book {
    title: string;
    author: string;
    publishedYear : number;
    isAvailable: boolean;
}
const printBookDetails =(book: Book): void => {
    const availableity = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableity}`);
}



const getUniqueValues = (arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] => {
    const result: (number | string)[] = [];
    for (let i = 0; i < arr1.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr1[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result[result.length] = arr1[i];
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result[result.length] = arr2[i];
        }
    }
    return result;
}



type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const base = product.price * product.quantity;
    const discount = product.discount ?? 0;
    const final = base * (1 - discount / 100);
    return total + final;
  }, 0);
};
