'use strict'

module.exports = {
  DATE_FORMAT: 'yyyy-mm-dd HH:MM:ss.l o',
  DATE_FORMAT_SIMPLE: 'HH:MM:ss.l',

  ERROR_LIKE_KEYS: ['err', 'error'],

  MESSAGE_KEY: 'msg',

  LEVEL_KEY: 'level',

  LEVEL_LABEL: 'levelLabel',

  TIMESTAMP_KEY: 'time',

  LEVELS: {
    default: 'ℹ️',
    60: '☠️',
    50: '❌',
    40: '⚠️',
    30: 'ℹ️',
    20: '🐛',
    10: '👣'
  },

  LEVEL_NAMES: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },

  // Object keys that probably came from a logger like Pino or Bunyan.
  LOGGER_KEYS: [
    'pid',
    'hostname',
    'name',
    'level',
    'time',
    'timestamp',
    'caller'
  ]
}
