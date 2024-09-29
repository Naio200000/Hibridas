function task1 () {

    setTimeout(() => {

        console.log('Ejecutando Task1');
    }, 1000);
}
function task2 () {
    
    setTimeout(() => {

        console.log('Ejecutando Task2');
    }, 2000);
}
function task3 () {
    
    setTimeout(() => {

        console.log('Ejecutando Task3');
    }, 3000);
}

function mainCallback () {

    task1();
    task2();
    task3();
}

mainCallback();