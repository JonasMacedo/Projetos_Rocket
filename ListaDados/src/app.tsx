import {Plus, Search } from 'lucide-react'
import {Header} from '../components/header'
import {Tabs} from '../components/tabs'

import {Control, Input} from '../components/ui/input'
import {Button} from '../components/ui/button'

function App() {
  return (
    <div className="py-10 space-y-8">

      <div>
        <h1>Ola!</h1>
        {/* <Header />  ajustar nas imagens */}
        {/* <Tabs /> ajustar espacamentos */}

      </div>    

      <main className="max-w-6xl mx-auto space-y-5">
        
        <div className='flex gap-3 items-center'>
          <h1 className="text-xl font-bold">Tags</h1>
          <button className='inline-flex items-center gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-2 py-1'>
            <Button>
              <Plus className='size-3'/>        
              Create new
            </Button>           
          </button>
        </div>

        <div className='flex items-center justify-between'>
          <div>
            <Input variant='filter'>           
              <Search className='size-3'/>
              <Control placeholder='Search Tags...'/>              
            </Input>           
          </div>

        </div>
        
      </main>

    </div>
  )
}

export default App
 