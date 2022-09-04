import { connectToDatabase } from '@/lib/mongodb'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { db } = await connectToDatabase()

  const movies = await db
    .collection('materials')
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray()

  res.json(movies)
}
