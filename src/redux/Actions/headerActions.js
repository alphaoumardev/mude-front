import {
    S_HEADER_CATEGORY, F_HEADER_CATEGORY,
} from '../Types'
import axios from "axios";
// const localToken = localStorage.getItem('token')

export const postActionPayloadError = (type, error) => (
    {
    type: type,
    payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
});
const freeAccess ={ headers: {'Content-Type': 'application/json'}}

// const config = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Token ${localToken}`,
//         'Accept': 'application/json'
//     }
// }

export const getHeaderCategoriesAction = ()=> async dispatch =>
{
    try
    {
        await axios.get('/api/mptt-categories/').then((res)=>
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

