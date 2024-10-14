function Comment({noteChange}) {

    return (
        <div style={{padding:"20px"}}>
            <label style={{width: "100%"}}>
                <p style={{
                    fontFamily: "Barlow",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "24.76px",
                    textAlign: "left"
                }}>Sipariş Notu</p>
                <textarea style={{
                    width: "100%",
                    height: "56px",
                    padding: "5px 155px 4px 20px",
                    borderRadius: "6px 0px 0px 0px",
                }}
                    name="postContent"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    rows={4}
                    cols={40}
                    onChange={noteChange}
                />
            </label>
        </div>
    );
}


export default Comment;