//task 38 the fuction should print a simple sentence  such as karachi is in pakistan.

function discribe_city(city:string, country:string = 'Default Country.'){
    console.log(` ${city} is in ${country}`);
}
discribe_city('Karachi', 'Pakistan');

discribe_city('Tokyo', 'Japan');

discribe_city('Paris');
