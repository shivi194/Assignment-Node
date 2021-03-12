const app = require('./server.js')
app.set('view engine','hbs')

// const port = 5000;

app.listen(4444,()=>{
    console.log('Server started at http://localhost:4444')
})