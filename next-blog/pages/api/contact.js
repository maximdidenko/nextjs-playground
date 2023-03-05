import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || !message) {
      res.status(422).json({ message: 'Invalid input data' });
      return;
    }

    let client;
    let result;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority'
      );
    } catch (err) {
      res.status(500).json({ message: 'Unable to connect to DB' });
      return;
    }

    const db = client.db();
    try {
      result = await db
        .collection('feedback')
        .insertOne({ email, name, message });
    } catch (error) {
      res.status(500).json({ message: 'Unable to save data' });
      return;
    }

    client.close();

    res.status(201).json({ email, name, message, id: result.insertedId });
  }
}

export default handler;
