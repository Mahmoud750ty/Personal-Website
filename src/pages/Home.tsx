// src/pages/Home.tsx
import Header from '../components/GUI/Header'
import Contact from '../components/Home/Contact'
import Hero from '../components/Home/Hero'
import Projects from '../components/Home/Projects'
import TestimonialCard from '../components/Home/Testimonials'
import { projects } from '../utils/Projects'

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <TestimonialCard />
            <Projects projects={projects} />
            <Contact />
        </div>
    )
}
