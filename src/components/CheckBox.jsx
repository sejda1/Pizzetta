import { useState } from "react"
import "./CheckBox.css"
function CheckBox({ ingredients,onChange }) {
  const [data,setData]=useState(ingredients)
  return (
    <div className="Checkbox-wrapper">
      <h1 style={{
        fontFamily: "Barlow",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "24.76px",
        textAlign: "left",
        marginTop: "5px"
      }}>Ek Malzemeler</h1>
      <h2 style={{
        fontFamily: "Barlow",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "56px",
        textAlign: "left",
      }}>En fazla 10 malzeme seçebilirsiniz. 5TL </h2>

      <div className="checkbox-container" style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",


      }}>
        {data.map((ingredient,idx) => {
          return (
            <label className="cb-container" key={idx}>
              {ingredient}
              <input type="checkbox" onChange={onChange} value={ingredient}/>
              <span className="checkmark" />
            </label>
          )
        })}
      </div>
    </div>

  )
}
export default CheckBox;