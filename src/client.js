export const getTimers = success => {
  fetch(`/api/timers`, {
    headers: { Accept: 'application/json' }
  })
    .then(res => {
      return res.json();
    })
    .then(success)
    .catch(err => {
      console.error(err);
    });
};
