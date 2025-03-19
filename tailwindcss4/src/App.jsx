import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import {  ButtonLogIn } from './components/buttons/ButtonLogIn'
import { ButtonPay } from './components/buttons/ButtonPay'
import { Button } from './components/buttons/Button'
import { Links } from './components/Links'
import { Span } from './components/Span'
import { Accomplished } from './components/Accomplished'
import { Bento } from './components/Bento'
import CardSlider from "./components/CardSlider";
import gsap from "gsap";

import {useState} from 'react'


  



export default function App() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    
    if (window.innerWidth >= 1024) {
      gsap.set('.object', {
        rotationY: 50,
        rotationX: 20,
        x: 0,
        y: 0,
        opacity: 0.4,
        transformOrigin: "center",
      });

      gsap.to('.object', {
        rotationY: 0,
        rotationX: 0,
        opacity: 1,
        x: 0,
        y: 0,
        scaleX: 1,
        duration: 2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.object',
          start: 'top 95%',
          end: 'bottom 80%',
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    
    if (window.innerWidth >= 1024) {
      gsap.utils.toArray('.icon').forEach((icon) => {
        gsap.set('.icon', {
          rotationY: 50,
          rotationX: 20,
          x: 500,
          y: 0,
          opacity: 0,
          transformOrigin: "center",
        });

        gsap.to(icon, {
          rotationY: 0,
          rotationX: 0,
          opacity: 1,
          x: 0,
          duration: 2,
          scrollTrigger: {
            trigger: icon,
            start: 'top 100%',
            end: 'bottom 75%',
            scrub: true,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    
    if (window.innerWidth >= 1024) {
      gsap.utils.toArray('.animLeft').forEach((animLeft) => {
        gsap.set('.animLeft', {
          rotationY: 50,
          rotationX: 20,
          x: -300,
          y: 0,
          opacity: 0,
          transformOrigin: "center",
        });

        gsap.to(animLeft, {
          rotationY: 0,
          rotationX: 0,
          opacity: 1,
          x: 0,
          duration: 2,
          scrollTrigger: {
            trigger: animLeft,
            start: 'top 100%',
            end: 'bottom 75%',
            scrub: true,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    
    if (window.innerWidth >= 1024) {
      const initialSettings = {
        x: 0,
        y: 0,
        opacity: 0,
      };

      gsap.set('.first', { ...initialSettings, x: -40, y: -50 });
      gsap.set('.second', { ...initialSettings, x: 40, y: 50 });
      gsap.set('.third', { ...initialSettings, x: 40, y: 50 });
      gsap.set('.fourth', { ...initialSettings, x: 40, y: 50 });

      gsap.to('.first, .second, .third, .fourth', {
        x: 0,
        y: 0,
        opacity: 1,
        scaleX: 1,
        duration: 3,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.second',
          start: 'top 95%',
          end: 'bottom 80%',
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
   
    if (window.innerWidth >= 1024) {
      gsap.utils.toArray('.animBottom').forEach((animBottom) => {
        gsap.set('.animBottom', {
          y: 80,
          opacity: 0,
          transformOrigin: "center",
        });

        gsap.to(animBottom, {
          rotationY: 0,
          rotationX: 0,
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: animBottom,
            start: 'top 100%',
            end: 'bottom 80%',
            scrub: true,
          },
        });
      });
    }
  }, []);


  
  

  
  

  const [activeElement, setActiveElement] = useState('element1');
 
  const handleClick = (element) => {
    setActiveElement(element);
  }

  const backgroundColor = () => {
    if (activeElement === 'element1') {
      return 'rgb(64, 64, 64)'
    } else if (activeElement === 'element2') {
      return 'rgb(23, 34, 133)'
    } else if (activeElement === 'element3') {
      return 'rgb(64, 14, 144)'
    }
  }
  

  return (


    <>

     {/* header */}
      <section  className="bg-[url(src/images/bg-website.png)] relative   bg-repeat-x overflow-visible  sm:h-screen bg-top">   {/* background hero */}
         
        <header className='flex w-full justify-center relative '> 
          <div className="relative w-full p-5 flex items-center place-content-between lg:w-full xl:w-7xl">
            <div className='w-40'>
              <img src="src/images/unknow-logo.png" alt="" className="w-10 h-12 max-w-md" />  {/* logo*/}
            </div>

            {/* burger */}
            <div className="flex flex-col gap-2 lg:hidden"> 
              <Span />
              <Span />
              <Span />
             
             {/* links */}
            </div> 
            <nav className="hidden lg:flex gap-15 "> 
              <Links href="#" text="Home"/>
              <Links href="#" text="Services"/>
              <Links href="#" text="Pricing"/>
              <Links href="#" text="Contact"/>
              <Links href="#" text="Help"/>
            </nav>
            <div className='hidden lg:flex gap-4'>
            <ButtonLogIn  text="Log In" />
              <Button  text="Get Started" />
            </div>
          </div>
        </header> 

        
        <div className='flex flex-col items-center h-screen text-center mt-30 relative'>
          <h1 className="text-4xl font-semibold bg-gradient-to-t from-slate-200 via-slate-200 to-white bg-clip-text text-transparent mx-4 sm:max-w-xl lg:text-6xl xl:max-w-3xl ">Discover your websites made with passion</h1> 
          <p className="text-white mt-8 mb-10 mx-4">Innovative designs, intuitive navigation, exceptional user experience.</p>
          <Button text="Get Started" />
        </div>


        {/* screen website */}
        <div className=' flex w-full justify-center  '>
          <img src="src/images/design.png" alt="" className=' object  transform   absolute w-200  mt-140 lg:w-350 md:mt-100 lg:mt-90 xl:mt-70 sm:mt-100 sm:pl-15   top-0 z-1 ' />
          {/*  fade black shadow */}
          {/*  <div className='w-full h-35    bg-linear-to-b from-transparent to-black to-75% absolute z-2 top-185 md:top-170 md:h-20 lg:h-45 lg:mt-80 sm:top-170 sm:h-20'></div>*/}
        </div>
      </section> 

      {/* header */}

      {/* main  mt-50 sm:mt-100 lg:mt-150*/}

      <main className='flex flex-col items-center w-full max-h-auto bg-black relative mt-0 sm:mt-30 lg:mt-120 '>
        

         {/* partners */}
        <h2 className='text-gray-300  text-xl font-normal text-center mx-5'>Preferred by top industry innovators.</h2>
        
    
        <div className='mt-15 mb-50  lg:mb-40   w-full mask max-w-7xl relative h-20 bg-zinc-800/70 overflow-hidden flex items-center '>
          <img src="src/images/intel-logo.png" alt="" className=' w-10 sm:w-15 absolute left-full animation-scroll logo1 grayscale' />
          <img src="src/images/nvidia-logo.png" alt="" className='w-15 sm:w-20 absolute left-full animation-scroll logo2 grayscale'/>
          <img src="src/images/logo-microsoft.png" alt="" className='w-20 sm:w-25 absolute left-full animation-scroll logo3 grayscale'/>
          <img src="src/images/apple-logo.png" alt="" className='w-15 sm:w-20 absolute left-full animation-scroll logo4 grayscale'/>
          <img src="src/images/spacex-logo.png" alt="" className='w-15 sm:w-20 absolute left-full animation-scroll logo5 grayscale'/>
          <img src="src/images/google-logo.png" alt="" className='w-15 sm:w-25 absolute left-full animation-scroll logo6 grayscale'/>
        </div>
       

        {/* bento with grid */}
      <section className='lg:overflow-hidden relative transform-style-preserve-3d perspective-[1000px]  bg-(position:--bg-position)  w-full    lg:mt-0  justify-center items-center flex flex-col bg-size  bg-no-repeat pb-15'>
        <h2 className='text-5xl bg-gradient-to-t from-gray-500 via-slate-200 to-white bg-clip-text text-transparent mb-15  lg:pt-0 sm:mt-0 h-full font-semibold text-center mx-5'>All what you need</h2>
        <div className=' perspective-[1000px] transform-style-preserve-3d grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full max-w-6xl gap-12 px-10 md:px-5 '>
        <div
      
      className=' h-450 sm:h-400  w-full lg:w-250 md:h-160 bg-zinc-900 absolute blur-(--my-blur) rounded-full -z-1'>
    </div>
        
    <div className="icon w-full h-auto p-3 border border-gray-300/50 rounded-lg overflow-hidden relative">
    {/* Image de fond remplacée par une balise <img> */}
    <img 
        loading="lazy"
        src="src/images/card-img.png" 
        alt="Card Background" 
        className="object-cover w-full h-full absolute top-0 left-0" 
    />
    {/* Icône placée au-dessus de l'image de fond */}
    <img 
        loading="lazy" 
        src="src/images/performance-icon.png" 
        alt="Performance Icon" 
        className="w-25 icon transform"
    />
    {/* Texte */}
    <div className="relative z-20">
        <Bento 
            text="Performance" 
            text2="We believe that great design goes beyond aesthetics – it must be adaptable and optimized for performance. Our design solutions are built to scale, ensuring that your website or application not only looks great but also runs smoothly across all devices and platforms."
        />
    </div>
</div>

      
        <div className="icon w-full h-auto p-3 border border-gray-300/50 rounded-lg overflow-hidden relative">
    {/* Image de fond remplacée par une balise <img> */}
    <img 
        loading="lazy"
        src="src/images/card-img.png" 
        alt="Card Background" 
        className="object-cover w-full h-full absolute top-0 left-0" 
    />
    {/* Icône placée au-dessus de l'image de fond, à un endroit défini */}
    <img 
        loading="lazy" 
        src="src/images/support-icon.png" 
        alt="Support Icon" 
        className="w-25 icon transform"
    />
    {/* Texte */}
    <div className="relative z-20">
        <Bento 
            text="Support 24/7" 
            text2="We understand your website or application needs to be up and running at all times. That’s why we offer 24/7 support, ensuring quick access to expert help whenever needed. Whether it’s a technical issue, question, or guidance, our team is always ready to assist."
        />
    </div>
</div>
        <div className="icon w-full h-auto p-3 border border-gray-300/50 rounded-lg overflow-hidden relative">
    {/* Image de fond remplacée par une balise <img> */}
    <img 
        loading="lazy"
        src="src/images/card-img.png" 
        alt="Card Background" 
        className="object-cover w-full h-full absolute top-0 left-0" 
    />
    {/* Icône placée au-dessus de l'image de fond */}
    <img 
        loading="lazy" 
        src="src/images/lowprice-icon.png" 
        alt="Low Price Icon" 
        className="w-25 icon transform "
    />
    {/* Texte */}
    <div className="relative z-20">
        <Bento 
            text="Low Price" 
            text2="We believe in offering exceptional value without compromising quality. Our designs and services are tailored to fit your budget, providing you with cost-effective solutions that meet your needs. Get the best performance at a price that works for you, without hidden costs or surprises."
        />
    </div>
</div>
        <div className="icon w-full h-auto p-3 border border-gray-300/50 rounded-lg overflow-hidden relative">
    
      <img loading='lazy' src="src/images/card-img.png" alt="Card Background" className="object-cover w-full h-full absolute top-0 left-0" />
      <img loading='lazy' src="src/images/creativity-icon.png" alt="Creativity Icon" className="w-25 icon transform " />
    
    <div className="relative z-20">
        <Bento 
            text="Creativity" 
            text2="Innovation and creativity are at the heart of everything we do. We craft unique designs that stand out, ensuring your website captures attention and engages users. With our creative solutions, we turn your vision into reality, making sure every detail is thoughtfully designed."
        />
    </div>
</div>

    </div>
</section>

{/* what we accomplished */}
<section className=' bg-[url(src/images/light-circle.png)] bg-center bg-no-repeat  h-200 w-full xs:w-auto md:w-auto  items-center  justify-center lg:gap-10 px-5 flex flex-col-reverse md:flex-row gap-20 md:gap-0  md:px-0 mt-30 md:mt-0'>
    <div className='w-full md:w-120 lg:w-150 h-auto text-white flex flex-col items-center lg:items-center'>
       
        <div className='first backdrop-blur-xl border border-gray-400/50 inset-shadow-[0_0px_50px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center flex-col lg:text-[18px] w-35 md:w-45 text-xs lg:w-65 py-3 shadow-xl mb-5 lg:mb-10'>
        <Accomplished  text="300+" text2="Partners working with us" />
        </div>

       
        <div className='second flex flex-wrap justify-center gap-5 mb-5 lg:mb-10'>
          {/* Container 1 */}
          <div className='backdrop-blur-xl border border-gray-400/50 inset-shadow-[0_0px_50px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center flex-col lg:text-[18px] w-35 md:w-45 text-xs lg:w-65 py-3 shadow-4xl'>
          <Accomplished  text="1000+" text2="Clients served worldwide" />
          </div>

          {/* Container 2 */}
          <div className='third backdrop-blur-xl border border-gray-400/50 inset-shadow-[0_0px_50px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center flex-col lg:text-[18px] w-35 md:w-45 text-xs lg:w-65 py-3 shadow-4xl'>
            
            <Accomplished  text="500+" text2="Projects delivered" />
          </div>
        </div>

        {/* Container 3 */}
        <div className=' fourth backdrop-blur-xl border border-gray-400/50 inset-shadow-[0_0px_50px_rgba(0,0,0,1)] rounded-lg flex items-center justify-center flex-col lg:text-[18px] w-35 md:w-45 text-xs lg:w-65 py-3 shadow-4xl'>
          
          <Accomplished  text="20+" text2="Awards won for excellence" />
        </div>
    </div>

    <div className='text-white flex flex-col gap-7 items-center md:items-start'>
      <h2 className='font-semibold text-center md:text-start max-w-md bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 text-4xl md:text-4xl lg:text-5xl animLeft'>What we have accomplished</h2>
      <p className='max-w-xs text-center md:text-start md:w-100 lg:max-w-lg md:text-md animBottom'>Over the years, we’ve delivered exceptional designs that empower businesses and help them grow. Here's a glimpse of our impact.</p>
      <Button text="Get Started" />
    </div>
</section>






{/* Pricing */}
<section className='w-full h-350 flex items-center justify-center flex-col mt-50 sm:mt-50 md:mt-0'>
  <div className='bg-cover bg-no-repeat bg-center w-full h-full flex items-center justify-center gap-15 flex-col'>
    
    <div
      style={{
        transition: `all 0.3s`,
        opacity: 1,
        backgroundColor: backgroundColor()
      }}
      className='h-300 w-full lg:w-250 lg:h-200 bg-zinc-600/50 absolute blur-(--my-blur) rounded-full z-0'>
    </div>
    
    <h2 className='text-white font-medium text-6xl sm:text-8xl z-3'>Pricing</h2>
    
    <div className='flex flex-wrap mx-5 items-center justify-center'>
      
      {/* Container  1 */}
      <div
        onClick={() => handleClick('element1')}
        style={{
          transform: `scale(${activeElement === 'element1' ? 1 : 0.8})`,
          transition: `all 0.3s`,
          opacity: activeElement === 'element1' ? 1 : 0.7,
          cursor: activeElement === 'element1' ? 'default' : 'pointer'
        }}
        className={`bg-linear-to-t from-black to-zinc-800 sm:w-80 sm:h-120 w-65 h-100  border border-zinc-600 rounded-lg text-white p-5 sm:p-10 ${activeElement === 'element1' ? 'grayscale-90' : 'grayscale-100'}`}>
        
        <p className='sm:text-xl text-lg font-medium mb-10 sm:mb-15'>Common</p>
        
        <div className='flex items-end mb-5 sm:mb-10'>
          <p className='sm:text-5xl text-3xl font-semibold'>499$</p>
          <p className='text-gray-300 text-xs'>/website</p>
        </div>
        
        <p className='sm:text-sm text-xs'>For personal projects or portfolio websites</p>
        
        <div className='mt-5'>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>Custom Design</p>
          </div>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>Responsive Layout</p>
          </div>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>1 Page</p>
          </div>
        </div>
        
        <ButtonPay text="Get Started" className="text-black mt-5 w-full h-12 rounded-lg font-medium cursor-pointer" />
      </div>
      
      {/* Container 2 */}
      <div
        onClick={() => handleClick('element2')}
        style={{
          transform: `scale(${activeElement === 'element2' ? 1 : 0.8})`,
          transition: `all 0.3s`,
          opacity: activeElement === 'element2' ? 1 : 0.7,
          boxShadow: activeElement === 'element2' ? `0px 0px 30px rgb(59, 111, 255)` : `none`,
          cursor: activeElement === 'element2' ? 'default' : 'pointer',
          filter: `grayscale(${activeElement === 'element2' ? '0' : '100'})`
        }}
        className='bg-[url(images/bg-card-rare.png)] bg-cover bg-no-repeat bg-center sm:w-80 sm:h-120 w-65 h-100 border border-blue-800/100 rounded-lg text-white p-5 sm:p-10'>
        
        <p className='sm:text-xl text-lg font-medium mb-10 sm:mb-15'>Rare</p>
        
        <div className='flex items-end mb-5 sm:mb-10'>
          <p className='sm:text-5xl text-3xl font-semibold'>899$</p>
          <p className='text-gray-300 text-xs'>/website</p>
        </div>
        
        <p className='sm:text-sm text-xs'>For small businesses or professional portfolios</p>
        
        <div className='mt-5'>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>Custom Design</p>
          </div>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>Responsive Layout</p>
          </div>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>3 Pages</p>
          </div>
        </div>
        
        <ButtonPay text="Get Started" className="text-black mt-5 w-full h-12 rounded-lg font-medium cursor-pointer" />
      </div>
      
      {/* Container 3 */}
      <div
        onClick={() => handleClick('element3')}
        style={{
          transform: `scale(${activeElement === 'element3' ? 1 : 0.8})`,
          transition: `all 0.3s`,
          opacity: activeElement === 'element3' ? 1 : 0.5,
          boxShadow: activeElement === 'element3' ? `0px 0px 50px rgb(132, 0, 255)` : `none`,
          cursor: activeElement === 'element3' ? 'default' : 'pointer',
          filter: `grayscale(${activeElement === 'element3' ? '0' : '100'})`
        }}
        className='bg-[url(images/bg-card-epic.png)] bg-cover bg-no-repeat bg-center sm:w-80 sm:h-120 w-65 h-100 border border-purple-600 rounded-lg text-white p-5 sm:p-10'>
        
        <p className='sm:text-xl text-lg font-medium mb-10 sm:mb-15'>Epic</p>
        
        <div className='flex items-end mb-5 sm:mb-10'>
          <p className='sm:text-5xl text-3xl font-semibold'>1499$</p>
          <p className='text-gray-300 text-xs'>/website</p>
        </div>
        
        <p className='sm:text-sm text-xs'>For established businesses or large-scale projects</p>
        
        <div className='mt-5'>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>Custom Design</p>
          </div>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>Responsive Layout</p>
          </div>
          <div className='flex items-center gap-5'>
            <img src="src/images/check.png" alt="" className='w-8' />
            <p className='sm:text-sm text-xs'>5 Pages</p>
          </div>
        </div>
        
        <ButtonPay text="Get Started" className="text-black mt-5 w-full h-12 rounded-lg font-medium cursor-pointer" />
      </div>

    </div>
  </div>
</section>

{/* testimonials */}
<section className='flex items-center justify-center flex-col w-full mt-70 sm:mt-50 md:mt-30'>
  <h2 className='text-4xl text-white mb-20 text-center mx-5'>What people think about us</h2>
    <CardSlider />
</section>

<section className=' bg-(position:--bg-position) bg-[url(images/final-section-bg.png)] sm:bg-[auto_1000px] bg-[auto_500px] bg-no-repeat  h-200 w-full 2xl:w-400   mt-50 flex items-center flex-col'>
    <h2 className='text-white text-center text-3xl sm:text-4xl  lg:text-5xl mt-30  mb-10 font-medium mx-5'>Join us and bring your ideas to life</h2>
    <Button  text="Get Started" />

</section>


</main>

 {/* main */}

 {/* footer */}

<footer className='border-t border-gray-400/50 w-hull h-50 flex items-center justify-center flex-col gap-3'>
    <p className='text-white'>Unknown company</p>
    <p className='text-white'>&copy; All Rights Reserved</p>
</footer>

      
    </>
  )
}


