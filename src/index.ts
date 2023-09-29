import express from 'express';
import bodyParser from 'body-parser';

import * as dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(bodyParser.json())

import * as db from './database'
import { CreateCommentRequest, UpdateCommentRequest, DeleteCommentRequest } from './types';

app.get('/comments', async (_, res) => {
  const query = 'SELECT * from comments'
  try {
    const result = await db.query(query)
    const comments = result.rows
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch all comments.", error })
  }
})

app.post<{}, any, CreateCommentRequest>('/comments', async (req, res) => {
  const { user, content } = req.body
  const query = `INSERT INTO comments ("user", content) VALUES ('${user}', '${content}')`
  try {
    await db.query(query)
    res.status(200).json({ message: "Successfully created comment." })
  } catch (error) {
    res.status(500).json({ message: "Failed to create comment.", error })
  }
})

app.patch<UpdateCommentRequest>('/comments/:id', async (req, res) => {
  const { content } = req.body
  const id = Number(req.params.id)
  const query = `UPDATE comments SET content = '${content}' WHERE id = '${id}'`
  try {
    await db.query(query)
    res.status(200).json({ message: `Successfully updated comment ${id}.` })
  } catch (error) {
    res.status(500).json({ message: `Failed to update comment ${id}.`, error })
  }
})

app.delete<DeleteCommentRequest>('/comments/:id', async (req, res) => {
  const id = Number(req.params.id)
  const query = `DELETE FROM comments WHERE id = '${id}'`
  try {
    await db.query(query)
    res.status(200).json({ message: `Successfully deleted comment ${id}.` })
  } catch (error) {
    res.status(500).json({ message: `Failed to delete comment ${id}.`, error })
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  console.log('Server is listening on port 3000!');
  await db.init()
  console.log('Established DB connection!')
})
