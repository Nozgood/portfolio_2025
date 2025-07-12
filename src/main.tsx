import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogPost from './pages/BlogPost'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:slug' element={<BlogPost />} />
            </Routes>
        </Router>
    </StrictMode>
)
