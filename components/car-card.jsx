"use client";

import React from 'react'
import { Card } from './ui/card';
import Image from 'next/image';
import { CarIcon, Heart, icons} from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const CarCard = ({car}) => {
  const [isSaved, setIsSaved] = useState(car.wishlisted);
  const handleToggleSave = async (e) => {};

  return <Card className='overflow-hidden hover:shadow-lg transition group'>
      <div className='relative h-48'>
        {car.images && car.images.length > 0 ?(
          <div className='relative w-full h-full'> 
            <Image 
            src = {car.images[0]}
            alt = {`${car.make} ${car.model}`}
            fill
            className='object-cover group-hover:scale-105 transition duration-300'
          />
        </div>
      ):(
        <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
          <CarIcon className='h-12 w-12 text-gray-400' />  
        </div>
        )}
        <Button
          variant='ghost'
          size= "icon"
          className={`absolute top-2 right-2 bg-white/90 rounded-full p-1.5 ${
            isSaved
             ? "text-red-500 hover:text-red-600"
             : "text-gray-600 hover:text-gray-900"
          }`}
          onClick = {handleToggleSave}
        
          >
          <Heart className={isSaved ? "fill-current" : ""} size={20} />
        </Button>

      </div>
    </Card>
  }
  

export default CarCard;