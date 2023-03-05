import { connectDB, insertDocument, getAll } from '../../../helpers/db';

async function handler(req, res) {
  let client;

  try {
    client = await connectDB();
  } catch (err) {
    res.status(500).json({ message: 'Unable to connect to DB' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    const { eventId } = req.query;
    let response;

    try {
      response = await insertDocument(client, 'comments', {
        email,
        name,
        text,
        eventId,
      });

      res.status(201).json({ id: response.insertedId, email, name, text });
    } catch (err) {
      res.status(500).json({ message: 'Unbale to insert document' });
    }
  } else if (req.method === 'GET') {
    let comments;
    try {
      comments = await getAll(client, 'comments', {
        eventId: req.query.eventId,
      });
      res.status(200).json({ comments });
    } catch (err) {
      res.status(500).json({ message: 'Unable to get data' });
    }
  }
  client.close();
}

export default handler;
