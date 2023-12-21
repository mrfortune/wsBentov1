import { Metadata } from 'next';
import HomePage from './home';
const fetcher = (url) => fetch(url).then((res) => res.json());
export const metadata = {
  title: 'WorldShaker::Home',
  description: '...',
}
 
export default function Home() {
  return (
    
    <HomePage/>


  )
}
