import React from 'react';
import Link from 'next/link';
import {BiMessageSquareAdd} from 'react-icons/bi'

function NewBlog() {
  return (
    <Link href='/newPost' className='border-2 border-gray-600 p-2 rounded-xl hover:border-slate-800 hover:bg-slate-800 cursor-pointer duration-500'>
            <BiMessageSquareAdd className="text-3xl"/>
    </Link>
  )
}

export default NewBlog
