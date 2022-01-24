import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects'
import { baseUrl } from '../../Utils/appConstants';
import { GET_DISCOVER, GET_DISCOVER_SUCCESS } from '../actionTypes/actionTypes';

function* discoverSagaWorker(action){
    console.log("=========>",action)

    const{headerToken}=action.payload;

    const{email,password} = action.payload;

    try {
        const res = yield axios.get(`${baseUrl}books`,{params:{dateType:"monthly"},
        headers:{
            'x-access-token':headerToken
        }}
        )
        if (res.data.isSuccess) {
            yield put({
                type:GET_DISCOVER_SUCCESS, payload:res.data.data
            })

            // yield put({
            //     type:SET_TOKEN,
            //     payload:{token:res.data.data.token,userId:res.data.data._id}
            // })
        }
        else{

        }
        
    } catch (error) {
        console.log(error);
        // if (error.response.data.statusCode==400) {
        //     alert(error.response.data.error)
        // }
        
    }

}
export function* discoverSagaWatcher(){
    yield takeEvery(GET_DISCOVER,discoverSagaWorker);
}