import { combineReducers } from 'redux';

import { detailsReducer } from '@/store/features/details';

const rootReducer = combineReducers({
	details: detailsReducer,
});

export default rootReducer;