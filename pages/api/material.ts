import { connectToDatabase } from '@/lib/mongodb'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  total: number
  list: any[]
}

export const handleMaterial = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { db } = await connectToDatabase()
  const { pageSize, pageNo, _id, name, ...others } = req.body

  const count = await db.collection('materials').find({}).toArray()
  const list = await db
    .collection('materials')
    .find({})
    .sort({ updatedAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (pageNo - 1))
    .toArray()

  return res.status(200).json({
    total: count.length,
    list
  })
}

export default handleMaterial
