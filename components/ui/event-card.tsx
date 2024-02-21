import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import Link from 'next/link';

export default function eventCard() {
    return (
        <Link href="/event">
            <Card className="flex flex-col">
                <CardHeader>
                    <img className="h-48 w-full rounded-md" src="festa.jpg" alt=""></img>
                </CardHeader>
                <CardContent className="flex flex-col justify-between gap-1">
                    <CardTitle>Festa</CardTitle>
                    <div className='flex items-center gap-1'>
                        <Calendar className='h-4 w-4 text-muted-foreground'></Calendar>
                        <CardDescription className='text-sm font-semibold text-muted-foreground'>Sáb, 01/02/2024 ás 20:00</CardDescription>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MapPin className='h-4 w-4 text-muted-foreground'></MapPin>
                        <CardDescription className='text-sm font-semibold text-muted-foreground'>Rua lorem ipsom dor</CardDescription>
                    </div>                    
                    <span className='text-sm text-muted-foreground'>A partir de R$ 10.00</span>
                    <span className='text-sm text-muted-foreground'>1.5k confirmados</span>
                </CardContent>
            </Card>
        </Link>
    )
}
