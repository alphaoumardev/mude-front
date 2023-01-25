import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../redux/Actions/authActions.js";
import React, {useContext, useEffect, useState} from "react"
import Sidebar from "../components/Sidebar/index.jsx";
import Main from "../containers/Main.jsx";
import {SidebarContext} from "../context/SidebarContext.jsx";
import {useLocation} from "react-router-dom";
import {Button, Card, CardBody, Label, Select} from "@windmill/react-ui";
import {AiFillFileAdd, AiFillLayout} from "react-icons/ai";


// const genders = [
//     { id: 1, title: 'Male' },
//     { id: 2, title: 'Female' },
//     { id: 3, title: 'Secret' },
// ]
const FormTitle = ({ children }) =>
{
    return (
        <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
            {children}
        </h2>
    );
};
const MyAccount = ()=>
{
    const dispatch = useDispatch()
    const {customer} = useSelector(state => state.authReducer)
    // console.log(customer?.user?.id)
    const [nickname, setNickname] = useState(customer?.nickname);
    const [avatar, setAvatar] = useState(customer?.avatar);
    const [contact, setContact] = useState(customer?.contact);
    const [gender, setGender] = useState(customer?.gender);
    const onUpdateInfo = (info) =>
    {
        info.preventDefault()
        dispatch(updateProfile(customer?.user?.id, nickname, contact, gender,avatar))
    }
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
    let location = useLocation()

    useEffect(() =>
    {
        closeSidebar()
    }, [location])

    // console.log(gender)
    return(
        <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <Main>
                    <div className="sm:flex sm:space-x-6">
                        <div className="w-full mt-10 space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <form onSubmit={onUpdateInfo} method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">My Profile</h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                This information will not be displayed publicly you only can see it.
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Name
                                                </label>
                                                <input
                                                    onChange={(e)=>setNickname(e.target.value)}
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    defaultValue={customer?.nickname}
                                                    autoComplete="given-name"
                                                    className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Username
                                                </label>
                                                <input
                                                    disabled
                                                    defaultValue={customer?.user?.username}
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Phone Number
                                                </label>
                                                <input
                                                    onChange={(e)=>setContact(e.target.value)}
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    defaultValue={customer?.contact}
                                                    autoComplete="given-name"
                                                    className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="text-base font-medium text-gray-900">Notifications</label>
                                                <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p>

                                                <div className="flex items-center">
                                                    <input
                                                        id={1}
                                                        type="radio"
                                                        name="male"
                                                        checked={gender==="male"}
                                                        onChange={()=>setGender("male")}
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor={"female"} className="ml-3 block text-sm font-medium text-gray-700">
                                                        Male
                                                    </label>
                                                    <input
                                                        id={2}
                                                        type="radio"
                                                        name="female"
                                                        checked={gender==="female"}
                                                        onChange={()=>setGender("female")}
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor={"female"} className="ml-3 block text-sm font-medium text-gray-700">
                                                        Female
                                                    </label>
                                                    <input
                                                        id={3}
                                                        type="radio"
                                                        name="other"
                                                        checked={gender==="other"}
                                                        onChange={()=>setGender("other")}
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor={"other"} className="ml-3 block text-sm font-medium text-gray-700">
                                                        Other
                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-6">

                                            <div className="col-span-3">
                                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                    About
                                                </label>
                                                <div className="mt-1">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="I'm ..."
                                        defaultValue={''}
                                    />
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">
                                                    Brief description for your profile. URLs are hyperlinked.
                                                </p>
                                            </div>

                                            <div className="col-span-3">
                                                <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                                                <div className="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                                                    <div className="space-y-1 text-center">

                                        <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-12 w-12">
                                            <img src={`http://127.0.0.1:8000/${customer?.avatar}`} alt={""}/>
                                        </span>

                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input
                                                                    onChange={(e)=>setAvatar(e.target.files[0])}
                                                                    id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900"><a href={"/mude/myshippingaddress"}>Update Your Shipping Address</a></h3>
                                        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve your purchases.</p>
                                    </div>

                                </div>
                            </div>

                            <form action="#" method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Provide basic informtion about the job. Be specific with the job title.
                                            </p>
                                        </div>
                                        <fieldset>
                                            <legend className="text-base font-medium text-gray-900">By Email</legend>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-start">
                                                    <div className="h-5 flex items-center">
                                                        <input
                                                            id="comments"
                                                            name="comments"
                                                            type="radio"
                                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="comments" className="font-medium text-gray-700">
                                                            Comments
                                                        </label>
                                                        <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-start">
                                                        <div className="h-5 flex items-center">
                                                            <input
                                                                id="candidates"
                                                                name="candidates"
                                                                type="checkbox"
                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="candidates" className="font-medium text-gray-700">
                                                                Candidates
                                                            </label>
                                                            <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-start">
                                                        <div className="h-5 flex items-center">
                                                            <input
                                                                id="offers"
                                                                name="offers"
                                                                type="checkbox"
                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="offers" className="font-medium text-gray-700">
                                                                Offers
                                                            </label>
                                                            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="mt-6">
                                            <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                                            <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-everything"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-everything" className="ml-3">
                                                        <span className="block text-sm font-medium text-gray-700">Everything</span>
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-email"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-email" className="ml-3">
                                                        <span className="block text-sm font-medium text-gray-700">Same as email</span>
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-nothing"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3">
                                                        <span className="block text-sm font-medium text-gray-700">No push notifications</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Card className="h-48 w-7/12 mt-10">
                            <CardBody>
                                <div className="flex mb-8">
                                    <Button layout="primary" className="mr-3" iconLeft={AiFillFileAdd}>
                                        Publish
                                    </Button>
                                    <Button layout="link" iconLeft={AiFillLayout}>
                                        Save as Draft
                                    </Button>
                                </div>
                                <Label className="mt-4">
                                    <FormTitle>Select Product Category</FormTitle>
                                    <Select className="mt-1">
                                        <option>Electronic</option>
                                        <option>Fashion</option>
                                        <option>Cosmatics</option>
                                        <option>Food and Meal</option>
                                    </Select>
                                </Label>
                            </CardBody>
                        </Card>
                    </div>
                </Main>
            </div>
        </div>
    )
}
export  default MyAccount
