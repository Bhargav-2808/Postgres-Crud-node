import pg from 'pg';
const Client = pg.Client;
const Pool = pg.Pool;
const URL = "postgres://postgres:12345@localhost:5432/REST-Postgres"


const credentials = {
  user: "postgres",
  host: "localhost",
  database: "REST-Postgres",
  password: "12345",
  port: 5432,
};

const pool = new Pool({
  connectionString: URL,
});

const cli = new  Client(credentials);
// export {
//   query: (text, params) => pool.query(text, params),
// };
export { pool,cli };
