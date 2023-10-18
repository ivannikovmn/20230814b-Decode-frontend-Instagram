import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../app/images/avatar.png'
import ModalEditStory from '@/components/ModalEditStory';
import { useEffect, useState } from 'react'

export default function ModalViewStory({close, story, id}) {
    const storyImageSrc = story.story;

    const [ModalPostEditIsStory, setModalStoryEditIsOpen] = useState(false)

    const closeModalStoryEdit = () => {
        setModalStoryEditIsOpen(false)
      }

      const closeChildModal = () => {
        close(); 
    }   

    return(
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner">
                <div className='flex flex-js-sb'>
                    <div>                    
                        <Link className="p2" href="/user-profile">
                            <Image src={avatar}  alt="icon"/>                        
                        </Link>                  
                        terrylucas  
                        2мин.                  
                    </div>
                    <div>
                        {ModalPostEditIsStory && (
                            <ModalEditStory close={closeModalStoryEdit} closeParentModal={closeChildModal} id={id} />
                        )}
                            
                            <a style={{cursor:'pointer'}} onClick={()=>setModalStoryEditIsOpen(true)}>...</a>                        
                    </div>
                </div>
                <div className='flex p3 flex-js-c'>                    
                    {/* <img src="/images/Small-Post1.png" /> */}
                    <img src={story} />
                </div>
            </div>

        </div>
  )
}