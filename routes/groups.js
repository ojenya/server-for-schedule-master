// router.get('/books', getBooks);
// router.post('/books', createBook);
// router.put('/books/:id', replaceBook);
// router.patch('/books/:id', updateBookInfo); // Функция 'updateBookInfo' будет вызвана только при PATCH-запросе на соответствующий URL
// router.delete('/books/:id', deleteBook);

const router = require('express').Router();

const { getGroups, createGroup } = require('../controllers/groups');
const Group = require('../models/group');



router.get('/', getGroups);
router.post('/', createGroup);

module.exports = router;