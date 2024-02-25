import {useContext, MainContext} from './../context/main-context.js'
import QRCode from "react-qr-code";
export default function Code() {
    const {links} = useContext(MainContext)
    return (
        <div className='w-full rounded-md border-2 border-gray-medium py-20 flex items-center justify-center text-gray-400 text-sm'>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "220px", width: "100%" }}
                value={links} fgColor="#121212"
                bgColor="#ececec" level="M"
                viewBox={`0 0 256 256`}
            />
        </div>
    )
}