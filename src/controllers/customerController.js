const controller = {}

controller.list = (req, res) => {
    console.log(res.body);
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
    req.getConnection((err, conn) => {
        if(err) res.json(db_err);
        conn.query("INSERT INTO customers SET ?"
                 , [req.body]
                 , (err, customer) => {
                    res.redirect('/');
                 });
    });
}

module.exports = controller;