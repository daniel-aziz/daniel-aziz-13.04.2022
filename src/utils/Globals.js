/* eslint-disable no-useless-concat */

class Globals {
    APIKEY = "98phAhJVDTZwxZxWTs6Cdx47LnTnubrR"
    AUTOCOMPLETE_API = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
    CURRENT_CONDITION_API = "http://dataservice.accuweather.com/currentconditions/v1/"
    FORCAST_API =  "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
    GEOLOCATION_API = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search"
    urls = {
        AUTOCOMPLETE : this.AUTOCOMPLETE_API + "?apikey=" + this.APIKEY + "&q=",
        CURRENT_CONDITION: this.CURRENT_CONDITION_API + "<city_key>" + "?apikey=" + this.APIKEY,
        FORCAST: this.FORCAST_API + "<city_key>" + "?apikey=" + this.APIKEY,
        GEOLOCATION: this.GEOLOCATION_API + "?apikey=" + this.APIKEY + "&q=" + "<latitude>" + "%2C" + "<longitude>"
    }
}


class DevelopmentGlobals extends Globals {
   
}

class ProductionGlobals extends Globals {

}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;