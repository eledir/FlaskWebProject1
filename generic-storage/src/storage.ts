class GenericStorage<T> {
    private data: T | null = null; // Prevenire errori di accesso a dati non inizializzati

    setItem(item: T): void {
        this.data = item;
    }

    getItem(): T | null {
        return this.data;
    }
}

// Esempio con numeri
const numberStorage = new GenericStorage<number>();
numberStorage.setItem(123);
const numberItem = numberStorage.getItem();
console.log(numberItem); // Output: 123

// Esempio con stringhe
const stringStorage = new GenericStorage<string>();
stringStorage.setItem("Hello, TypeScript!");
const stringItem = stringStorage.getItem();
console.log(stringItem); // Output: Hello, TypeScript!

// Esempio con oggetti
interface User {
    id: number;
    name: string;
}

const userStorage = new GenericStorage<User>();
userStorage.setItem({ id: 1, name: "Alice" });
const userItem = userStorage.getItem();
console
