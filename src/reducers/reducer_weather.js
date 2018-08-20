import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type){
	case FETCH_WEATHER: 
	  return state.concat([action.payload.data]);
	  //The 3 dots represent that it takes all of the entries outisde of it and adds into the new array. Like flattening it
	  //The most important thing is to not mutate the existing state over time but return a new state 
	  return [ action.payload.data, ...state];
	}
  
	return state;
}