const basicAuth = require('../controller/BasicAuth')
import { Test } from '../controller/ShippingController'
export default class ShippingRouter {

    _app;

    constructor(app){
        this._app = app
        this.ShippingRouter()
    }

    ShippingRouter(){

        this._app.use('/teste', basicAuth,(req,res) =>{ res.send("Ok")})

        this._app.use('/frete-jamef/cotacao',basicAuth).post(Test)

    }
} 