import React from 'react'


const FeedBackPage = () => {
  return <>
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center my-4 text-[--secondary-color]">
          write your feedback </h1>
        <form action="" className="flex w-full flex-col justify-center items-center gap-[20px]">

          <textarea name="feedbak" id="feedback" className='md:w-[500px] w-full outline-none border-2 p-2 rounded-lg h-[200px] border-[--secondary-color]' placeholder='Write Your Feedback Here....'></textarea>
          <button
            className="border-2 md:w-[200px] w-full mt-[8px]  cursor-pointer transition-all hover:bg-[--secondary-color] hover:text-white border-[--secondary-color] py-[8px] px-2 rounded-lg capitalize font-bold text-[--secondary-color] text-[18px]"
            type="submit"
          >
            Send
          </button>        </form>
      </div>
    </div>
  </>
}

export default FeedBackPage