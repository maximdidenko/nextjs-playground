import { MongoClient } from 'mongodb';

export async function connectDB() {
  const client = await MongoClient.connect(
    'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const response = await db.collection(collection).insertOne(document);

  return response;
}

export async function getAll(client, collection, filter = {}) {
  const db = client.db();
  const comments = await db.collection(collection).find(filter).toArray();

  return comments;
}
