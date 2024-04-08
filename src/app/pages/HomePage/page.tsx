'use client'
import { ModelComponent } from '@/components/PageComponents/ModelComponent';
import NavBarComponent from '@/components/PageComponents/NavBarComponent';
import { Navbar } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <ModelComponent/>
     <NavBarComponent></NavBarComponent>

    </div>
  )
}

export default HomePage


