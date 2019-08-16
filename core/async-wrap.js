// модуль для ассинхронного выполнения функция 

module.exports = fn => (...args) => fn(...args).catch(args[2])