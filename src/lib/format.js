const UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];


function formatBytes(bytes) {
  let value = bytes;
  let unit = 0;

  while (value >= 1024 && unit < UNITS.length - 1) {
    value = value / 1024;
    unit = unit + 1;
  }

  if (unit === 0) return value + ' B';

  return value.toFixed(1) + ' ' + UNITS[unit];
}

module.exports = { formatBytes };