'use client';
import Image from 'next/image';
import Link from 'next/link';
import SearchInput from './components/SearchInput';
import Button from './components/Button';
import LastSection from './components/LastSection';
import Copyright from './components/Copyright';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const heroSection = useRef();
  const recipeCard = useRef();
  const sectionLeftRight = useRef();
  const imageSection2 = useRef();
  const imageSection3 = useRef();
  
  



  useGSAP(() => {
    gsap.from(heroSection.current, {
      opacity: 0,
      scale: 0,
    });

    gsap.from(recipeCard.current.children, {
      scrollTrigger: recipeCard.current,
      opacity: 0,
      yPercent: 50,
      stagger: 0.3,
      duration: 1, 
      ease: 'power4.inOut'
    });

    gsap.from('.gsapSlideCard', {
      xPercent: () => innerWidth,
      duration: 1, 
      ease: 'power4.inOut'
    })
    
    
    gsap.from(sectionLeftRight.current.children[0].children[0], {
      scrollTrigger: {
        trigger: sectionLeftRight.current,
        start: 'center bottom',
      },
      opacity: 0, 
      xPercent: -50,
    })

    gsap.from(sectionLeftRight.current.children[0].children[1], {
      scrollTrigger: {
        trigger: sectionLeftRight.current,
        start: 'center bottom',
      },
      opacity: 0, 
      xPercent: 50,
    })

    gsap.from(imageSection2.current.children[0], {
      scrollTrigger: imageSection2.current,
      opacity: 0,
      scale: 0,
    });

    gsap.from(imageSection2.current.children[1], {
      scrollTrigger: imageSection2.current.children[1],
      opacity: 0,
      xPercent: -innerWidth,
      duration: 1, 
      ease: 'power4.inOut'
    });

    gsap.from(imageSection3.current.children[0], {
      scrollTrigger: imageSection3.current,
      opacity: 0,
      scale: 0,
    });

    gsap.from(imageSection3.current.children[1], {
      scrollTrigger: imageSection3.current.children[1],
      opacity: 0,
      xPercent: innerWidth,
      duration: 1, 
      ease: 'power4.inOut'
    });

    gsap.from('#search-banner', {
      scrollTrigger: '#search-banner', 
      opacity: 0,
      duration: 1, 
      ease: 'power4.inOut'
    })

    gsap.from('#lastSection', {
      scrollTrigger: '#lastSection', 
      opacity: 0, 
      duration: 1, 
      ease: 'power4.inOut'
    })
  });
  return (
    <main>
      <section ref={heroSection} className="container pt-5 relative">
        <Image
          src="/recepies-find-your-recepie.webp"
          width="1906"
          height="1096"
          alt="Find Your Recipe"
          className="h-[50vh] object-cover min-h-[300px]"
        />
        <div className="px-[25px] py-[45px] md:px-[50px] md:py-[70px] w-full max-w-2xl absolute right-0 -bottom-20 bg-teal gsapSlideCard">
          <p className="text-black text-sm md:text-[18px] mb-2">WELCOME TO RECIPES</p>
          <h1 className="text-black text-3xl md:text-5xl mb-5">Find Your Recipe</h1>
          <button>
              <Link href="/recipes" className='flex gap-5 text-black items-center baseTransition hover:opacity-70 group'>
                Recipes
                <svg
                className="group-hover:ml-2 baseTransition"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.3661 5.36611C15.8542 4.87796 16.6457 4.87796 17.1339 5.36611L25.8839 14.1161C26.372 14.6043 26.372 15.3958 25.8839 15.8839L17.1339 24.6339C16.6457 25.122 15.8542 25.122 15.3661 24.6339C14.878 24.1458 14.878 23.3543 15.3661 22.8661L21.9822 16.25H5C4.30965 16.25 3.75 15.6904 3.75 15C3.75 14.3096 4.30965 13.75 5 13.75H21.9822L15.3661 7.13389C14.878 6.64573 14.878 5.85428 15.3661 5.36611Z"
                    fill="#000"
                  />
                </svg>
              </Link>
            </button>
        </div>
      </section>

      <section className="container pt-40 md:pt-72">
        <div
          ref={recipeCard}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <div>
            <Link href="#">
              <Image
                src="/recepies-broccoli-salad.webp"
                width="750"
                height="300"
                alt="Broccoli Salad"
                className="object-cover w-full h-[250px]"
              />
            </Link>
            <div className="flex items-start gap-5 my-4">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_62)">
                    <path
                      d="M17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9ZM2.25512 9C2.25512 12.7251 5.2749 15.7449 9 15.7449C12.7251 15.7449 15.7449 12.7251 15.7449 9C15.7449 5.2749 12.7251 2.25512 9 2.25512C5.2749 2.25512 2.25512 5.2749 2.25512 9Z"
                      fill="white"
                    />
                    <path
                      d="M9 3.75C8.58578 3.75 8.25 4.08578 8.25 4.5V9.35002C8.25 9.35002 8.25 9.54555 8.34503 9.69262C8.40863 9.81735 8.50777 9.92572 8.63805 10.0009L12.1029 12.0014C12.4616 12.2085 12.9203 12.0856 13.1274 11.7268C13.3345 11.3681 13.2116 10.9094 12.8529 10.7023L9.75 8.9109V4.5C9.75 4.08579 9.41423 3.75 9 3.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_62">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>20 min</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3299 4.04356C10.5421 3.56747 10.6483 3.32942 10.7961 3.25611C10.9244 3.19242 11.0751 3.19242 11.2034 3.25611C11.3512 3.32942 11.4573 3.56747 11.6695 4.04356L13.3599 7.83575C13.4227 7.9765 13.454 8.04687 13.5026 8.10076C13.5455 8.14844 13.598 8.18659 13.6566 8.21269C13.7229 8.24221 13.7995 8.2503 13.9528 8.26647L18.0817 8.70226C18.6001 8.75696 18.8592 8.78432 18.9746 8.90219C19.0748 9.00457 19.1214 9.14794 19.1005 9.28969C19.0765 9.45286 18.8829 9.6273 18.4957 9.97628L15.4114 12.7558C15.297 12.8589 15.2397 12.9105 15.2035 12.9733C15.1714 13.029 15.1513 13.0907 15.1446 13.1545C15.137 13.2266 15.153 13.3019 15.185 13.4527L16.0464 17.5142C16.1546 18.0242 16.2087 18.2791 16.1322 18.4252C16.0658 18.5522 15.9439 18.6408 15.8026 18.6647C15.64 18.6922 15.4142 18.5621 14.9627 18.3016L11.3661 16.2272C11.2327 16.1502 11.1659 16.1118 11.095 16.0967C11.0322 16.0834 10.9673 16.0834 10.9045 16.0967C10.8335 16.1118 10.7668 16.1502 10.6333 16.2272L7.03682 18.3016C6.58529 18.5621 6.35952 18.6922 6.1969 18.6647C6.05563 18.6408 5.93368 18.5522 5.86727 18.4252C5.79083 18.2791 5.84491 18.0242 5.95306 17.5142L6.81451 13.4527C6.84648 13.3019 6.86247 13.2266 6.85488 13.1545C6.84816 13.0907 6.82811 13.029 6.79603 12.9733C6.75978 12.9105 6.70254 12.8589 6.58808 12.7558L3.50384 9.97628C3.11663 9.6273 2.92302 9.45286 2.89895 9.28969C2.87805 9.14794 2.92463 9.00457 3.02485 8.90219C3.14024 8.78432 3.39943 8.75696 3.91781 8.70226L8.04674 8.26647C8.19999 8.2503 8.2766 8.24221 8.34286 8.21269C8.40148 8.18659 8.45397 8.14844 8.49692 8.10076C8.54546 8.04687 8.57683 7.9765 8.63958 7.83575L10.3299 4.04356Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>4.7</span>
              </div>
            </div>
            <h2 className="text-3xl">
              <Link href="#">Harissa marinated broccoli salad</Link>
            </h2>
          </div>

          <div>
            <Link href="#">
              <Image
                src="/recepies-baba-ganoush.jpg"
                width="750"
                height="300"
                alt="Broccoli Salad"
                className="object-cover w-full h-[250px]"
              />
            </Link>
            <div className="flex items-start gap-5 my-4">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_62)">
                    <path
                      d="M17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9ZM2.25512 9C2.25512 12.7251 5.2749 15.7449 9 15.7449C12.7251 15.7449 15.7449 12.7251 15.7449 9C15.7449 5.2749 12.7251 2.25512 9 2.25512C5.2749 2.25512 2.25512 5.2749 2.25512 9Z"
                      fill="white"
                    />
                    <path
                      d="M9 3.75C8.58578 3.75 8.25 4.08578 8.25 4.5V9.35002C8.25 9.35002 8.25 9.54555 8.34503 9.69262C8.40863 9.81735 8.50777 9.92572 8.63805 10.0009L12.1029 12.0014C12.4616 12.2085 12.9203 12.0856 13.1274 11.7268C13.3345 11.3681 13.2116 10.9094 12.8529 10.7023L9.75 8.9109V4.5C9.75 4.08579 9.41423 3.75 9 3.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_62">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>1 hour</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3299 4.04356C10.5421 3.56747 10.6483 3.32942 10.7961 3.25611C10.9244 3.19242 11.0751 3.19242 11.2034 3.25611C11.3512 3.32942 11.4573 3.56747 11.6695 4.04356L13.3599 7.83575C13.4227 7.9765 13.454 8.04687 13.5026 8.10076C13.5455 8.14844 13.598 8.18659 13.6566 8.21269C13.7229 8.24221 13.7995 8.2503 13.9528 8.26647L18.0817 8.70226C18.6001 8.75696 18.8592 8.78432 18.9746 8.90219C19.0748 9.00457 19.1214 9.14794 19.1005 9.28969C19.0765 9.45286 18.8829 9.6273 18.4957 9.97628L15.4114 12.7558C15.297 12.8589 15.2397 12.9105 15.2035 12.9733C15.1714 13.029 15.1513 13.0907 15.1446 13.1545C15.137 13.2266 15.153 13.3019 15.185 13.4527L16.0464 17.5142C16.1546 18.0242 16.2087 18.2791 16.1322 18.4252C16.0658 18.5522 15.9439 18.6408 15.8026 18.6647C15.64 18.6922 15.4142 18.5621 14.9627 18.3016L11.3661 16.2272C11.2327 16.1502 11.1659 16.1118 11.095 16.0967C11.0322 16.0834 10.9673 16.0834 10.9045 16.0967C10.8335 16.1118 10.7668 16.1502 10.6333 16.2272L7.03682 18.3016C6.58529 18.5621 6.35952 18.6922 6.1969 18.6647C6.05563 18.6408 5.93368 18.5522 5.86727 18.4252C5.79083 18.2791 5.84491 18.0242 5.95306 17.5142L6.81451 13.4527C6.84648 13.3019 6.86247 13.2266 6.85488 13.1545C6.84816 13.0907 6.82811 13.029 6.79603 12.9733C6.75978 12.9105 6.70254 12.8589 6.58808 12.7558L3.50384 9.97628C3.11663 9.6273 2.92302 9.45286 2.89895 9.28969C2.87805 9.14794 2.92463 9.00457 3.02485 8.90219C3.14024 8.78432 3.39943 8.75696 3.91781 8.70226L8.04674 8.26647C8.19999 8.2503 8.2766 8.24221 8.34286 8.21269C8.40148 8.18659 8.45397 8.14844 8.49692 8.10076C8.54546 8.04687 8.57683 7.9765 8.63958 7.83575L10.3299 4.04356Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>2.5</span>
              </div>
            </div>
            <h2 className="text-3xl">
              <Link href="#">Baba ganoush</Link>
            </h2>
          </div>

          <div>
            <Link href="#">
              <Image
                src="/recepies-creamy-chicken.jpg"
                width="750"
                height="300"
                alt="Broccoli Salad"
                className="object-cover w-full h-[250px]"
              />
            </Link>
            <div className="flex items-start gap-5 my-4">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_62)">
                    <path
                      d="M17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9ZM2.25512 9C2.25512 12.7251 5.2749 15.7449 9 15.7449C12.7251 15.7449 15.7449 12.7251 15.7449 9C15.7449 5.2749 12.7251 2.25512 9 2.25512C5.2749 2.25512 2.25512 5.2749 2.25512 9Z"
                      fill="white"
                    />
                    <path
                      d="M9 3.75C8.58578 3.75 8.25 4.08578 8.25 4.5V9.35002C8.25 9.35002 8.25 9.54555 8.34503 9.69262C8.40863 9.81735 8.50777 9.92572 8.63805 10.0009L12.1029 12.0014C12.4616 12.2085 12.9203 12.0856 13.1274 11.7268C13.3345 11.3681 13.2116 10.9094 12.8529 10.7023L9.75 8.9109V4.5C9.75 4.08579 9.41423 3.75 9 3.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_62">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>30 min</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3299 4.04356C10.5421 3.56747 10.6483 3.32942 10.7961 3.25611C10.9244 3.19242 11.0751 3.19242 11.2034 3.25611C11.3512 3.32942 11.4573 3.56747 11.6695 4.04356L13.3599 7.83575C13.4227 7.9765 13.454 8.04687 13.5026 8.10076C13.5455 8.14844 13.598 8.18659 13.6566 8.21269C13.7229 8.24221 13.7995 8.2503 13.9528 8.26647L18.0817 8.70226C18.6001 8.75696 18.8592 8.78432 18.9746 8.90219C19.0748 9.00457 19.1214 9.14794 19.1005 9.28969C19.0765 9.45286 18.8829 9.6273 18.4957 9.97628L15.4114 12.7558C15.297 12.8589 15.2397 12.9105 15.2035 12.9733C15.1714 13.029 15.1513 13.0907 15.1446 13.1545C15.137 13.2266 15.153 13.3019 15.185 13.4527L16.0464 17.5142C16.1546 18.0242 16.2087 18.2791 16.1322 18.4252C16.0658 18.5522 15.9439 18.6408 15.8026 18.6647C15.64 18.6922 15.4142 18.5621 14.9627 18.3016L11.3661 16.2272C11.2327 16.1502 11.1659 16.1118 11.095 16.0967C11.0322 16.0834 10.9673 16.0834 10.9045 16.0967C10.8335 16.1118 10.7668 16.1502 10.6333 16.2272L7.03682 18.3016C6.58529 18.5621 6.35952 18.6922 6.1969 18.6647C6.05563 18.6408 5.93368 18.5522 5.86727 18.4252C5.79083 18.2791 5.84491 18.0242 5.95306 17.5142L6.81451 13.4527C6.84648 13.3019 6.86247 13.2266 6.85488 13.1545C6.84816 13.0907 6.82811 13.029 6.79603 12.9733C6.75978 12.9105 6.70254 12.8589 6.58808 12.7558L3.50384 9.97628C3.11663 9.6273 2.92302 9.45286 2.89895 9.28969C2.87805 9.14794 2.92463 9.00457 3.02485 8.90219C3.14024 8.78432 3.39943 8.75696 3.91781 8.70226L8.04674 8.26647C8.19999 8.2503 8.2766 8.24221 8.34286 8.21269C8.40148 8.18659 8.45397 8.14844 8.49692 8.10076C8.54546 8.04687 8.57683 7.9765 8.63958 7.83575L10.3299 4.04356Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>3.2</span>
              </div>
            </div>
            <h2 className="text-3xl">
              <Link href="#">Creamy chicken stew</Link>
            </h2>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-36" ref={sectionLeftRight}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 md:gap-32 items-center">
          <div>
            <h2 className="text-5xl mb-7">Have a Great Recipe? </h2>
            <p className="mb-8">
              Share it with our community of food enthusiasts! Join us to
              showcase your culinary creations, discover new recipes, and
              connect with fellow foodies. Whether it&apos;s a family favorite,
              a twist on a classic dish, or a completely original creation,
              inspire others with your cooking skills!
            </p>
            <Button link="/new-recipe" text="Create Recipe Now" />
          </div>

          <div>
            <Image
              src="/how-it-works-2.png"
              alt="Create a Recipe"
              width="750"
              height="741"
            />
          </div>
        </div>
      </section>

      <section className="container pb-36 relative" ref={imageSection2}>
        <Image
          src="/recepies-birthday-desert.jpg"
          alt="Birthday Desert"
          width="2000"
          height="667"
          className="object-cover h-full max-h-[70vh] min-h-[300px]"
        />
        <div className="px-[25px] py-[45px] md:px-[50px] md:py-[70px] w-full max-w-2xl absolute left-0 bottom-12 bg-red-100">
          <p className="text-black text-sm md:text-[18px] mb-2">BIRTHDAY</p>
          <h2 className="text-black text-3xl md:text-5xl">The Perfect Desert</h2>
        </div>
      </section>

      <section className="container pb-36 pt-10 relative" ref={imageSection3}>
        <Image
          src="/recepies-nachos.jpg"
          alt="Birthday Desert"
          width="2000"
          height="667"
          className="object-cover h-full max-h-[70vh] min-h-[300px]"
        />
        <div className="px-[25px] py-[45px] md:px-[50px] md:py-[70px] w-full max-w-2xl absolute right-0 bottom-12 bg-red-100">
          <p className="text-black text-sm md:text-[18px] mb-2">MEXICAN</p>
          <h2 className="text-black text-3xl md:text-5xl">Loaded Veggie Nachos</h2>
        </div>
      </section>

      <section id="search-banner" className="py-24 container">
        <div>
          <h2 className="text-5xl mb-5 text-center">
            Looking for Specific Recipe?
          </h2>
          <p className="text-center">
            Type the food into the search field below
          </p>
          <div className="flex items-center justify-center mt-8 max-w-xs mx-auto">
            <SearchInput />
          </div>
        </div>
      </section>

      <section>
        <LastSection />
      </section>
      <Copyright />
    </main>
  );
}
