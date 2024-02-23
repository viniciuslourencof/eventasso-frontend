"use client"

import React from 'react'
import Header from '../../components/ui/header'
import { MapPin, Calendar, Heart, Share } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import Footer from '../../components/ui/footer'

export default function Page() {
  return (
    <>
      <Header />
      <img className="h-56 w-full rounded-b-3xl" src="festa.jpg" alt="" />

      <div className='p-4 flex flex-col gap-2'>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>              
              <Calendar className='h-4 w-4 text-muted-foreground'></Calendar>
              <h2 className='text-sm font-semibold text-muted-foreground'>Sáb, 01/02/2024 ás 20:00</h2>
            </div>
            <div  className='flex items-center gap-6'>
              <Heart className='h-4 w-4 text-muted-foreground'></Heart>
              <Share className='h-4 w-4 text-muted-foreground'></Share>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <MapPin className='h-4 w-4 text-muted-foreground'></MapPin>
            <h2 className='text-sm font-semibold text-muted-foreground'>Rua lorem ipsom dor</h2>
          </div>
          <div className='flex items-center gap-3'>
            <Avatar className='h-10 w-10'>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className='text-sm font-semibold text-muted-foreground'>
              Organizado por <br></br>
              João Silva
            </span>
          </div>
        </div>
        <Separator className='mt-2'></Separator>
        <h1 className="text-4xl font-semibold leading-none tracking-tight">Festa</h1>
        <p className='text-sm font-semibold text-muted-foreground'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac nibh vel lorem facilisis bibendum. Nulla maximus sem eget velit imperdiet, eget porta quam finibus. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse efficitur quis leo vel molestie. Ut sit amet erat tempor, lobortis justo non, fermentum urna. Nunc efficitur blandit justo in iaculis. Nulla sit amet nisi at tortor commodo volutpat at sit amet enim. Donec hendrerit at enim in blandit.                    
        </p>
      </div>            

      <div className='fixed bottom-0 left-0 right-0 shadow-md p-4'>
        <Button className='bg-primary w-full'>Comprar agora</Button>
      </div>

      
    </>
  )
}
