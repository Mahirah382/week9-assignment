import pg from "pg";

export function connect() {
  const client = new pg.Client({
    connectionString: process.env.DB_CONN,
  });

  client.connect();
  return client;
}