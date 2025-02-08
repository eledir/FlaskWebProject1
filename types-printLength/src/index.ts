// 1. Creiamo un file TypeScript principale (index.ts)

// Funzione generica con vincolo su T che deve avere una proprietà length
function printLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

// Test della funzione con vari tipi di input validi
printLength("hello");       // Output: 5
printLength([1, 2, 3]);     // Output: 3
printLength({ length: 10 }); // Output: 10

// Il codice seguente genererebbe un errore in TypeScript, perché il numero non ha una proprietà length
// printLength(123); // ❌ Errore

// 2. Creiamo un semplice setup TypeScript per il progetto
// Per iniziare, eseguire i seguenti comandi in una cartella vuota:
//
// npm init -y                      # Inizializza un nuovo progetto Node.js
// npm install typescript ts-node   # Installa TypeScript e ts-node per eseguire il codice TypeScript direttamente
// npx tsc --init                   # Genera un file tsconfig.json per configurare TypeScript
//
// 3. Per eseguire il file, si può usare:
//
// npx ts-node index.ts
