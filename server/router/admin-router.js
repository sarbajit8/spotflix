const express = require('express');
const adminControllers = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-Middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

const router = express.Router();


router.route('/users').get(authMiddleware,adminMiddleware,adminControllers.getAllUsers);
router.route('/users/:id').get(authMiddleware,adminMiddleware,adminControllers.getUserById);
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,adminControllers.updateUserById);

router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminControllers.deleteUsersById);
router.route('/contacts').get(authMiddleware,adminControllers.getAllContacts);


module.exports = router;