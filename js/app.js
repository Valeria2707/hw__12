function createCar(personName, personAge, carBrand, carModel, carYear) {
    const person = new Person(personName, personAge);
    const car = new Car(carBrand, carModel, carYear, [person]);
    console.log(car);
}

function validateValue() {
    let personName = prompt('Введіть своє ім\'я ');
    let personAge = parseInt(prompt('Введіть свій вік'));
    let carBrand = prompt('Введіть марку машини');
    let carModel = prompt('Введіть модель машини');
    let carYear = parseInt(prompt('Введіть рік випуску машини'));
    if (isNaN(personAge) || isNaN(carYear)) {
        alert('Заповніть правильно всі поля!');
    }
    else if (personAge < 18) {
        alert('Вибачте вам ще не має 18');
    }
    else if (personName === null || personName === '' || personAge !== personAge || carBrand === null || carBrand === '' || carModel === null || carModel === '' || carYear !== carYear) {
        alert('Заповність всі поля');
    }
    else {
        createCar(personName, personAge, carBrand, carModel, carYear);
    }
}


validateValue();



