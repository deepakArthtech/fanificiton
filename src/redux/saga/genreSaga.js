import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects'
import { baseUrl } from '../../Utils/appConstants';
import { GET_GENRE_CATEGORY, GET_GENRE_CATEGORY_SUCCESS } from '../actionTypes/actionTypes';


function* categorySagaWorker(action){
    console.log("=========>",action)

    const{headerToken}=action.payload;

    try {
        const res = yield axios.get(`${baseUrl}categories`,
        {headers:{
            'x-access-token':headerToken
        }}
        )

        console.log('CategoryResponse',res);
        if (res.data.isSuccess) {
            yield put({
                type:GET_GENRE_CATEGORY_SUCCESS, payload:res.data.data
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
export function* categorySagaWatcher(){
    yield takeEvery(GET_GENRE_CATEGORY,categorySagaWorker);
}