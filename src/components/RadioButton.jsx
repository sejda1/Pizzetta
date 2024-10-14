import './RadioButton.css'

function RadioButton({ sizes,onChange }) {
    return (
        <div>

            <h5 style={{
                fontFamily: "Barlow",
                fontSize: "20px",
            }}>Boyut Seç*</h5>

            <form style={{
                display: "flex",
                flexDirection: "row",
            }}>
                {sizes.map((size, idx) => {
                    return (
                        <div className="size-item" key={idx}>
                            <input className="radiobutton" onChange={onChange} type="radio" name="size" id={"size" + size} value={size} />
                            <label className="radiobutton-label" htmlFor={"size" + size}>{size}</label>
                        </div>
                    )
                })}

            </form>
        </div>
    )
}
export default RadioButton