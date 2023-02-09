import React, { useState } from 'react'
import Title from './components/Title'
import dog from './img/dog.jpg'
import {AiFillSmile,AiFillHeart,AiOutlineHeart,AiOutlineComment} from 'react-icons/ai'

function App() {
        const[like,setLike]= useState(false);
        const[count,setCount] = useState(0);

        function toggleClick(){
          if(!like){
            setLike(true);
            setCount(count+1);
          }
          else{
            setLike(false);
            setCount(count-1)
          }
        }
  return (
    <div>
      <Title text={'Like Photo App'}/>
      <br />
      <Title text={`Likes : ${count}`}/>
      <div className='m-auto w-80 cursor-pointer bg-gray-700 rounded-lg'>
          <div className='text-center text-white flex justify-center gap-2'>
            <div className='my-auto'><AiFillSmile size={'2em'}/></div>
            <small className='text-xl font-medium'>Snoop-Dawg</small>
          </div>
          <img src={dog} alt=""  className='h-fit ' onDoubleClick={toggleClick}/>
          <div className='flex justify-between pt-1 pb-1'>
            <AiOutlineComment size={'2em'} />
            {''}
            {like ? <AiFillHeart size={'2em'} className='text-red-700' onClick={toggleClick}/> : <AiOutlineHeart size={'2em'} onClick={toggleClick}/>}
          </div>
      </div>
    </div>
  )
}

export default App