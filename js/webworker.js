function setTimeDO() {
  postMessage('done');
  setTimeout(setTimeDO, 1000);
}

setTimeDO();
