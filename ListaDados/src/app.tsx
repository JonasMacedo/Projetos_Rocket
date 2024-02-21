import {Plus, Search, FileDown, MoreHorizontal } from 'lucide-react'
import {Header} from '../components/header'
import {Tabs} from '../components/tabs'

import {Button} from '../components/ui/button'
import {Input, Control} from '../components/ui/input'
import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from '../components/ui/table'

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
          
          <Input variant='filter'>           
            <Search className='size-3'/>
            <Control placeholder='Search Tags...'/>              
          </Input>           
          
          <Button>
            <FileDown className='size-3'/>Export
          </Button>

        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          
          <TableBody>
            {Array.from({length:10}).map((value,index)=>{
              return(
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-medium text-zinc-300'>React</span>
                      <span className='font-medium text-zinc-300'>ID: 51220644071107000104650010000202181816407766</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    13 video(s)
                  </TableCell>
                  
                  <TableCell className='text-right'>
                    <Button size='icon'>
                      <MoreHorizontal className='size-4'/>
                    </Button>  
                  </TableCell>
                  
                </TableRow>
              
              )
            })}

          </TableBody>

        </Table>

      </main>

    </div>
  )
}

export default App
 