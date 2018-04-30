import uuid from 'uuid';

// milliseconds to human time
export const renderElapsedString = (elapsed, runningSince) => {
  let totalElapsed = elapsed;
  if (runningSince) {
    totalElapsed += Date.now() - runningSince;
  }

  return millisecondsToHuman(totalElapsed);
};

const millisecondsToHuman = ms => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2)
  ].join(':');

  return humanized;
};

const pad = (numberString, size) => {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
};

// create new timer
export const newTimer = (attrs = {}) => {
  const timer = {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: uuid.v4(),
    elapsed: 0
  };

  return timer;
};
