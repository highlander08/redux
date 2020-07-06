import {createStore} from 'react-redux'; // cria um estado global para armazenar informaçoes//

import rootReducer from './reducers'

const store = createStore(rootReducer);

export default store;