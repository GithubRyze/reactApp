module.exports = {
    port: 8001,
    url: '//localhost:/note',
    keepAlive: false,
    session: {
        name: 'SID',
        secret: 'SID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000
        }
    }
};