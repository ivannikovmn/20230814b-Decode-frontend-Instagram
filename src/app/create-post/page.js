'use client';
import Header from '@/components/header'
import Input from '@/components/input';
import { END_POINT } from '@/config/end-point';
import axios from 'axios';
import { useEffect, useState  } from 'react';
import AutoCompliteSelect from '@/components/AutoCompliteSelect'

export default function CreatePost() { 
  const [cities, setCities] = useState([])
  useEffect(() => {
    console.log("didMount");
    axios.get(`${END_POINT}/api/region/cities`).then(res => {
      setCities(res.data)
    })
  }, [])

  console.log("rerender")
  const onSelect =(data) => {
    console.log('onSelect', data);
  }
  
  return (
    <main>
      <Header />
      <div className='container pt7'>
        <h1>Создание публикации</h1>
        <Input placeholder="" type="text" label="Добавить фото и видео" size="fieldset-md"/>
        <Input placeholder="" type="text" label="Добавить подпись" size="fieldset-md"/>
        {/* <Input placeholder="" type="text" label="Добавить теги" size="fieldset-md"/> */}
        <AutoCompliteSelect placeholder="" type="text" label="Добавить место" size="fieldset-md" items={cities} onSelect={onSelect}/>
      </div>
    </main>
  )
}
