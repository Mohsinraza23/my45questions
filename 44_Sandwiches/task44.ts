// task 44 Sandwiches write a fubction that accepts a array of items a person wants on
// on a sindwich.the function should have one parameter tha collects as many
//items

function makeSandwich (item: string[]){
    console.log('\nMaking your Sandwich with');

    item.forEach(Element =>console.log("_"+ Element));

    console.log('Enjoy your Sandwich !\n');
}
makeSandwich(['Ham', 'Cheese', 'Lettuce']);

makeSandwich(['turkey', 'Bacon',]);

makeSandwich(['Butter', 'jelly',]);