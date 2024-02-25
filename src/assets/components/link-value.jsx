import {MainContext, useContext} from './../context/main-context.js'
import { IoMdArrowRoundForward } from "react-icons/io";

export default function LinkValue () {
    const {links, setLinks} = useContext(MainContext)

    return (
        <div className='w-full flex items-center justify-center gap-4 h-12'>
            <input
                className='border-2 border-gray-medium p-2 px-3 text-gray-400 text-sm w-full h-full bg-transparent rounded-md outline-none transition-all focus:border-gray-small'
                type='text'
                placeholder='Enter the link..'
                onChange={(e) => setLinks(e.target.value)}/>
        </div>
    )
}