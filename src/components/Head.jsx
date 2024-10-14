function Head() {
    return (
        <div className="head"
            style={{
                height: "138px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: "0",
                width: "100%",
                backgroundColor: "#CE2829"
            }}>
            <img
                className="teknyemekler"
                style=
                {{
                    width: "20rem",
                    height: "auto",
                    margin: "3.5rem",

                }}
                src="/iteration-1/logo.svg"
                alt="Teknolojik Yemekler" />
        </div>
    )
}
export default Head;