const path = require('path');
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const swPath = path.join(__dirname,'sw.js');
const manifestPath = path.join(__dirname, 'manifest.json');

console.log("Dor ",path.join(__dirname, '/static'));

app.prepare()
  .then(() => {
    const server = express()


    server.get('/manifest.json', (req, res) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.sendFile(manifestPath);
    });

    server.get('/service-worker.js', (req, res) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.sendFile(swPath);
    });

    server.use("/static", express.static(__dirname + "/static", {
      maxAge: "365d"
    }));

    server.get('/about-us', (req, res) => {
      const actualPage = '/aboutus'
      // const queryParams = { title: req.params.id }
      app.render(req, res, actualPage)
    })
    server.get('/about-me', (req, res) => {
      const actualPage = '/aboutme'
      // const queryParams = { title: req.params.id }
      app.render(req, res, actualPage)
    })

    server.get('/:cat_name', (req, res) => {
      const actualPage = '/catList'
      const queryParams = { cat_name: req.params.cat_name }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/:cat_name/:pr_name', (req, res) => {
      const actualPage = '/prList'
      const queryParams = { cat_name: req.params.cat_name, pr_name: req.params.pr_name }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })


    server.listen(8001, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:8001')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })