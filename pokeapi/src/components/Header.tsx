type HeaderProps={
    query:string,
    setquery:(query:string)=>void
}
export const Header = ({query,setquery}:HeaderProps) => {
  return (
    <header >
        <input type="text" 
        placeholder="Search a Pokemon"
        value={query}
        onChange={(e)=>setquery(e.target.value)}
        />
    </header>
  )
}
