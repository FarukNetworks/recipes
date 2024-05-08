'use client'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import db from '../firebase';
import { getDocs, collection } from 'firebase/firestore';

const Recipes = () => {
  const [data, setData] = useState([]);
  //const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querysnapShot = await getDocs(collection(db, 'recipes'));

        const dataArray = [];
        querysnapShot.forEach(doc => {
          const { title, description, featureImage } = doc.data();
          const item = {
            id: doc.id,
            title,
            description,
            featureImage, // assuming the field in Firestore is named featureImage
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

  return (
    <div className="container pt-16">
      <h1 className="text-5xl mb-16 text-center">Explore Recipes</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {data.map(item => (
          <div className="" key={item.id}>
            <Link href={`/recipes/${encodeURIComponent(item.title.replace(/ /g, '-').toLowerCase())}`}>
              <Image
                src={item.featureImage} // Use featureImage from Firestore data
                width="750"
                height="300"
                alt={item.title} // Use title as alt text
                className="object-cover w-full mb-5 h-[250px]"
              />
            </Link>
            <h2 className='text-3xl mb-3'>{item.title}</h2>
            <p className='baseExcerpt mb-5'>{item.description}</p>
            <Link href="#">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
