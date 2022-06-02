const app = require('./app');
require('dotenv/config');
// hoi
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
