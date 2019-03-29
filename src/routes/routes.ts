import { createConnection } from 'typeorm'
import UserRoutes from './UserRoutes'
import ShippingRoutes from './ShippingRoutes'
import { Erro } from '../models/Errors'


export default (app:any) => {

    createConnection().then(async () => {
        
        
        new UserRoutes(app)
        new ShippingRoutes(app)


        app.use((req, res) => {
            res.status(404).json(new Erro().err404());
        });
})
}