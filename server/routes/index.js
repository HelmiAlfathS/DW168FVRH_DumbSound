const express = require('express');
const router = express.Router();
const { auth, superUser } = require('../middleware/middleware');
const { uploadImage } = require('../middleware/upload');
const { register, login } = require('../controllers/auth');
const {
  getCategory,
  addCategory,
  deleteCategory,
} = require('../controllers/category');
const {
  getArtist,
  detailArtist,
  addArtist,
  deleteArtist,
} = require('../controllers/artist');

const {
  getSong,
  addSong,
  deleteSong,
  getAllSong,
} = require('../controllers/song');
const {
  read: findUsers,
  readOne: findUser,
  deleteUser: deleteUser,
} = require('../controllers/user.js');

const {
  getTransactions,
  createTransaction,
  editTransaction,
  deleteTransaction,
  OneTransactions,
} = require('../controllers/transaction');

// ------------- ROUTINGS ----------------------------

router.get('/users', findUsers); //
router.get('/user/:id', findUser);
router.delete('/user/:id', superUser, deleteUser);

router.post('/register', register);
router.post('/login', login);

router.get('/category', getCategory);
router.post('/category', auth, addCategory);
// router.put('/category/:id', auth, editCategory);
router.delete('/category/:id', auth, deleteCategory);

router.get('/artist', getArtist);
router.post('/artist', addArtist); //auth, superUser,
router.get('/artist/:id', detailArtist);
// router.put('/film/:id', auth, superUser, editFilm);
router.delete('/artist/:id', auth, superUser, deleteArtist);

router.post('/song', uploadImage('musicThumbnail'), addSong);
router.get('/artist/:id/song', getAllSong); //NEW //AMAN
router.get('/song/:id', getSong); //NEW //aman
router.get('/song', getAllSong); //New //sepertinya pake title lebih oke krn ntar harusnya kita isi title pake  tabel episode lita isi dgn nomor episode (1,2,3 dll), kalau id kan agak aneh
router.delete('/song/:id', deleteSong);

router.get('/transaction', getTransactions);
router.delete('/transaction/:id', auth, superUser, deleteTransaction);
router.post('/transaction', uploadImage('attachement'), createTransaction);
router.put('/transaction/:id', editTransaction);
router.get('/user/:id/transaction', OneTransactions);
module.exports = router;

// router.get('/filmeps', readEpisodes);
