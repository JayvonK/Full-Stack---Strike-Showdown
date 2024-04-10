'use client'
import NavBarComponent from '@/components/PageComponents/NavBarComponent'
import React from 'react'
import type { AppProps } from 'next/app';
const HomePage = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
    <NavBarComponent></NavBarComponent>
    </div>
  )
}

export default HomePage


