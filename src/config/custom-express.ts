import * as express from 'express'
import * as bodyParser from 'body-parser'
import routes from '../routes/routes'
import * as expressValidator from 'express-validator'
import * as swaggerUi from 'swagger-ui-express'
var morgan = require('morgan');
var logger = require('../services/logger.js');
const swaggerDocument = require('../../documentation/swagger.json')

const app = express();

app.use(morgan("common", {
    stream: {
      write: function(mensagem){
          logger.info(mensagem);
      }
    }
  }));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressValidator())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app)

export default app