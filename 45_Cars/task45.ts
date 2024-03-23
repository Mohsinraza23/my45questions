// task 45 cars,erite a function that stores information about a cae in a object.

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: {[key : string]:any }[]){

    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
};
let ans = storeCarInfo('Honda', 'Civic', {color:'Black'}, {features: ['navigations', 'power window']});
console.log(ans);