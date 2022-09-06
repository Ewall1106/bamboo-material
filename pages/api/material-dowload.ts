import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

import type { NextApiRequest, NextApiResponse } from 'next'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const query: any = req.query

  const result = await db.collection('materials').findOne({ _id: new ObjectId(query.id) })

  const { download = 0 } = result
  db.collection('materials').findOneAndUpdate(
    { _id: new ObjectId(query.id) },
    { $set: { download: download + 1 } }
  )

  return res.status(200).json(result)
}

export default handler
