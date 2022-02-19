const app = require('./src/app');
const Logger = require('./src/utils/logger');

const port = process.env.PORT || 4000;

const startApp = () => {
    app.listen(port, () => console.log(`Api listening on port ${port}!`));
}

startApp();

process.on('uncaughtException', (err) => {
    Logger.log(err);
    process.exit(1);
});

process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
    process.exit(1);
});
