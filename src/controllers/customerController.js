const controller = {}

controller.list = (req, res) => {res.send(new Array("one", "dos", "3"))}

module.exports = controller;