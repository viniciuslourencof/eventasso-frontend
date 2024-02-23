"use client"

import * as React from "react"
import { PlusCircle, Filter } from "lucide-react"
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
import Footer from '../../components/ui/footer'
import DatePicker from '../../components/ui/date-picker'
import EventCard from '../../components/ui/event-card'

type Checked = DropdownMenuCheckboxItemProps["checked"]

export default function Page() {

    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <>
            <Header />
            <div className="px-3 py-2 flex flex-col gap-3">
                <Input placeholder="Pesquisar" />
                <div className="flex gap-2">
                    <Button variant={"secondary"}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Criar
                    </Button>
                    <DatePicker></DatePicker>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <Filter className="mr-2 h-4 w-4" />Categorias
                            </Button>
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
            </div>

            <div className="px-3 flex flex-wrap -mx-2">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex-1 px-2 mb-4">
                        <EventCard />
                    </div>
                ))}
            </div>
            <Footer>
            </Footer>
        </>
    )
}
