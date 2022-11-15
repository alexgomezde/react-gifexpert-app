import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = ( newCategory ) => {
    const foundCategory = categories.find(c => c.toLowerCase() == newCategory.toLowerCase());
    if(foundCategory) return;
    setCategories([ newCategory, ...categories ])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
          onNewCategory = { event => onAddCategory(event) }
      />

      { categories.map( category => ( 
          <GifGrid key={category} category={category}/>
        )
      )}

    </>
  )
}
