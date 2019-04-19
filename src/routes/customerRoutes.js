const router = require('express').Router();

const customerController = require('../controllers/customerController');

//router.get('/', customerController.list); // @TODO Paso de parámetros??
//router.get('/', (req, res) => { customerController.list(req, res) })
router.get('/', (req, res) => { 
    req.getConnection((err, conn) =>{
        if(err) throw new Error(err);
        conn.query("SELECT * FROM customers", (db_err, customers)=>{
            if(db_err) res.json(db_err);
            res.send(customers)
            //res.render('customers', customers)
        });
    })
    
    return new Array("one", "dos", "3")

 })





//router.post('/add', customerController.save);
//router.get('/update/:id', customerController.edit);
//router.post('/update/:id', customerController.update);
//router.get('/delete/:id', customerController.delete);

module.exports = router;
