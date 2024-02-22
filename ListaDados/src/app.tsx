import {Header} from '../components/header'
import {Tabs} from '../components/tabs'
import {Pagination} from '../components/pagination'

import {Plus, Search, FileDown, MoreHorizontal } from 'lucide-react'

import {Button} from '../components/ui/button'
import {Input, Control} from '../components/ui/input'
import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from '../components/ui/table'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

export interface TagResponse {
  // usado o site transform.toos para gerar o typescript
  first: number
  prev: any | null
  next: number
  last: number
  pages: number
  items: number
  data: Tag[]
}

export interface Tag {
  title: string
  slug: string
  amountOfVideos: number
  id: string
}

function App() {

  const [serachParams] = useSearchParams()

  const page = serachParams.get('page') ? Number(serachParams.get('page')) : 1 

  const {data: tagsResponse, isLoading} = useQuery<TagResponse>({
    queryKey: ['get-tags',page],
    queryFn: async ()=>{
      const response = await fetch(`http://localhost:3333/tags?_page=${page}&_per_page=10`)
      const data = await response.json() // Converte em JSON.

      console.log(data)

      return data

    },
    placeholderData: keepPreviousData //Suavisa carregamento de informacao.
  })

  if(isLoading){
    return null
  }

  return (
    <div className="py-10 space-y-8">

      <div>
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
            {tagsResponse?.data.map((tag)=>{
              return(
                <TableRow key={tag.id}>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-medium text-zinc-300'>{tag.title}</span>
                      <span className='font-medium text-zinc-300'>{tag.id}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    {tag.amountOfVideos} video(s)
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

        { tagsResponse && <Pagination pages={tagsResponse.pages} items={tagsResponse.items} page={page} />}

      </main>

    </div>
  )
}

export default App
 