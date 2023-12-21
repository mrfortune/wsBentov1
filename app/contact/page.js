import { Metadata } from 'next';
import Contact from './contact';
const fetcher = (url) => fetch(url).then((res) => res.json());
export const metadata = {
  title: 'WorldShaker::Contact',
  description: '...',
}
 
export default function Home() {
  return (
    
    <Contact/>


  )
}