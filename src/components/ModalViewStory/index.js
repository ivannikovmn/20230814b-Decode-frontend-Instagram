import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../app/images/avatar.png'

export default function ModalViewStory({close, story}) {
    const storyImageSrc = story.story;
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
                        ...
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