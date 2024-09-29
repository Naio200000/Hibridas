const task1 = new Promise(() => {
    setTimeout(() => {
        console.log('Ejecutando Task1');
    }, 1000);
})
const task2 = new Promise(() => {
    setTimeout(() => {
        console.log('Ejecutando Task2');
    }, 2000);
})
const task3 = new Promise(() => {
    setTimeout(() => {
        console.log('Ejecutando Task3');
    }, 3000);
})

Promise.all([task1, task2, task3])