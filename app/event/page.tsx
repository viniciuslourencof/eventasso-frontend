"use client"

import * as React from "react"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,    
    DropdownMenuTrigger,    
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Input } from "@/components/ui/input"
import Header from '../../components/ui/header'  
import DatePicker from '../../components/ui/date-picker'  
import { Separator } from "@/components/ui/separator"
import Event from '../../components/ui/event'  

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function page() {
    
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <div>
            <Header></Header>
            <Separator />
            <div className="px-3 py-2 flex flex-col gap-3">
                <Input placeholder="Pesquisar" />
                <div className="flex gap-2">
                    <Button variant={"secondary"}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Criar
                    </Button>
                    <DatePicker></DatePicker>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Categorias</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Filtrar</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem
                                checked={showStatusBar}
                                onCheckedChange={setShowStatusBar}
                            >
                                Vida Noturna
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={showPanel}
                                onCheckedChange={setShowPanel}
                            >
                                Música
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>      
                </div>
                <Event></Event>
            </div>
            
        </div>
    )
}


