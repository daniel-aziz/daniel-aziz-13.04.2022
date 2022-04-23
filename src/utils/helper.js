const convertToFahrenheit = (c) => {
    c = parseInt(c);
    let f = ((9 / 5) * c) + 32
    return f.toString().substring(0, 2)

}

const convertToCelsius = (f) => {
    f = parseInt(f);
    let c = (5 / 9) * (f - 32);
    return c.toString().substring(0, 2);
}

const containsCityByKey = (key, cities) => {
    if (cities === null || cities === undefined) return false;
    for (let i = 0; i < cities.length; i++) {
        if (key === cities[i].key) return true;
    }
    return false;
}

export { convertToFahrenheit, convertToCelsius, containsCityByKey };