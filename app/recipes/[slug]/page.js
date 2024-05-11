"use client"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../firebase';
import parse from 'html-react-parser';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import Image from 'next/image';
import Copyright from '../../components/Copyright';
import Button from '../../components/Button';


const Page = () => {
  
  const slug  = usePathname().replace('/recipes/', '');

  
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        if (!slug) {
          // If slug is not defined, return early
          return;
        }

        const recipesRef = collection(db, 'recipes');
        const q = query(recipesRef, where('slug', '==', slug));



        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setRecipe(doc.data());
          });
        } else {
          console.log('Recipe not found');
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [slug]);

  if (!slug || !recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container pt-5'>
       <div className='mb-5 float-right'><Button link="/recipes" text="All Recipes" /></div>
       <Image src={recipe.featureImage} alt={recipe.title} width="1920" height="450" 
       className='mb-5 max-h-[650px] object-cover object-center'
       />
      <h1 className='text-5xl mb-10'>{recipe.title}</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
        <div>
          <h2 className='text-3xl mb-5'>Ingredients</h2>
          <div className='editor'>{parse(recipe.ingredients)}</div>
        </div>
        <div>
          <h2 className='text-3xl mb-5'>Description</h2>
          <div className='editor'>{parse(recipe.description)}</div>
        </div>
      </div>
      <div className='mt-14 text-center'><Button link="/recipes" text="Go Back" /></div>
      <div className='pt-5'><Copyright /></div>
    </div>
  );
};

export default Page;