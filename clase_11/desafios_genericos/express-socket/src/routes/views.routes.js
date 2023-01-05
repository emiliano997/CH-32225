import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Proyecto con Websocket'
  })
});

router.get('/chat', (req, res) => {
  res.render('chat', {
    title: 'Chat Prueba'
  })
})

export default router;