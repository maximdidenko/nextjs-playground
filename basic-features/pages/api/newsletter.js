import { connectDB, insertDocument } from '../../helpers/db';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid use input' });
    }

    let client;

    try {
      client = await connectDB();
    } catch (err) {
      res.status(500).json({ message: 'Connecting to the DB failed' });
      return;
    }

    try {
      await insertDocument(client, 'emails', { email });
      res.status(201).json({ email });
    } catch (err) {
      res.status(500).json({ message: 'Unable to insert document' });
    }

    client.close();
  }
}

export default handler;
