function task1 () {

    setTimeout(() => {

        console.log('Ejecutando Task1');
    }, 1000);
}
function task2 () {
    
    setTimeout(() => {

        console.log('Ejecutando Task2');
    }, 1000);
}
function task3 () {
    
    setTimeout(() => {

        console.log('Ejecutando Task3');
    }, 1000);
}

async function mainAsyncCallback () {

    await task1();
    await task2();
    await task3();
}

mainAsyncCallback();