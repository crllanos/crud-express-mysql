const controller = {}

controller.list = (req, res) => {
    /*
    req.getConnection((err, conn) =>{
        if(err) throw new Error(err);
        conn.query("SELECT * FROM customers", (db_err, rows)=>{
            if(db_err) res.json(db_err);
            console.log(customers)
            res.render('customers', customers)
        });
    })
    */
    return new Array("one", "dos", "3")
}

module.exports = controller;