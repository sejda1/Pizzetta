function SelectBox({doughTypes,onChange}) {
    return (
        <div className="selectorField"
            style={{
                display: "flex",
                flexDirection: "column",
                padding:"20px"
            }} >
            <label className="control-label"
                style={{
                    fontFamily: "Barlow",
                    fontSize: "20px",
                    fontWeight: 600,
                }}>
                Hamur Seç *
            </label>
            <select style={{
                display: "inline-block", 
                width: "100%",
                height: "56px",
                borderRadius: "6px 0px 0px 0px",
                opacity: "0px",
                backgroundColor: "#FAF7F2",
                float: "right",
                borderRadius: "6px"
            }}
                className="ctrl-combobox"
                onChange={onChange}
                >
                <option defaultValue="defaultValue" disabled>-Hamur Kalınlığı Seç-</option>
                {doughTypes.map((doughType,idx)=>{
                    return(
                        <option key={idx} value={doughType}>{doughType}</option>
                    )
                })}
                
               
            </select>
        </div>
    )
}
export default SelectBox