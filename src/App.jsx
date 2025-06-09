import { useState } from 'react'
import PersonSelector from './components/PersonSelector'
import DesktopView from './components/DesktopView'
import MobileView from './components/MobileView'
import { searchData } from './data/searchData'
import './App.css'

function App() {
  const [activePerson, setActivePerson] = useState('caitlin-clark')

  return (
    <div className="min-h-screen bg-[#f1eee9] p-16">

      <div className="flex flex-col gap-16">
        {/* Header with Person Selector */}
        <div className="flex justify-between items-center mx-auto">
          <PersonSelector
            activePerson={activePerson}
            onChange={setActivePerson}
          />
        </div>

        {/* Viewport Labels and Content */}
        <div className="mx-auto">
          <div className="grid grid-cols-[1fr_auto] gap-12 max-w-[1920px]">
            {/* Desktop View */}
            <div>
              <p className="text-black mb-4">Desktop</p>
              <div className="w-[1200px] h-[694px] overflow-auto shadow-[0px_16px_24px_0px_rgba(0,0,0,0.05)]">
                <DesktopView data={searchData[activePerson]} />
              </div>
            </div>

            {/* Mobile View */}
            <div>
              <p className="text-black mb-4">Mobile web</p>
              <div className="w-[320px] h-[694px] overflow-auto shadow-[0px_16px_24px_0px_rgba(0,0,0,0.05)]">
                <MobileView data={searchData[activePerson]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
