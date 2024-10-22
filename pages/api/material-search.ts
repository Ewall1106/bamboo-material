import { connectToDatabase } from '@/lib/mongodb'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  total: number
  list: any[]
}

export const handleMaterial = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { db } = await connectToDatabase()
  const { name, iszh, sortIndex, type, pageSize, pageNo } = req.body

  // https://www.mongodb.com/docs/atlas/atlas-search/text/
  // https://www.mongodb.com/docs/atlas/atlas-search/create-index/#std-label-ref-create-index
  // https://www.practical-mongodb-aggregations.com/examples/full-text-search/compound-text-search.html
  const pipeline: any = []

  if (name) {
    pipeline.push({
      $search: {
        index: 'default', // need atlas search index
        compound: {
          should: [
            {
              text: {
                path: iszh ? 'name_zh' : 'name',
                query: name,
                fuzzy: {
                  maxEdits: 1,
                  prefixLength: 2
                }
              }
            },
            {
              text: {
                path: iszh ? 'desc_zh' : 'desc',
                query: name,
                fuzzy: {
                  maxEdits: 1,
                  prefixLength: 2
                }
              }
            }
          ]
        }
      }
    })
  }
  if (type) {
    pipeline.push({
      $match: {
        type
      }
    })
  }
  pipeline.push({
    $match: {
      isOpen: true
    }
  })
  if (sortIndex === 0) {
    pipeline.push({
      $sort: {
        createdAt: -1
      }
    })
  }
  if (sortIndex === 1) {
    pipeline.push({
      $sort: {
        download: -1
      }
    })
  }
  // https://www.mongodb.com/docs/manual/reference/operator/aggregation/facet/
  // https://stackoverflow.com/questions/56462672/formatting-data-after-facet-aggregation-in-mongodb
  pipeline.push({
    $facet: {
      metadata: [{ $count: 'total' }],
      list: [
        {
          $skip: pageSize * (pageNo - 1)
        },
        {
          $limit: pageSize
        },
        {
          $project: {
            __v: 0,
            schema: 0,
            projectSchema: 0
          }
        }
      ]
    }
  })
  pipeline.push({
    $project: {
      total: { $arrayElemAt: ['$metadata.total', 0] },
      list: 1
    }
  })

  const result = await db.collection('materials').aggregate(pipeline).toArray()

  return res.status(200).json(result[0])
}

export default handleMaterial
