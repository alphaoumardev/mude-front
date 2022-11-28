import {
    S_HEADER_CATEGORY, F_HEADER_CATEGORY,
} from '../Types'
import axios from "axios";

export const postActionPayloadError = (type, error) => ({
    type: type,
    payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
});
const signconfig ={ headers: {'Content-Type': 'application/json'}}

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`,
        'Accept': 'application/json'
    }
}

export const getHeaderCategoriesAction = ()=> async dispatch =>
{
    try
    {
        await axios.get('/api/catename/', config).then((res)=>
        {
            dispatch(
                {
                    type: S_HEADER_CATEGORY,
                    payload: res.data,
                })
            // console.log(res.data);
        })
    }
    catch (error)
    {
        dispatch(postActionPayloadError(F_HEADER_CATEGORY, error))
        console.error(error)
    }
}

