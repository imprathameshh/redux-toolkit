const { configureStore } = require("@reduxjs/toolkit");
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecreame/icecreameSlice");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecreame: icecreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
