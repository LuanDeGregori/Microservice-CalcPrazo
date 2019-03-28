import { SaveUser } from '../controller/UserController'


export default class UserRouter {

    _app;

    constructor(app){
        this._app = app
        this.UserRouter()
    }

    UserRouter(){

        this._app.route('/user')
            .post(SaveUser)

    }
} 