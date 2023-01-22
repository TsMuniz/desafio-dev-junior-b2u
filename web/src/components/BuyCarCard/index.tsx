import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

interface Car {
    id: string
    name: string
    brand: string
    description: string
    fabricationDate: string
    imageUrl: string
    onClick: (id: string) => void
}

export default function BuyCarCard({id, name, brand, description, fabricationDate, imageUrl, onClick}:Car) {
  return (
    <div
        className='
            rounded-md
            flex flex-col
            shadow-lg 
            border p-4 gap-3 w-[281px] h-[425px]
            '
    >
    <div
        className='flex gap-4 uppercase bg-gray-200 rounded  p-2 overflow-ellipsis text-sm border shadow'
    >
        <h3>
        {brand}
        </h3>
        <h3>
        {name}
        </h3>
        
    </div>
    <div
        className='w-full h-[200px]'
    >
        <img
        className='object-cover w-full h-full'
        src={imageUrl} 
        alt="" 
        />
    </div>
    <div
        className='h-6 py-2 overflow-hidden text-ellipsis text-sm'
    >
        {description}
    </div>
    <h3>
        {fabricationDate.split('/')[2]}
    </h3>
    
    
    <Link
    to={`/${id}`}
    >
    <Button
        variant="outlined"
        color="primary"
    >
        Ver Detalhes
    </Button>
    </Link>
    <Button
        variant="contained"
        color="primary"
        onClick={() => onClick(id)}
    >
        Compre agora!
    </Button>

    </div>
  )
}
