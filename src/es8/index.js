const data = {
    frontend: 'Jesus',
    backend: 'Oscar',
    desingn: 'Ana'
};

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

/* ---------------------------------------------------------------- */

const data2 = {
    frontend: 'Jesus',
    backend: 'Oscar',
    desingn: 'Ana'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

/* ---------------------------------------------------------------- */

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, 'hi'));
console.log(string.padEnd(12, '-----'));
console.log('food'.padEnd(12, ' -----'));

/* ---------------------------------------------------------------- */

const data3 = {
    frontend: 'Jesus',
    backend: 'Oscar',
    desingn: 'Ana',
} 