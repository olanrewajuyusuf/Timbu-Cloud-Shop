import React from 'react'

const Header = () => {
  return (
    <header>
        <nav className='flex justify-between'>
            <h1 className="text-3xl font-bold underline">Timbu Cloud</h1>
            <ul className='flex'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <button className='btn btn-accent'>button</button>
        </nav>
    </header>
  )
}

export default Header