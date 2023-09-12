import Input from '@/components/input';
import { END_POINT } from '@/config/end-point';
import axios from 'axios';
import { useEffect, useState  } from 'react';
import AutoCompliteSelect from '@/components/AutoCompliteSelect'
import AutoCompliteTags from '../AutoCompliteTags';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { createPost } from '@/app/store/slices/postSlice';

export default function ModalAddPos( {close, addPost} ) {
  const router = useRouter()
  const dispatch = useDispatch()

  const [post, setPost] = useState("")
  const [about, setAbout] = useState("")
  const [allParticipants, setParticipants] = useState([])  
  const [cities, setCities] = useState([])
  const [participants, setSelectedParticipants] = useState("")
  const [cityId, setCitiy] = useState()  

    useEffect(() => {
      console.log("didMount");

      try {
        const response = axios.get(`${END_POINT}/api/region/cities`).then(res => {
          setCities(res.data)
        })
        // Обработка успешного ответа
      } catch (error) {
        if (error.response) {
          // Обработка ошибки на стороне сервера (например, коды состояния HTTP)
          console.error('Ошибка на стороне сервера:', error.response.data);
        } else if (error.request) {
          // Обработка ошибки запроса (например, нет соединения)
          console.error('Ошибка запроса:', error.request);
        } else {
          // Обработка других ошибок
          console.error('Ошибка:', error.message);
        }
      }
            
      axios.get(`${END_POINT}/api/participants`).then(res => {
        setParticipants(res.data)
      })     
    }, [])
  
    console.log("rerender",{
      post,
      about,
      participants,
      cities
    })
    const onSelect =(data) => {
      // console.log('onSelect', data);
      // setCity(res.data)
    }

    const onChangePost = (e) => {
      // console.log(e.target.value);
      setPost(e.target.value)
    } 

    const onChangeAbo = (e) => {
      // console.log(e.target.value);
      setAbout(e.target.value)
    }     

    const  onParticipantsChange =(data) => {
      // console.log(data);
      const arr = data.map(item => item.name)
      setSelectedParticipants(arr.join(","))
    }  
    
    const save = () => {
      const posts = {
        post,     
        // story,
        about
        // "participants": "_mikhail_ivannikov",
        // "cityId": "31"
      }
      console.log(posts);
      addPost(posts)
    }

    const handleSave = () => {
      dispatch(createPost(    {
        post,
        about,  
        participants: "_kz_al",   
        cityId: "31"
      }, router))
  
    }    

    return(
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner">
                
                <div className="modal-actions">
                    <button className="button button-primary-bordered" onClick={close}>Отменить</button>
                    <h4>Создание публикации</h4>
                    <button className="button button-primary" onClick={() => { handleSave(); save(); }}>Поделиться</button>                                        
                </div>

                <Input placeholder="Фото/видео..." type="text" label="Добавить фото/видео" size="fieldset-lg" onChange={onChangePost} value={post}/>                
                <textarea className="textarea" placeholder="Добавьте подпись..." type="text" onChange={onChangeAbo}>{about}</textarea>
                <AutoCompliteSelect placeholder="Место.." type="text" label="Добавить место" size="fieldset-lg" items={cities} onSelect={(data) => setCitiy(data.id)}/>                              
                <AutoCompliteTags  placeholder="Аккаунты..." type="text" label="Отметить аккаунты" size="fieldset-lg" items={allParticipants} onSelect={onParticipantsChange}/> 
                
                
            </div>

        </div>           
  )
}