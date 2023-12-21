import { Metadata } from 'next';
import Story from './story';
const fetcher = (url) => fetch(url).then((res) => res.json());
export const metadata = {
  title: 'WorldShaker::Story',
  description: '...',
}
 
export default function Home() {
  return (
    
    <Story/>


  )
}