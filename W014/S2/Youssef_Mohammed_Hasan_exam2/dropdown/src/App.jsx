import React from 'react';
function Navbar() {
  let dropdownMenu = React.useRef(null)

  const handleClick = () => {
    console.log(dropdownMenu.current)
    dropdownMenu.current.classList.toggle('hidden')
  }
  return (
    <nav className='flex justify-between p-5 bg-blue-400'>
      <h1>Brand</h1>
      <div className='bg-amber-50 p-3 gap-2 absolute right-6 top-20 flex flex-col' ref={dropdownMenu}>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
        <a>Lorem</a>
      </div>
      <button className='border-2 border-white rounded-4xl px-3 py-1 text-white transition-all hover:bg-white hover:text-blue-500 hover:border-blue-500' onClick={handleClick}>Dropdown</button>
    </nav>
  )
}
export default function App() {
  return (
    <Navbar />
  );
}


