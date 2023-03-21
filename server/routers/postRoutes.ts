import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import Post from '../models/post'

dotenv.config()

const postRoutes = express.Router()

postRoutes.route('/').get((req, res) => {res.send('HEY')})

export default postRoutes