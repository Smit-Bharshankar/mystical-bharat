import React from 'react';
import ImageSlider from './ImageSlider';
import FilterComp from './FilterComp';
import Reviews from './Reviews';
let mountpic = "https://images.unsplash.com/photo-1619796696652-a29a854f21a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let tajpic = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let tigerpic = "https://images.unsplash.com/photo-1452001603782-7d4e7d931173?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let shalimarbagh = "https://images.pexels.com/photos/16930780/pexels-photo-16930780/free-photo-of-shalimar-bagh-mughal-garden-in-srinagar-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
let badrinathtemple = "https://images.pexels.com/photos/15017640/pexels-photo-15017640/free-photo-of-shree-badrinath-temple-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
let shimla = "https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
let tawant = "https://travelogyindia.b-cdn.net/storage/app/upload/tawang-monastery-1.jpg"

const Home = () => {


const Images = [tajpic , tigerpic , shalimarbagh , badrinathtemple , shimla , tawant]


  return (
    <div className=''>
      <div className='max-w-[1200px] w-full h-[650px] my-10 mx-auto'>
     <ImageSlider ImageURL={Images} />
     <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
      <h1 className='text-white  font-medium tracking-wide text-xl f font-poppins'>
      Embark on unforgettable journeys with us, exploring destinations that inspire and captivate travelers worldwide.
      </h1>
     </div>
      </div>

      <div className='max-w-[1200px] w-full  my-10 mx-auto'>
        <p className='text-slate-700 text-center font-medium tracking-wide text-xl  font-poppins'> 
        Welcome to our website, your ultimate destination for personalized travel recommendations across the diverse landscapes of India. Whether you're drawn to the majestic peaks of the Himalayas in the North, the serene backwaters of the South, or the vibrant culture of the East and West, we've got you covered. Our platform harnesses the power of data to curate spot recommendations tailored to your preferred direction, spanning multiple states and offering a rich tapestry of experiences waiting to be explored. Embark on your next adventure with us and discover the beauty of India like never before
        </p>
      </div>

      <div className='flex flex-col justify-center items-center h-40 my-10 mt-20'>
        <h1 className='font-bold text-5xl font-poppins'>You'll fall in love with India</h1>
        <h1 className='mt-6 tracking-wide font-serif font-light'>Explore India from Kashmir to Kaniyakumari</h1>
      </div>

        <FilterComp />

        <div className='pt-10  w-full flex flex-col  items-center justify-center'>
          <h1 className='text-2xl font-bold'>Customer Reviews</h1>
          <br />
          <h1 className='font-popping  w-[60vw] text-wrap pt-2 pb-6'>Discover what our customers are saying about their experiences! We value feedback and strive to provide exceptional service to each and every guest. </h1>
          <div className='w-[60vw]'>
          <Reviews />
          </div>
        </div>

    </div>
  );
};

export default Home;
