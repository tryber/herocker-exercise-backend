module.exports = (err, _req, res, _next) => {
    console.log(err);
    res.status(500).json({ message: 'Deu bom não, erro interno' });
};