import './Button.css'




export default function Button({ children, onClick, active }) {
   

  return (
    <button className={`button ${active ? 'active' : ''}`} onClick={onClick}>
        {children}
    </button>

  )
}