function Name({nameChange}) {

    return (
        <div style={{padding:"20px"}}>
            <label style={{width: "100%"}}>
                <p style={{
                    fontFamily: "Barlow",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "24.76px",
                    textAlign: "left"
                }}>Isim Soyisim</p>
                <textarea style={{
                    width: "100%",
                    height: "56px",
                    padding: "5px 155px 4px 20px",
                    borderRadius: "6px 0px 0px 0px",
                }}
                    name="postContent"
                    rows={4}
                    cols={40}
                    onChange={nameChange}
                />
            </label>
        </div>
    );
}


export default Name