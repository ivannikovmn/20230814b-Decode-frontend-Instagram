import Input from '@/components/input';
import { END_POINT } from '@/config/end-point';
import axios from 'axios';
import { useEffect, useState  } from 'react';
import AutoCompliteSelect from '@/components/AutoCompliteSelect'

export default function ModalAddPos( {close, addPost} ) {
  const [post, setPost] = useState("")
  const [about, setAbout] = useState("")
  

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

    const onChangePost = (e) => {
      // console.log(e.target.value);
      setPost(e.target.value)
    } 

    const onChangeAbo = (e) => {
      // console.log(e.target.value);
      setAbout(e.target.value)
    }     

    const save = () => {
      const post = {
        // post,     
        // story,
        about
        // "participants": "_mikhail_ivannikov",
        // "cityId": "31"
      }
      console.log(post);
      addPost(post)
    }

    return(
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner">
                
                <div className="modal-actions">
                    <button className="button button-primary-bordered" onClick={close}>Отменить</button>
                    <h4>Создание публикации</h4>
                    <button className="button button-primary" onClick={save}>Поделиться</button>
                </div>

                <Input placeholder="Фото/видео..." type="text" label="Добавить фото/видео" size="fieldset-lg" onChange={onChangePost} value={post}/>
                <textarea className="textarea" placeholder="Добавьте подпись..." type="text" onChange={onChangeAbo}>{about}</textarea>
                <AutoCompliteSelect placeholder="Место.." type="text" label="Добавить место" size="fieldset-lg" items={cities} onSelect={onSelect}/>  
                {/* AutoCompliteSelec как даты  onChange и value, чтобы прийти к cityId*/}
                {/* теги */}

            </div>

        </div>           
  )
}