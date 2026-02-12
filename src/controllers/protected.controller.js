
async function hello(req, res) {
    res.json({
        msg:"Hola mundo"
    });
}

module.exports = { hello };
