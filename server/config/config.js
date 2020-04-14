const sessionOptions = {
  secret: 'express-session-secret',
  resave: 'false',
  saveUninitialized: 'false',
  cookie: {}
}
// const connString = "mongodb+srv://sabeel1:kZiZCUmCzazZclow@cluster0-mf5km.mongodb.net/eventsdb";
// const connString = "mongodb+srv://sabeel1:kZiZCUmCzazZclow@cluster0-mf5km.mongodb.net/eventsdb";
const connString = "mongodb://localhost:27017/eventsdb";

module.exports = {
  authentication: {
    jwtSecret: 'jwtSecret',
    TTL: 3600 * 2
  },
  sessionOptions: sessionOptions,
  connectionString: connString,

}