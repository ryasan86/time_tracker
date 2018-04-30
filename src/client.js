module.exports = {
  client: {
    getTimers: success => {
      fetch(`/api/timers`, { headers: { Accept: 'application/json' } })
        .then(checkStatus)
        .then(parseJSON)
        .then(success)
        .catch(err => {
          console.error(err);
        });
    },
    createTimer: data => {
      fetch('/api/timers', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(checkStatus);
    },
    updateTimer: data => {
      fetch('/api/timers', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(checkStatus);
    },
    startTimer: data => {
      fetch('/api/timers/start', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(checkStatus);
    },
    stopTimer: data => {
      fetch('/api/timers/stop', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(checkStatus);
    },
    deleteTimer: data => {
      fetch('/api/timers', {
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(checkStatus);
    }
  }
};

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const error = new Error(`HTTP Error ${res.statusText}`);
    error.status = res.statusText;
    error.response = res;
    console.error(error);
    throw error;
  }
};

const parseJSON = res => {
  return res.json();
};
