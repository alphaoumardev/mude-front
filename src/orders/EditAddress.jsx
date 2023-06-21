import {Popover} from '@headlessui/react'
import { Country, State, City }  from 'country-state-city';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addAddress} from "../redux/Actions/orderAction.js";

const EditAddress =({address})=>
{
    const dispatch = useDispatch();

    const [selectedCountryCode, setSelectedCountryCode] = useState('')
    const [selectedStateCode, setSelectedStateCode] = useState('')
    const [selectedCityCode, setSelectedCityCode] = useState('')
    //This is the list of countries
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() =>
    {
        setCountries(Country.getAllCountries())
        setStates(State.getStatesOfCountry(`${selectedCountryCode}`))
        setCities(City.getCitiesOfState(`${selectedCountryCode}`,`${selectedStateCode}`))
    }, [dispatch, selectedCountryCode, selectedStateCode, selectedCityCode])

    const [nickname, setNickname] = useState(address?.nickname);
    const [country, setCountry] = useState(address?.country);
    const [state, setState] = useState(address?.state);
    const [zip, setZip] = useState( address?.zip);
    const [city, setCity] = useState(address?.city);
    const [street, setStreet] = useState(address?.street)
    const [details, setDetails] = useState(address?.details);
    const [order_note, setOrder_note] = useState(address?.order_note);
    const {customer} = useSelector(state=>state.authReducer);
    // console.log(country, address?.state, zip, city, street, details, order_note, )

    const onSubmit = (e) =>
    {
        e.preventDefault();
        dispatch(addAddress(customer?.id, nickname, country, state, zip, city, street, details, order_note))
        // return navigate('/mude/order/detail')
        window.location.reload()
    }
    // console.log(address)
    return (
        <div className="flex items-center items-center">
            <Popover className="relative items-center justify-center">
                <Popover.Button className="text-blue-600"><h3>Update</h3></Popover.Button>

                <Popover.Panel focus={true} unmount={true} className="absolute z-10">
                    <form onSubmit={onSubmit} method="POST">
                        <div className="w-80 shadow sm:rounded-md sm:overflow-hidden">
                            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                <div>
                                    <h3 className="text-lg leading-6 font-medium ">Shipping Address</h3>
                                </div>

                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Nickname
                                        </label>
                                        <input
                                            required
                                            onChange={(e) =>setNickname(e.target.value)}
                                            defaultValue={address?.nickname}
                                            // value={address?.nickname}
                                            type="text"
                                            name="nickname"
                                            id="nickname"
                                            autoComplete="nickname"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Country
                                        </label>
                                        <select
                                            defaultValue={address?.country}
                                            autoComplete="country-name"
                                            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required={true}  onChange={(e)=>{setSelectedCountryCode(e.target.value.split(',')[1]); setCountry(e.target.value.split(',')[0]) }} >
                                            {countries?.map((pays, index)=>
                                                <option key={index}
                                                        defaultValue={address?.city}
                                                        value={[pays.name, pays.isoCode]}>{pays.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 ">
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                            State / Province
                                        </label>
                                        <select
                                            defaultValue={address?.state}

                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required={true} onChange={(e)=>{setSelectedStateCode(e.target.value.split(',')[1]); setState(e.target.value.split(',')[0])}}>
                                            {states?.map((province, index)=>
                                                <option key={index}
                                                        defaultValue={address?.state}
                                                        value={[province.name, province.isoCode]} >{province.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <select
                                            defaultValue={address?.city}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required={true} onChange={(e)=>{setSelectedCityCode(e.target.value.split(',')[0]); setCity(e.target.value.split(',')[1])}} >
                                            <option value="">Select City</option>
                                            {cities?.map((ville, index)=>
                                                <option key={index}
                                                        defaultValue={address?.city}
                                                        value={[ville.isoCode, ville.name]}>{ville.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Street address
                                        </label>
                                        <input
                                            defaultValue={address?.street}
                                            type="text"
                                            onChange={(e)=>setStreet(e.target.value)}
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            Zip/Postal code
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={address?.zip}
                                            onChange={(e)=>setZip(e.target.value)}
                                            name="postal-code"
                                            id="postal-code"
                                            placeholder="210012"
                                            autoComplete="postal-code"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Address details
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={2}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="Here..."
                                            defaultValue={address?.details}
                                            onChange={(e)=>setDetails(e.target.value)}
                                        />
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Note to the suplier about your order
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={2}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="Here..."
                                            defaultValue={''}
                                            onChange={(e)=>setOrder_note(e.target.value)}
                                        />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>

                    {/*<img src="/solutions.jpg" alt="" />*/}
                </Popover.Panel>
            </Popover>
        </div>
    )
}
export default EditAddress
