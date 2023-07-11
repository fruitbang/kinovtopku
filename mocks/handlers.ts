import { rest } from 'msw'

import images from './images'
import dbData from './kinovtopku'

export const handlers = [
  rest.get('/movies', (req, res, ctx) => {
    const data = dbData

    return res(ctx.status(200), ctx.json(data))
  }),

  rest.get('/movies/:id', (req, res, ctx) => {
    const id = req.params.id
    const data = dbData.find((el) => el.id === Number(id))

    return res(ctx.status(200), ctx.json(data))
  }),

  rest.get('/movies/:movieDir/:imgId', async (req, res, ctx) => {
    const movieDir = req.params.movieDir
    const imgId = req.params.imgId

    // @ts-ignore
    const image = await fetch(images[movieDir][`${movieDir}${imgId}`]).then(
      (res) => res.arrayBuffer()
    )
    return res(
      ctx.status(200),
      ctx.set('Content-Length', image.byteLength.toString()),
      ctx.set('Content-Type', 'image/png'),
      ctx.body(image)
    )
  }),
]
