import app from './config/custom-express'
const port = require('./config/env_vars').port

app.listen(port, () => console.log(`Server running on port ${port}`))