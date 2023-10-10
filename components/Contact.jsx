import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact



/**
 * body { padding: 2rem 0; }<label class="block mb-6">
    <span class="text-gray-700">Your name</span>
    <input
      name="name"
      type="text"
      class="
        block
        w-full
        mt-1
        border-gray-300
        rounded-md
        shadow-sm
        focus:border-indigo-300
        focus:ring
        focus:ring-indigo-200
        focus:ring-opacity-50
      "
      placeholder="Joe Bloggs"
    />
  </label>
  <label class="block mb-6">
    <span class="text-gray-700">Email address</span>
    <input
      name="email"
      type="email"
      class="
        block
        w-full
        mt-1
        border-gray-300
        rounded-md
        shadow-sm
        focus:border-indigo-300
        focus:ring
        focus:ring-indigo-200
        focus:ring-opacity-50
      "
      placeholder="joe.bloggs@example.com"
    />
  </label>
  <label class="block mb-6">
    <span class="text-gray-700">When is your birthday?</span>
    <input
      name="birthday"
      type="date"
      class="
        block
        w-full
        mt-1
        border-gray-300
        rounded-md
        shadow-sm
        focus:border-indigo-300
        focus:ring
        focus:ring-indigo-200
        focus:ring-opacity-50
      "
    />
  </label>
  <label class="block mb-6">
    <span class="text-gray-700"
      >What kind of present you expect this year?</span
    >
    <select
      name="present"
      class="
        block
        w-full
        mt-1
        border-gray-300
        rounded-md
        shadow-sm
        focus:border-indigo-300
        focus:ring
        focus:ring-indigo-200
        focus:ring-opacity-50
      "
    >
      <option>Chocolate cake</option>
      <option>Dancing cat</option>
      <option>Custom meme about me</option>
      <option>Zoom backgrounds for the rest of my life</option>
    </select>
  </label>
  <div class="mb-6">
    <div class="mt-2">
      <div>
        <label class="inline-flex items-center">
          <input
            name="season"
            type="radio"
            class="
              text-indigo-600
              border-gray-300
              rounded-full
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-offset-0
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            checked
          />
          <span class="ml-2">I like summer</span>
        </label>
      </div>
      <div>
        <label class="inline-flex items-center">
          <input
            name="season"
            type="radio"
            class="
              text-indigo-600
              border-gray-300
              rounded-full
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-offset-0
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
          />
          <span class="ml-2">I'm more into winter</span>
        </label>
      </div>
    </div>
  </div>
  <div class="mb-6">
    <button
      type="submit"
      class="
        h-10
        px-5
        text-indigo-100
        bg-indigo-700
        rounded-lg
        transition-colors
        duration-150
        focus:shadow-outline
        hover:bg-indigo-800
      "
    >
      Send Answers
    </button>
  </div>
  <div>
    <div class="mt-2 text-gray-700 text-right text-xs">
      by
      <a href="https://herotofu.com" class="hover:underline" target="_blank"
        >HeroTofu</a
      >
    </div>
  </div>
 */