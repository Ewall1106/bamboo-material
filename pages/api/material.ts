import { connectToDatabase } from '@/lib/mongodb'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  total: number
  list: any[]
}

export const handleMaterial = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { db } = await connectToDatabase()
  const { pageSize, pageNo, _id, name, ...others } = req.body

  // https://www.mongodb.com/docs/v4.4/reference/method
  const total = await db.collection('materials').count()
  const list = await db
    .collection('materials')
    .find({})
    .sort({ updatedAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (pageNo - 1))
    .toArray()

  return res.status(200).json({
    total,
    list
  })
}

export default handleMaterial
