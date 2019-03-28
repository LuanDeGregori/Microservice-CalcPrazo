import { createConnection } from 'typeorm'
import UserRoutes from './UserRoutes'
import ShippingRoutes from './ShippingRoutes'



export default (app:any) => {

    createConnection().then(async () => {
        
        
        new UserRoutes(app)
        new ShippingRoutes(app)


        //app.use('/teste', (req,res) =>{ res.send("Ok")})

        app.use((req, res) => {
            res.status(404).json({errorCode: 404, msg: 'Pagina não encontrada!'});
        });
})
}