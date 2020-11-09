import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  connect(res);
  //res.status(200).json({ name: "John Doe" });
};

async function connect(res: NextApiResponse) {
  const uri =
    "mongodb+srv://admin:1234@cluster0.qbyhr.mongodb.net/sample_mflix?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  await client.connect();

  const database = client.db("sample_mflix");
  const collection = database.collection("movies");

  const query = { title: "Back to the Future" };
  const movie = await collection.findOne(query);

  res.status(200).json(movie);
  console.log(movie);
}
