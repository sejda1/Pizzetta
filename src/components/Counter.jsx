import  {useEffect,useState} from 'react'
function Counter({counterChange}) {
    const[counter, setCounter]=useState(1);
    useEffect(()=>{
        counterChange(counter)
    },[counter])
    return (
        <>
            <div id="incrediable-main">
                <div id="incrediable-container" style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "57px",
                    height: "56px"
                }}>
                    <div >
                        <button style={{
                            width: "57px",
                            height: "56px"
                        }} type="button" onClick={()=>setCounter(counter+1)}>+</button>
                    </div>
                    <div ><p style={{
                            width: "57px",
                            height: "56px",
                            padding: "20px 20px"
                        }}>{counter}</p></div>
                    <div>
                        <button style={{
                            width: "57px",
                            height: "56px"
                        }} type="button" onClick={()=>{
                            if (counter==1) {
                                return
                            }
                            setCounter(counter-1)
                        }}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;