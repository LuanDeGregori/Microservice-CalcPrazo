const basicAuth = require('../controller/BasicAuth')
import { Render } from '../controller/LoggerController'
export default class LogsgRouter {

    _app;

    constructor(app){
        this._app = app
        this.LogsRouter()
    }

    LogsRouter(){

        this._app.get('/logs',Render)

    }
}
