import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Bookmark } from "lucide-react"
import Link from 'next/link';

export default function eventCard() {
    return (
        <Card className="w-full">
            <CardHeader>
                <img className="h-48 w-auto rounded-md" src="festa.jpg" alt="" />
                <CardTitle>
                    <Link href="/event">Festa</Link>
                </CardTitle>
                <CardDescription>Sáb, 01/02/2024 ás 20:00</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-1">
                <Label>Rua lorem ipsom dor</Label>
                <CardDescription>A partir de R$ 10.00</CardDescription>
                <Label>1.5k confirmados</Label>
            </CardContent>
            <CardFooter className="flex justify-between gap-4">
                <Button className="w-full" variant="secondary">Comparecer</Button>
                <Button variant="secondary">
                    <Bookmark className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    )
}
