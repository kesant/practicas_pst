const {Router}=require('express');
const router = Router();

const {getEstudiantes,getEstudiante,postEstudiante,putEstudiante,deleteEstudiante} = require('../controllers/estudiantesControl.js');

router.route('/').get(getEstudiantes)

module.exports = router
