const router = require('express').Router();
const { logger } = require('../../../lib/logger');
const auth = require('../../../middleware/check-auth');
const s3File = require('../../../lib/reads3File');

router.get('/allPrograms', auth.authController, async (req, res) => {
    try {
        logger.info('--- diksha emrolment programData api ---');
        let timePeriod = req.body.timePeriod;
        var fileName = `diksha_tpd/enrolment_progress/all_programs.json`;
        let jsonData = await s3File.readFileConfig(fileName);
        let fileMetaData = await s3File.getFileMetaData(fileName);
        
        logger.info('--- diksha emrolment programData api response sent ---');
        
        res.send({ data: jsonData, downloadData: jsonData, fileMetaData });
    } catch (e) {
        logger.error(`Error :: ${e}`)
        res.status(500).json({ errMessage: "Internal error. Please try again!!" });
    }
})

module.exports = router;