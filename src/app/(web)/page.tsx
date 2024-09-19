 import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom';
import Gallery from '@/components/Gallery/Gallery';
import HeroSection from '@/components/HeroSection/HeroSection'; 
import RoomFilter from '@/components/RoomFilter/RoomFilter';
import { getFeaturedRoom } from '@/libs/apis';
  
 const Home = async () => {
const featuredRoom = await getFeaturedRoom();
 
   return (
    <> 
    <HeroSection/> 
    <RoomFilter/> 
    <FeaturedRoom featuredRoom={featuredRoom} />
    <Gallery/> 
     </>
   )
 }
 
 export default Home;