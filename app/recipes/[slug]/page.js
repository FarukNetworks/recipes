"use client"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../firebase';

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
      <h1 className='text-5xl mb-10'>{recipe.title}</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
        <div>
          <h2 className='text-3xl mb-5'>Ingredients</h2>
          <p>{recipe.ingredients}</p>
        </div>
        <div>
          <h2 className='text-3xl mb-5'>Description</h2>
          <p>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;