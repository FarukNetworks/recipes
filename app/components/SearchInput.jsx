'use client'
import { useState, useEffect } from "react"
import db from "../firebase"
import { getDocs, collection } from 'firebase/firestore';
import Link from "next/link";
import Image from "next/image";



export default function SearchInput() {

  const [inputValue, setInputValue] = useState(""); 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querysnapShot = await getDocs(collection(db, 'recipes'));
        const dataArray = [];
        querysnapShot.forEach(doc => {
          const { title, excerpt, featureImage } = doc.data();
          const item = {
            id: doc.id,
            title,
            excerpt,
            featureImage, 
          };
          dataArray.push(item);
        });
        setData(dataArray);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const searchHandler = (e) => {
    setInputValue(e.target.value);
  };

  let searchItems = data.filter(item => {
    return item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
           item.excerpt.toLowerCase().includes(inputValue.toLowerCase());
  });

  let isDataVisible = false;

  if(inputValue.length >= 1) {
isDataVisible = true;
  }

  return (
    <div>
      <form className="flex items-center justify-between bg-black-20 py-2 px-6 w-full">
        <input
          type="text"
          placeholder="Search..."
          onChange={searchHandler}
          value={inputValue}
          className="bg-transparent outline-none border-none"
        />
        <button type="button">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3938 13.8677L18 17.5M16.3333 9.16667C16.3333 12.8486 13.3486 15.8333 9.66667 15.8333C5.98477 15.8333 3 12.8486 3 9.16667C3 5.48477 5.98477 2.5 9.66667 2.5C13.3486 2.5 16.3333 5.48477 16.3333 9.16667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </form>
      {isDataVisible && (
        <div className="grid grid-cols-1 gap-10 absolute bg-[#3d3d3d] left-[50%] -translate-x-1/2 shadow-xl z-50 max-w-xl w-full p-5 mx-auto mt-5">
         {searchItems.length > 0 ? (
      searchItems.map(item => (
          <div key={item.id} className="flex items-center justify-center gap-5">
            <Link
              href={`/recipes/${encodeURIComponent(
                item.title.replace(/ /g, '-').toLowerCase()
              )}`}
              className="group w-[30%]"
            >
              <Image
                src={item.featureImage} // Use featureImage from Firestore data
                width="750"
                height="300"
                alt={item.title} // Use title as alt text
                className="object-cover w-full h-[100px] group-hover:scale-90 baseTransition"
              />
            </Link>
            <div className="w-[70%]">
              <h2 className="text-xl mb-5">
                <Link
                  href={`/recipes/${encodeURIComponent(
                    item.title.replace(/ /g, '-').toLowerCase()
                  )}`}
                  className='baseTransition hover:opacity-70'
                >
                  {item.title}
                </Link>
              </h2>
              <Link
                href={`/recipes/${encodeURIComponent(
                  item.title.replace(/ /g, '-').toLowerCase()
                )}`}
                className='baseTransition hover:opacity-70'
              >
                Read More
              </Link>
            </div>
          </div>
         ))
        ) : (
          <p className="text-white text-center">No results found.</p>
        )}
      </div>
    )}
    </div>
  )
}