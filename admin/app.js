import AdminJS from 'adminjs'
import express from 'express'
import Plugin from '@adminjs/express'
import Adapter, { Database, Resource } from '@adminjs/sql'

AdminJS.registerAdapter({
  Database,
  Resource,
})

const start = async () => {
  const app = express()

  const db = await new Adapter('mysql', {
    user: '57ytfo5dl0ttyh0x2wnm',
    password: 'pscale_pw_3AXeDHX1ubuHkzkRia1is6bZwXzz94YTkikLImpOa4h',
    host: 'aws.connect.psdb.cloud',
    database: 'next-test',
    ssl: {
      rejectUnauthorized: true,
    }
  }).init();

  const admin = new AdminJS({
    databases: [db]
  });

  admin.watch()

  const router = Plugin.buildRouter(admin)

  app.use(admin.options.rootPath, router)

  app.listen(3001, () => {
    console.log('admin started at http://localhost:3001/admin')
  })
}

start()