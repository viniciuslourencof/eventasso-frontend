import { Separator } from "@/components/ui/separator"
import React from 'react'
import Link from 'next/link';

export default function footer() {
    return (
        <>            

            <Separator></Separator>

            <footer className="flex flex-col text-center p-4">                
                <div className="text-sm text-muted-foreground">© 2024 Eventasso</div>
                <span className="text-sm text-muted-foreground uppercase">
                    Feito por 
                    <Link className="font-semibold" href="https://www.linkedin.com/in/viniciuslourencof/"> Vinicius. </Link> 
                    Todos os direitos reservados
                </span>
            </footer>

        </>
    )
}

