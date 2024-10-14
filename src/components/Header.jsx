import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Header() {
    const history = useHistory();
    const handleRedirected =()=> history.push("/create-order")
    return (
        <header>
            <section className="header-container">
                <div className="banner-container">
                    <h2>fırsatı kaçırma</h2>
                    <h1>KOD ACIKTIRIR</h1>
                    <h1>PIZZA, DOYURUR</h1>
                </div>
                <button onClick={handleRedirected} className="btn">ACIKTIM</button>
                
            </section>
        </header>
    )
}

export default Header;