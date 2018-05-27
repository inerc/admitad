import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import config from './api/config';


export function* watcherSaga() {
    yield takeLatest("REQUEST_IMAGE", workerSaga);
}


function* workerSaga() {
    try {
        const response = yield call(axios.get, `${config.getApi}?api_key=${config.secretKey}`);
        const image = response.data.data.image_original_url;
        yield put({ type: "IMAGE_SUCCESS", image });

    } catch (error) {
        yield put({ type: "IMAGE_FAILURE", error });
    }
}