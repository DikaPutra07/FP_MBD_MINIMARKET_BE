const router = require('express').Router();
const memberController = require('../controllers/memberController');

router.get('/', memberController.getAllMember);
router.get('/:id', memberController.getMemberById);
router.post('/', memberController.createMember);
router.put('/:id', memberController.updateMember);
router.delete('/:id', memberController.deleteMember);

module.exports = router;