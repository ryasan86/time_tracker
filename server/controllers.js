const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, './data.json');

module.exports = {
  getTimers: (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  },
  createTimer: (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      const timers = JSON.parse(data);
      const newTimer = {
        title: req.body.title,
        project: req.body.project,
        id: req.body.id,
        elapsed: 0,
        runningSince: null
      };
      timers.push(newTimer);
      fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
        res.setHeader('Cache-Control', 'no-cache');
        res.json(timers);
      });
    });
  },
  updateTimer: (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      const timers = JSON.parse(data);
      timers.forEach(timer => {
        if (timer.id === req.body.id) {
          timer.title = req.body.title;
          timer.project = req.body.project;
        }
      });
      fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
        res.json({});
      });
    });
  },
  startTimer: (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      const timers = JSON.parse(data);
      timers.forEach(timer => {
        if (timer.id === req.body.id) {
          timer.runningSince = req.body.start;
        }
      });
      fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
        res.json({});
      });
    });
  },
  stopTimer: (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      const timers = JSON.parse(data);
      timers.forEach(timer => {
        if (timer.id === req.body.id) {
          const delta = req.body.stop - timer.runningSince;
          timer.elapsed += delta;
          timer.runningSince = null;
        }
      });
      fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
        res.json({});
      });
    });
  },
  deleteTimer: (req, res) => {
    fs.readFile(DATA_FILE, (err, data) => {
      let timers = JSON.parse(data);
      timers = timers.filter(timer => timer.id !== req.body.id);
      fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4));
      res.json({});
    });
  }
};
