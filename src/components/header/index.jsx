import React from 'react'

const Header = () => {
  return (
    <header className='sticky mx-6 my-2 rounded-md border-cyan-900 w-full'>
        <nav className='flex flex-row justify-between'>
            <h1 className='text-2xl font-bold'>Logo</h1>
            <ul className='list-none flex flex-row'>
                <li><a className='text-xl mx-2' href="/">Home</a></li>
                <li><a className='text-xl mx-2' href="/about">About</a></li>
                <li><a className='text-xl mx-2' href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header