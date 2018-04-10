//Used to pass arguments to functions
function multiplication(x, y, z) {
    return x * y * z;
}
let num = [5, 10, 4];
console.log('5 * 10 * 4:', multiplication(...num));

/*
* Deep Copy of Arrays
* */
const testData = ["Aero", "Arik", "British"];
const copyTestData = [...testData, "Medview"];
console.log(copyTestData);
