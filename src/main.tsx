import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header />
		<main className='max-w-screen-2xl mx-auto sm: p-8 md:p-16'>
			<Hero />
			<Work />
		</main>
	</StrictMode>,
)
