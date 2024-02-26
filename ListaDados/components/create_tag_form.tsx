import {Check, X} from "lucide-react"

import {useForm} from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button"

const creatTagSchema = z.object({
    // Funcao para tratar os dados recebidos do form.
    name: z.string().min(3,{message:'Minimo de 3 carateres'}),
    slug: z.string(),
})

// Inferencia: criando uma tipagem apartir de uma variavel existente.
type CreateTagSchema = z.infer<typeof creatTagSchema>

export default function CreateTagForm(){

    const {register, handleSubmit} = useForm<CreateTagSchema>({
        resolver: zodResolver(creatTagSchema),
    })

    function createTag(data: CreateTagSchema) {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(createTag)} className="w-full space-y-6 ">
            
            <div className="space-y-2" >
                <label className="block text-sm font-medium " htmlFor="name">Tag name </label>
                <input 
                    className="border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-800/50 w-full"
                    id="name"
                    {...register('name')}
                    type="text" />
            </div>
            
            <div className="space-2">
                <label className="block text-sm font-medium " htmlFor="slug">Slug</label>
                <input 
                    className="border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-800/50 w-full"
                    id="id" 
                    {...register('slug')}
                    type="text" 
                    readOnly />
            </div>
            
            <div className="flex items-center justify-end gap-2">
                <Button>
                    Cancel
                    <X className="size-3"/>
                </Button>
                <Button className="bg-teal-400 text-teal-950" type="submit">
                    Save
                    <Check className="size-3"/>
                </Button> 
            
            </div>

        </form>
    )
};