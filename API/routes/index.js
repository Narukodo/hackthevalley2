import endpoint from './azuretest'
import health from './health'
import axios from 'axios'

export const router = (app) => {
  app.post('/health', 
  (req, res, next) => {
    console.log('middleware...')
    return next(req, res)
  }, 
  (req, res) => res.send('posted'))

  app.get('/', (req, res) => {
    res.send('getting stuff')
  })

  app.get('/notes', (req, res) => endpoint(req, res), (req, res) => res.send('successfully sent!'))
  app.get('/health', (req, res) => health(req, res))
}

export default router