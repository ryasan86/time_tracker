const router = require('express').Router();
const controllers = require('./controllers');

router.route('/api/timers').get(controllers.getTimers);
router.route('/api/timers').post(controllers.createTimer);
router.route('/api/timers/start').post(controllers.startTimer);
router.route('/api/timers/stop').post(controllers.stopTimer);
router.route('/api/timers').put(controllers.updateTimer);
router.route('/api/timers').delete(controllers.deleteTimer);

module.exports = router;
