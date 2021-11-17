import {postRequest} from './utils';

export const getFinalPredictApi = () => postRequest('/predict-performance/');
