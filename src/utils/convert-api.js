const convertToFahrenheit = (c) => {
    c = parseInt(c);
    let f = ((9 / 5) * c) + 32 
    return f.toString().substring(0,2)

} 

 const convertToCelsius = (f) => {
    f = parseInt(f);
    let c = (5 / 9) * (f - 32);
    return c.toString().substring(0,2);
} 

export {convertToFahrenheit, convertToCelsius};