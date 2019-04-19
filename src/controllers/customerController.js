const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        if(err) throw new Error(err);
        conn.query("SELECT * FROM customers", (db_err, customers)=>{
            if(db_err) res.json(db_err);
            console.log(customers)
            res.send(customers)
        });
    })
}

module.exports = controller;