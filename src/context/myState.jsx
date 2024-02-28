import MyContext from "./myContext"

const myState = ({children}) => {
    const name = 'shubham'
    return (
        <MyContext.Provider value={{name}}>
            {children}
        </MyContext.Provider>
    )
}


export default myState