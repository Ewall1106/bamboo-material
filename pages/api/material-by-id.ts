import { ObjectId } from 'mongodb'
import { connectToDatabase } from '@/lib/mongodb'

import type { NextApiRequest, NextApiResponse } from 'next'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase()
  const { id }: any = req.query

  if (!id) {
    return res.status(500).json({ msg: 'id is necessary' })
  }

  const result = await db.collection('materials').findOne({ _id: new ObjectId(id) })

  return res.status(200).json(result)
}

export default handler
