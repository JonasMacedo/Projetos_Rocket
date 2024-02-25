import {Header} from '../components/header'
import {Tabs} from '../components/tabs'
import {Pagination} from '../components/pagination'

import {Plus, Search,Filter, FileDown, MoreHorizontal } from 'lucide-react'

import {Button} from '../components/ui/button'
import {Input, Control} from '../components/ui/input'
import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from '../components/ui/table'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog';
import  '../components/create_tag_form'
import CreateTagForm from '../components/create_tag_form'

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

  const [serachParams, setSearchParams] = useSearchParams()
  const ulrFilter = serachParams.get('filter')  ?? ''

  const [filter, setFilter] = useState(ulrFilter)
  
  const page = serachParams.get('page') ? Number(serachParams.get('page')) : 1 
  
  const {data: tagsResponse, isLoading} = useQuery<TagResponse>({
    queryKey: ['get-tags', ulrFilter, page],
    queryFn: async ()=>{
      const response = await fetch(`http://localhost:3333/tags?_page=${page}&_per_page=10&title=${ulrFilter}`)
      const data = await response.json() // Converte em JSON.

      console.log(data)

      // Delay 1.5 segundos ao avançar pagina, primeira vez.
      // await new Promise(resolve => setTimeout(resolve, 1500))

      return data

    },
   
    placeholderData: keepPreviousData //Suavisa carregamento de informacao.

  })

  function handleFilter() {
    setSearchParams(params=>{
      params.set('page','1')
      params.set('filter', filter)

      return params

    })
  }

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
          {/* <button className='inline-flex items-center gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-2 py-1'> */}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button variant='primary'>
                  <Plus className='size-3'/>        
                  Create new
                </Button>         
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-8 bg-black/78' />
                <Dialog.Content className='fixed p-10 right-0 top-0 bottom-0 h-screen min-w-[320px] z-10 bg-zinc-900 border-l border-zinc-50'>

                  <div className='space-y-3'>
                    <Dialog.Title className='text-xl font-bold'>
                      Create a new tag!
                    </Dialog.Title>
                    <Dialog.Description className='text-sm text-zinc-500'>
                      Tags can be used to group videos about similar concepts 
                    </Dialog.Description>
                  </div>
                
                  <CreateTagForm/>
                </Dialog.Content>
              </Dialog.Portal>
              

            </Dialog.Root>
          {/* </button> */}
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Input variant='filter'>           
              <Search className='size-3'/>
              <Control placeholder='Search Tags...' 
              onChange={ e => setFilter(e.target.value)} 
              value={filter}/>              
            </Input>           
            
            <Button type='submit' onClick={handleFilter}>
              <Filter className='size-3'/> Filter
            </Button>

          </div>
          
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
 