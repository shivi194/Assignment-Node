const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()
let ID = 1
app.use(express.urlencoded({ extended: true }))

app.use(morgan('tiny'))
app.use('/static/', express.static(path.join(__dirname, 'static')))

let blogs = []

app.route('/data')
    .get((req, res) => {
        // console.log(req.query)
        if (req.query.mode == 'CSR') {
            res.send({ 'blogs': blogs })
        } else {
            data = { 'blogs': blogs }
            res.render(path.join(__dirname, 'views/blogging.hbs'), data)
        }
    })

app.get('/', (req, res) => {
    data = { 'blogs': blogs }
    console.log('/ render SSR', req.params)
    res.render(path.join(__dirname, 'views/blogging.hbs'), data)
})


app.route('/form')
    .post((req, res) => {
        let data = req.body
        let mode = data.mode
        delete data.mode
        data['id'] = ID 
        data['date']=new Date();
        blogs.push(data)
        ID += 1
        if (mode == 'CSR') {
            data = { 'blogs': blogs }
            res.send(data)
        }
        else {
            data = { 'blogs': blogs }
             res.render(path.join(__dirname, 'views/blogging.hbs'), data)
        }

    })
    .get((req, res) => {

        data = { 'blogs': blogs }
        console.log(data)
        res.redirect('/')
    })

app.route('/delete/:id').get((req, res) => {
    let id  = (req.params.id)
    for(let i=0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs.splice(i,1)
            break
        }
    }
    console.log(blogs)
    if (req.body.mode == 'CSR') {
        res.send()
    }
    else {
        res.redirect('/')
    }
})

app.route('/down/:id').get((req, res) => {
    let c=0
    let { id } = (req.params)
    if (id==0){
        res.redirect('/')
    }
    for(let i=0;i<blogs.length-1;i++){
        if(blogs[i].id==id){
            const tmp=blogs[i+1]
            blogs[i+1]=blogs[i]
            blogs[i]=tmp
            break
        }
    }
    if (req.body.mode == 'CSR') {
        res.send(200)
    }
    else{
        res.redirect('/')
    }

})
app.route('/up/:id').get((req, res) => {
    let c=0
    let { id } = (req.params)
    if (id==0){
        res.redirect('/')
    }
    for(let i=1;i<blogs.length;i++){
        if(blogs[i].id==id){
            const tmp=blogs[i-1]
            blogs[i-1]=blogs[i]
            blogs[i]=tmp
            break
        }
    }
    if (req.body.mode == 'CSR') {
        res.send(200)
    }
    else{
        res.redirect('/')
    }

})

app.post('/update',(req,res)=>{
    mode=(req.body.mode)
    let data= req.body
    delete data['mode']
    data['date']=new Date();
    // console.log('update',data)
    let id = req.body.id
    for(let i=0;i<blogs.length;i++){
        if(blogs[i].id==id){
            blogs[i]=data
            break
        }
    }
    if (mode == 'CSR') {
        console.log('CSR')
        res.send({'blogs':blogs})
    }
    else{
        res.redirect('/')
    }
})


module.exports = app