const app = require('./app');

const port = app.get('port');
app.listen(port, () => console.log(`Server Running on http://localhost:${port}`));
