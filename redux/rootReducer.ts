import { combineReducers } from 'redux';

import { detailsReducer } from '@/redux/features/details';

const rootReducer = combineReducers({
	details: detailsReducer,
});

export default rootReducer;