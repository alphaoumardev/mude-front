import {useState} from "react";
import {useDispatch} from "react-redux";
import {addReview} from "../redux/Actions/orderAction.js";
import {Rate} from "antd";

export default function ReviewTextArea({customer, id})
{
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const dispatch = useDispatch()
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState(3);
    const addArticleReview = (e)=>
    {
        e.preventDefault();
        dispatch(addReview(customer?.id, rate, id, comment))
    }
    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
                <img
                    className="inline-block h-10 w-10 rounded-full"
                    src={`http://127.0.0.1:8000/${customer?.avatar}`}
                    alt=""
                />
            </div>
            <div className="min-w-0 flex-1">
                <form onSubmit={addArticleReview}>
                    <div className="border-b border-gray-200 focus-within:border-indigo-600">
                        <label htmlFor="comment" className="sr-only">
                            Add your comment
                        </label>
                        <textarea
                            rows={3}
                            name="comment"
                            id="comment"
                            onChange={(e)=>setComment(e.target.value)}
                            className="block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm"
                            placeholder="Add your comment..."
                            defaultValue={''}
                        />
                    </div>
                    <div className="pt-2 flex justify-between">
                        <div className="flex items-center space-x-5">
                            <div className="flow-root">
                                {/*<button type="button" className="-m-2 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500">*/}
                                {/*    <PaperClipIcon className="h-6 w-6" aria-hidden="true" />*/}
                                {/*    <span className="sr-only">Attach a file</span>*/}
                                {/*</button>*/}
                                <span>
                                        <Rate tooltips={desc}  onChange={setRate} value={rate} />
                                    {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ''}
                                </span>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
