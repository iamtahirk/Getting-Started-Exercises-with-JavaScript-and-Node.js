/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/

const describeCity = (city, country = 'Pakistan') => {
    console.log (`\n'${city}' is in '${country}'.`);
}

describeCity('Karachi', 'Pakistan');
describeCity('Peshawar');
describeCity('Lahore');
describeCity('New York', 'United States of America');