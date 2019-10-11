module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/oneloverewards',
    TEST_DB_URL: process.env.TEST_DB_URL,
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret'
}