const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) res.json(db_err);
        conn.query("SELECT * FROM customers", (db_err, customers)=>{
            if(db_err) res.json(db_err);
            res.render('customers', {customers});
        });
    })
}

controller.save = (req, res) => {
    console.log(req.body);
    req.send('ok');
}

module.exports = controller;