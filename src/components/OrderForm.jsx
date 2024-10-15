import { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import RadioButton from "./RadioButton";
import SelectBox from "./SelectBox";
import CheckBox from "./CheckBox";
import Comment from "./Comment";
import Name from "./Name";
import Counter from "./Counter";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const dummyData = {
    name: "",
    size: "",
    dough: "",
    ingredients: [],
    note: "",
    quantity: 1,
};

const sizeData = ['S', 'M', 'L'];
const doughTypeData = ['Kalın', 'Orta', 'İnce', 'Süper İnce'];
const ingredientsData = ['Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak',
    'Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Biber',
    'Kabak', 'Kanada Jambonu', 'Domates', 'Jalepeno', 'Kavurma'];

const errorMessages = {
    name: "* İsim en az 3 karakter içermelidir.",
    size: "* Lütfen bir boyut seçin.",
    dough: "* Lütfen hamur kalınlığı seçin.",
    ingredients: "* En az 4, en çok 10 tane malzeme seçmelisiniz!",
    note: "* Notunuzu giriniz."
};

function OrderForm({ onSubmit }) {
    const [form, setForm] = useState(dummyData);
    const [errorMessage, setErrorMessage] = useState({});
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    const [ingTotal, setIngTotal] = useState(0);
    const [isValid, setIsValid] = useState(false);

    const history = useHistory();

    const handleIngChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            if (selectedIngredients.length < 10) {
                setSelectedIngredients([...selectedIngredients, value]);
            }
        } else {
            setSelectedIngredients(selectedIngredients.filter(item => item !== value));
        }
    };

    const handleDoughChange = (e) => {
        setForm((prev) => ({ ...prev, dough: e.target.value }));
    };

    const handleSizeChange = (e) => {
        setForm((prev) => ({ ...prev, size: e.target.value }));
    };

    const handleCounterChange = (quantity) => {
        setForm((prev) => ({ ...prev, quantity }));
    };

    const handleNoteChange = (e) => {
        setForm((prev) => ({ ...prev, note: e.target.value }));
    };

    const handleNameChange = (e) => {
        setForm((prev) => ({ ...prev, name: e.target.value }));
    };

    const validateForm = () => {
        let newErrors = {};
        newErrors.name = !form.name || form.name.length < 3 ? errorMessages.name : "";
        newErrors.size = !form.size ? errorMessages.size : "";
        newErrors.dough = !form.dough ? errorMessages.dough : "";
        newErrors.note = !form.note ? errorMessages.note : "";
        newErrors.ingredients = selectedIngredients.length < 4 || selectedIngredients.length > 10 ? errorMessages.ingredients : "";

        setErrorMessage(newErrors);
        const isValidForm = Object.values(newErrors).every((e) => e === "");
        setIsValid(isValidForm);
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        validateForm();
        if (!isValid) {
            console.error("Form geçersiz.");
            return;
        }

        const updatedForm = { ...form, ingredients: selectedIngredients };
        axios.post('https://reqres.in/api/pizza', updatedForm)
            .then(response => {
                onSubmit(response.data);
                history.push("/order-success");
            })
            .catch(error => {
                setErrorMessage({ general: "Sipariş verirken bir hata oluştu." });
                console.error(error);
            });
    };

    useEffect(() => {
        validateForm();
    }, [form]);

    useEffect(() => {
        setForm((prev) => ({ ...prev, ingredients: selectedIngredients }));
    }, [selectedIngredients]);

    useEffect(() => {
        let total = 85.50;
        total = (total + (selectedIngredients.length * 5)) * form.quantity;
        setOrderTotal(total);
        setIngTotal((selectedIngredients.length * 5) * form.quantity);
    }, [selectedIngredients.length, form.quantity]);

    return (
        <>
            <div style={{ maxWidth: "532px", margin: "auto", backgroundColor: "white" }}>
                <Container>
                    <Row>
                        <Col xs="6">
                            <RadioButton sizes={sizeData} onChange={handleSizeChange} />
                        </Col>
                        <Col xs="6">
                            <SelectBox doughTypes={doughTypeData} onChange={handleDoughChange} />
                        </Col>
                    </Row>
                </Container>
                <CheckBox ingredients={ingredientsData} onChange={handleIngChange} />
                <Comment noteChange={handleNoteChange} />
                <Name nameChange={handleNameChange} />
                <hr />
                <Counter counterChange={handleCounterChange} />
                <hr />
                <p style={{ color: "red" }}>{errorMessage.name}</p>
                <p style={{ color: "red" }}>{errorMessage.size}</p>
                <p style={{ color: "red" }}>{errorMessage.dough}</p>
                <p style={{ color: "red" }}>{errorMessage.ingredients}</p>
                <p style={{ color: "red" }}>{errorMessage.note}</p>
                <p style={{ color: "red" }}>{errorMessage.general}</p>
                <hr />
                <p>TOTAL: {orderTotal}₺</p>
                <p>INGREDIENTS TOTAL: {ingTotal}₺</p>
                <button onClick={handleSubmitOrder}>Sipariş Ver</button>
            </div>
        </>
    );
}

export default OrderForm;
