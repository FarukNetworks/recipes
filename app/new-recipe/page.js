'use client';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Copyright from '../components/Copyright';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }); // Use dynamic to import ReactQuill

import 'react-quill/dist/quill.snow.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const NewRecipe = () => {
  const router = useRouter();

  gsap.registerPlugin(ScrollTrigger);

  const newRecipeContainer = useRef();

  useGSAP(() => {
    gsap.from(newRecipeContainer.current, {
      opacity: 0,
    });
  });

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    description: '',
    ingredients: '',
    featureImage: null, // Store file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDescription = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      description: value,
    }));
  };

  const handleIngredients = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      ingredients: value,
    }));
  };

  const handleFileSelected = (e) => {
    const file = e.target.files[0]; // Get the first file
    setFormData((prevState) => ({
      ...prevState,
      featureImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, excerpt, description, ingredients, featureImage } = formData;

    // Upload image to Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/${featureImage.name}`);
    await uploadBytes(storageRef, featureImage);

    // Get image URL
    const imageUrl = await getDownloadURL(storageRef);

    const fetchData = async () => {
      try {
        await addDoc(collection(db, 'recipes'), {
          title: title.trim(),
          excerpt: excerpt.trim(),
          slug: title.trim().replace(/ /g, '-').toLowerCase(),
          description: description,
          ingredients: ingredients,
          featureImage: imageUrl, // Store image URL
        });
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();

    setFormData({
      title: '',
      excerpt: '',
      description: '',
      ingredients: '',
      featureImage: null,
    });

    router.push('/recipes/' + title.trim().toLowerCase().replace(/ /g, '-'));
  };

  return (
    <div ref={newRecipeContainer}>
      <div className="grid place-items-center pt-5">
        <SignedIn>
          <form className="bg-white max-w-2xl w-full p-10 rounded-xl" onSubmit={handleSubmit}>
            <h1 className="text-3xl mb-10 text-black text-center">Create New Recipe</h1>
            <div className="mb-7">
              <label className="text-black mb-1 block text-sm" htmlFor="title">
                Title
              </label>
              <input
                className="text-black w-full border border-[#0000001c] rounded-md py-1 px-3 focus:outline-[#0000004b]"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-7">
              <label className="text-black mb-1 block text-sm" htmlFor="title">
                Excerpt
              </label>
              <textarea
                className="text-black text-sm w-full border border-[#0000001c] rounded-md py-1 px-3 focus:outline-[#0000004b]"
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label className="text-black mb-1 block text-sm" htmlFor="description">
                Description
              </label>
              <ReactQuill
                theme="snow"
                className="text-black w-full text-sm"
                name="description"
                value={formData.description}
                onChange={handleDescription}
              />
            </div>
            <div className="mb-8">
              <label className="text-black mb-1 block text-sm" htmlFor="ingredients">
                Ingredients
              </label>
              <ReactQuill
                theme="snow"
                name="ingredients"
                className="text-black w-full text-sm"
                value={formData.ingredients}
                onChange={handleIngredients}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-10">
              <label htmlFor="featureImage" className="text-black mb-1 block text-sm">
                Feature Image
              </label>
              <input id="featureImage" className="text-black" type="file" value={formData.file} onChange={handleFileSelected} />
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="text-[#303030] baseTransition float-right bg-white border border-gray-300 focus:outline-none hover:opacity-70 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg px-7 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Publish
              </button>
            </div>
          </form>
          <Copyright />
        </SignedIn>
      </div>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default NewRecipe;
