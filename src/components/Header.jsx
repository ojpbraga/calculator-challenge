
function Header() {
    const navColors = ['#e0443e', '#dfa223', '#1ea42b'];
    
  return (
    <header className=' w-full flex items-center gap-1'>
        {
            navColors.map(color => 
                <div style={{background:color}} className='h-4 w-4 rounded-full'></div>
            )
        }
    </header>
  )
};

export default Header;