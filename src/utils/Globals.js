/* eslint-disable no-useless-concat */

class Globals {
    
}


class DevelopmentGlobals extends Globals {
   
}

class ProductionGlobals extends Globals {

}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;