export default function Button ({children, handleSwitchButtonClick}){
  return <button className="multiple-switcher" onClick={handleSwitchButtonClick}>{children}</button>
}