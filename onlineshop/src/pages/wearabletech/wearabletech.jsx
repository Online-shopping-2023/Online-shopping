import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdRemove } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function WearableTech() {
  return (
    <div className="WearableTech">
    <header class="flex flex-row items-center justify-around">
       <div>
           <img src="/img/online_shop-removebg-preview.jpg" alt="logo"/>
       </div>
       <div>
           <input class="bg-gray-200 border-2 border-gray-200 rounded-bl-2xl rounded-tl-2xl p-3 pr-1.5 font-sans" type="search" placeholder="Search..."/>
           <button class="bg-purple-700 py-2.5 pr-6 pl-5 border-2 border-purple-700 rounded-br-2xl rounded-tr-2xl"><AiOutlineSearch class="text-white text-xl" name="search-outline"/></button>
       </div>
       <div>
       </div>
       <div class="flex flex-row items-center">
           <BsFillPersonFill class="text-4xl text-purple-700 ml-12" name="person-circle"/> 
           <button class="text-purple-700 font-sans">Log in</button>
       </div>
       <div class="flex flex-row items-center">
           <AiOutlineHeart class="text-3xl mr-2" name="heart-outline"/>
           <button class="underline underline-offset-1 font-sans">Favorites</button>
       </div>
       <div>
           <AiOutlineShoppingCart class="text-3xl" name="cart-outline"/>
       </div>
   </header>

   <section class="h-12 bg-gray-200 flex flex-row items-center">
        <Link to='/' class="ml-10 font-sans mr-6 ">Shop All</Link>
        <Link to='/Computers' class="font-sans mr-6">Computers</Link>
        <Link to='/Tablets' class="font-sans mr-6">Tablets</Link>
        <Link to='/Drones' class="font-sans mr-6">Drones & Cameras</Link>
        <Link to='/Audio' class="font-sans mr-6">Audio</Link>
        <Link to='/Mobile' class="font-sans mr-6">Mobile</Link>
        <Link to='/TV' class="font-sans mr-6">T.V & Home Cinemas</Link>
        <Link to='/WearableTech' class="font-sans mr-6 text-purple-700">Wearable Tech</Link>
   </section>
       <h1 class="text-4xl text-center mt-24">Wearable Tech</h1>

    <section class="flex  justify-around px-96">
       <div class="flex flex-row ">
           <div class="flex flex-col items-start w-30 mr-20 mt-36">
               <h1 class="text-2xl pb-2">Filter by</h1>
               <hr class="w-48 h-2 color-grey-700"/>
               <div class="flex flex-row items-center justify-between w-30">
                   <button>Category</button>
                   <IoMdRemove class="ml-20" name="remove-outline"/>
               </div>
               <div class="flex flex-col items-start">
                   <button class="pt-4">All</button>
                   <button>Sale</button>
                   <button>Best Sellers</button>
               </div>
        </div>
           </div>
           <div class="flex flex-col mt-40 ">
               <div class="flex flex-row">
                   <div class="border-2 w-96 overflow-hidden">
                       <div class="overflow-hidden">
                           <img class="transform-transition duration-300 hover:scale-125" src="/img/tablet 85.webp" alt=""/>
                       </div>
                       <div class="p-2">
                           <h1>Space Moon Smartwatch With Charger</h1>
                           <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                       </div>
                   </div>
                   <div class="border-2 w-96 overflow-hidden">
                       <div class="overflow-hidden">
                           <img class="transform-transition duration-300 hover:scale-125" src="/img/tablet 70.webp" alt=""/>
                       </div>
                       <div class="p-2">
                           <h1>Fitboot Inspire Fitness Tracker With Heart Rate Tracking</h1>
                           <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                       </div>
                   </div>
                   <div class="border-2 w-96 overflow-hidden">
                       <div class="overflow-hidden">
                           <img class="transform-transition duration-300 hover:scale-125" src="/img/touch-screen 85.webp" alt=""/>
                       </div>
                       <div class="p-2">
                           <h1>Safay GEN 2 256GB VR headset With Touch Controllers</h1>
                           <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                       </div>
                   </div>
               </div>
               <div class="flex flex-col  ">
                   <div class="flex flex-row">
                       <div class="border-2 w-96 overflow-hidden">
                           <div class="overflow-hidden">
                               <img class="transform-transition duration-300 hover:scale-125" src="/img/ove-tablet-70.webp" alt=""/>
                           </div>
                           <div class="p-2">
                               <h1>FitWatch Fitness Smart Watch</h1>
                               <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                           </div>
                       </div>
                       <div class="border-2 w-96 overflow-hidden">
                           <div class="overflow-hidden">
                               <img class="transform-transition duration-300 hover:scale-125" src="/img/sheer pro 70.webp" alt=""/>
                           </div>
                           <div class="p-2">
                               <h1>HV Virtual Reality System for PC</h1>
                               <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                           </div>
                       </div>
                       <div class="border-2 w-96 overflow-hidden">
                           <div class="overflow-hidden">
                               <img class="transform-transition duration-300 hover:scale-125" src="/img/ocean pro 70.webp" alt=""/>
                           </div>
                           <div class="p-2">
                               <h1>Pantony 6P Activity Tracker</h1>
                               <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/corr-playtime-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>FitWatch XDH Fitness Smart Watch</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/pilates-laptop-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Journey Glass XD Virtual Reality Headset</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/tv-soundbar-70.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>TV Bluetooth Soundbar With HDMI-ARC Connectivity</h1>
                                   <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/pill bluetooth-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Pill Shape Silver Portable Bluetooth Speaker</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/round-mini-70 .webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Round Mini Portable Bluetooth Speaker</h1>
                                   <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/studio8 speaker.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Studio 8 Portable Bluetooth Speaker</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/balo-headphones-70.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Balo Headphones 700 Wireless Noise Cancelling</h1>
                                   <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/spacebuds-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Space Buds True Wireless Earbud Headphones</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/drums-pro-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Drums Pro Wireless On-Ear Headphones</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/HKI-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>HKI Tech Quadcopter Drone With 360 Camera & Controller</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/shel50-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Shel 50" Class LED 4K UHD Smart TV</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/spacemoon-70.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Space Moon Smartwatch With Charger</h1>
                                   <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/fitboot-70.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Fitboot Inspire Fitness Tracker With Heart Rate Tracking</h1>
                                   <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/safay-vr-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Safay GEN 2 256GB VR headset With Touch Controllers</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/fitwatch-fitness-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>FitWatch Fitness Smart Watch</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/hv-vr-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>HV Virtual Reality System for PC</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/pantony-tracker-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Pantony 6P Activity Tracker</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/fitwatch-fitness-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>FitWatch XDH Fitness Smart Watch</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/Pantony X21-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Pantony X21 5G, 128GB With Z Pen</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/jp-exmax-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>JP Exmax Phantom, 5G, 16GB</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/Ovelight-70.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>OVE Light Space 5G, 128GB</h1>
                                   <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/Z-pixelmax-70.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Smartphone Z Pixel Max 128GB Unlocked</h1>
                                   <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/pantony-super-85.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>Pantony Super 10W 5G, 128GB</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="flex flex-col  ">
                       <div class="flex flex-row">
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/jp light phantom-70.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>JP Light Phantom, 5G, 16GB</h1>
                                   <h1 class="text-purple-700 text-xl mb-">70,00GEL</h1>
                               </div>
                           </div>
                           <div class="border-2 w-96 overflow-hidden">
                               <div class="overflow-hidden">
                                   <img class="transform-transition duration-300 hover:scale-125" src="/img/Z-pixelmax-70.webp" alt=""/>
                               </div>
                               <div class="p-2">
                                   <h1>MAX Pantony S 5G, 128GB</h1>
                                   <h1 class="text-purple-700 text-xl mb-">85,00GEL</h1>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>   
       </div>
       </section>
   <section class="h-96 mt-40  bg-black flex flex-row items-center">
       <div class="ml-32 w-2/4 ">
           <h1 class="text-2xl font-sans text-bold text-white">
               Need Help? Check Out <br/> Our Help Center
           </h1>
           <p class="font-sans text-white mt-4">
               I'm a paragraph. Click here to add your own text <br/> and edit me. Let your users get to know you.
           </p>
           <button class="mt-4 border-2 border-purple-700 bg-purple-700 rounded-3xl px-4 py-2 text-white ">
               Go to Help Center
           </button>
       </div>
       <div class="flex ">
           <img class="h-96 w-[900px] overflow-hidden " src="/img/headphones-bg.webp" alt=""/>
       </div>
   </section>

   <section class="flex flex-row  justify-around  mt-20">
           <div class="flex flex-col justify-items-start">
               <h1 class="text-2xl font-bold mb-10 mt-10">Store Location</h1>
               <h1 class="mt-1">500 Terry Francine Street</h1>
               <h1 class="mt-1">San Francisco, CA 94158</h1>
               <h1 class="mt-1">info@mysite.com</h1>
               <h1 class="mt-1">123-456-7890</h1>
       </div>
       <div class="flex flex-col justify-items-start">
           <h1 class="text-2xl font-bold mt-10">Shop</h1>
           <ul class="mt-10 flex flex-col">
                <Link to='/' class=" font-sans mt-1">Shop All</Link>
                <Link to='/Computers' class="font-sans mt-1">Computers</Link>
                <Link to='/Tablets' class="font-sans mt-1">Tablets</Link>
                <Link to='/Drones' class="font-sans mt-1">Drones & Cameras</Link>
                <Link to='/Audio' class="font-sans mt-1 ">Audio</Link>
                <Link to='/Mobile' class="font-sans mt-1">Mobile</Link>
                <Link to='/TV' class="font-sans mt-1 ">T.V & Home Cinemas</Link>
                <Link to='/WearableTech' class="font-sans mt-1 text-purple-700">Wearable Tech</Link>
           </ul>
       </div>
           <div class="flex flex-col justify-items-start">
               <h1 class="mt-10 text-2xl font-bold">Customer Support</h1>
               <ul class="mt-10">
                   <li class="mt-1">Contact Us</li>
                   <li class="mt-1">Help Center</li>
                   <li class="mt-1">About Us</li>
                   <li class="mt-1">Careers</li>
               </ul>
           </div>
           <div class="flex flex-col justify-items-start">
               <h1 class="mt-10 text-2xl font-bold">Policy</h1>
               <ul class="mt-10">
                   <li class="mt-1">Shipping & Returns</li>
                   <li class="mt-1">Terms & Conditions</li>
                   <li class="mt-1">Payment Methods</li>
                   <li class="mt-1">FAQ</li>
               </ul>
           </div>
   </section>
   
   <hr class="w-3/4 h-10 mt-40 flex ml-32"/>

   <section class="flex flex-col items-center mb-10">
       <h1>We accept the following paying methods</h1>
       <div class="flex flex-row mt-10">
           <img class="mr-4" src="/img/brand-amex@3x.webp" alt=""/>
           <img class="mr-4" src="/img/brand-chinaunionpay@3x.webp" alt=""/>
           <img class="mr-4" src="/img/brand-mastercard@3x.webp" alt=""/>
           <img class="mr-4" src="/img/Visa.webp" alt=""/>
           <img class="mr-4" src="/img/brand-jcb@3x.webp" alt=""/>
           <img class="mr-4" src="/img/PayPal.webp" alt=""/>
           <img class="mr-4" src="/img/Diners.webp" alt=""/>
           <img class="mr-4" src="/img/Discover.webp" alt=""/>   
       </div>
       
   </section>
   

   </div>
  );

}

export default WearableTech;
