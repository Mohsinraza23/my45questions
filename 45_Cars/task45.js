"use strict";
// task 45 cars,erite a function that stores information about a cae in a object.
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let ans = storeCarInfo('Honda', 'Civic', { color: 'Black' }, { features: ['navigations', 'power window'] });
console.log(ans);
