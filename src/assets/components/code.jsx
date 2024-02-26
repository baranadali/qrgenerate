import {useContext, MainContext} from './../context/main-context.js'
import QRCode from "react-qr-code";
import { useRef, useState, createRef, useEffect } from 'react'
import { useScreenshot } from 'use-react-screenshot'


export default function Code() {
    const {links} = useContext(MainContext)

    const ref = useRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const downloadRef = createRef(null)

    useEffect(() => {
        if (image) {
            downloadRef.current.click()
        }
    }, [image])

    const getImage = () => takeScreenshot(ref.current)

    return (
        <div className="w-full flex flex-col gap-10">
            <div ref={ref} className='w-full rounded-md border-2 border-gray-medium py-20 flex items-center justify-center text-gray-400 text-sm'>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "220px", width: "100%" }}
                    value={links} fgColor="#121212"
                    bgColor="#ececec" level="M"
                    viewBox={`0 0 256 256`}
                />
            </div>
            <div>
                <a onClick={getImage} className="w-full h-12 rounded-md flex items-center justify-center bg-white text-black cursor-pointer text-sm">
                    Download Code
                </a>
                {image && (
                    <a ref={downloadRef } href={image} download="qr-code.png"></a>
                )}
            </div>
        </div>
    )
}