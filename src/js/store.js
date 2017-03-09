import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"

import Reducer from "./reducers"
const middleware = applyMiddleware(logger())
export default createStore(Reducer, middleware)