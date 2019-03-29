import { createConnection } from 'typeorm'
import UserRoutes from './UserRoutes'
import ShippingRoutes from './ShippingRoutes'
import LogsRoutes from './LogsRoutes'
import { Error } from '../models/Errors'


export default (app:any) => {

    createConnection().then(async () => {
        
        
        new UserRoutes(app)
        new ShippingRoutes(app)
        new LogsRoutes(app)


        app.use((req, res) => {
            res.status(404).json(new Error().err404());
        });
})
}