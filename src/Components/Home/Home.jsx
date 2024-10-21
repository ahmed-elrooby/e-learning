import ImageComponent from './ImageComponent/ImageComponent';
import HomeDetails from './HomeDetails/HomeDetails';
import SemiInfo from './SemiInfo/SemiInfo';



const Home = () => {
  return <>
 <div className="home pt-[80px]  ">
 <div className="w-[95%] mx-auto ">

  <div className="flex flex-col items-center justify-center   lg:gap-[50px] lg:flex-row" >
<ImageComponent />
<HomeDetails />
    </div>
  </div>
  <SemiInfo />
  
 </div>
  </>
}

export default Home