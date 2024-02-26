import {Check, X} from "lucide-react"

import { Button } from "./ui/button"

export default function CreateTagForm(){
    return(
        <form className="w-full space-y-6 ">
            
            <div className="space-y-2" >
                <label className="block text-sm font-medium " htmlFor="name">Tag name </label>
                <input 
                    className="border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-800/50 w-full"
                    id="name"
                    type="text" />
            </div>
            
            <div className="space-2">
                <label className="block text-sm font-medium " htmlFor="slug">Slug</label>
                <input 
                    className="border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-800/50 w-full"
                    id="id" 
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