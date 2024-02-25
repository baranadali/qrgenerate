import { useState } from 'react'
import { MainContext, useContext } from './assets/context/main-context.js'

import LinkValue from './assets/components/link-value.jsx'
import Code from './assets/components/code.jsx'
import Footer from './assets/components/footer.jsx'
function App() {


    const [links, setLinks] = useState('')
    const [inputValue, setInputValue] = useState('');

    const data = {
        links, setLinks, inputValue, setInputValue
    }

  return (
      <MainContext.Provider value={data}>
          <div className='h-screen w-screen bg-gray-large text-white'>
              <div className='max-w-[582px] mx-auto h-full flex flex-col items-center justify-center gap-10 mobile:w-[70%]'>
                  <LinkValue />
                  <Code/>
                  <Footer/>
              </div>
          </div>
      </MainContext.Provider>
  )
}
export default App
