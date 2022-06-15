import { useState } from 'react'
import { Best } from './Best'
import { Carrousel } from './Carrousel'
import { Footer } from './Footer'
import { Header } from './Header'
import { Performance } from './Performance'
import './style/App.css'

export function App() {
    return (
        <>
            <Header />
            <Carrousel />
            <Best />
            <Performance />
            <Footer/>
        </>
    )
}

