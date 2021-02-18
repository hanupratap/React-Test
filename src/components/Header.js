import Button from './Button'



const Header = ({isadded, onAdd}) => {

    const onclick = ()=>{
        onAdd()
    }
    
    return (
        <header className='header'>
            <h1 style={headingStyle}>Task Tracker</h1>
            <Button text={!isadded?'Add':'Close'} color={!isadded?'green':'gray'} onclick={onclick}/>
        </header>
    )
}

const headingStyle ={
    color: 'grey',
    backgroundColor: 'transparent'
}

export default Header
