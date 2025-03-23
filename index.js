// run `node index.js` in the terminal

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/search');
});

// 處理 GET 請求，顯示搜尋表單
app.get('/search', (req, res) => {
  res.render('search', { query: null });
});

// 處理 POST 請求，處理搜尋查詢並顯示結果
app.post('/search', (req, res) => {
  const userInput = req.body.q || '';
  res.render('search', { query: userInput });
});

app.listen(3000, () => {
  console.log('Reflected XSS server running on http://localhost:3000');
});
