const convertToFahrenheit = (c) => {
    c = parseInt(c);
    let f = ((9 / 5) * c) + 32 
    return f;
} 

 const convertToCelsius = (f) => {
    f = parseInt(f);
    let c = (5 / 9) * (f - 32);
    return c;
} 

export {convertToFahrenheit, convertToCelsius};