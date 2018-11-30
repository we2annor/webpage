const express = require('express');
const router = express.Router();

router.use((req, res, next) =>{
	console.log(req.method, req.url)
	next()
});

router.get('/', (req, res, next) => {
	res.render('index', {title :'Ernest Annor'})
})

router.get('/story', (req, res, next) => {
	res.render('index', {title :'Ernest Annor'})
})

router.get('/experience',(req, res, next)=>{
	res.render('index', {title :'Ernest Annor'})
})

router.get('/project',(req, res, next)=>{
	res.render('index', {title :'Ernest Annor'})
});

//export default router
