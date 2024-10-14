import { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap'
import RadioButton from "./RadioButton";
import SelectBox from "./SelectBox";
import CheckBox from "./CheckBox";
import Comment from "./Comment";
import Counter from "./Counter";
import axios from "axios";

const dummyData = {
    name: "",
    size: "",
    dough: "",
    ingredients: [],
    note: "",
    quantity: "",
}
const errorMessages=[name, size, dough, ingredients, note];
const sizeData = ['S', 'M', 'L'];
const doughTypeData = ['Kalın', 'Orta', 'İnce', 'Süper İnce'];
const ingredientsData = ['Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak',
    'Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Biber',
    'Kabak', 'Kanada Jambonu', 'Domates', 'Jalepeno', 'Kavurma']


function OrderForm({ onSubmit }) {
    const [form, setForm] = useState(dummyData);
    const [errorMessage, setErrorMessage] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [orderTotal, setOrderTotal] = useState();
    const [ingTotal, setIngTotal] = useState(0);


    const handleIngChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            if (selectedIngredients.length < 10 || selectedIngredients.length > 4) {
                setSelectedIngredients([...selectedIngredients, value]);
            }
        } else {
            setSelectedIngredients(selectedIngredients.filter(item => item !== value));
        }
    };

    const handleDoughChange = (e) => {
        setForm((prev) => ({ ...prev, dough: e.target.value }))
    }

    const handleSizeChange = (e) => {
        setForm((prev) => ({ ...prev, size: e.target.value }))
    }
    const handleCounterChange = (quantity) => {
        setForm((prev) => ({ ...prev, quantity: quantity }))
    }
    const handleNoteChange = (e) => {
        setForm((prev) => ({ ...prev, note: e.target.value }))
    }
    const handleSubmitOrder = (e) => {
        if (form.note.length < 1) {
            setErrorMessage(prev => ({ ...prev, note: "Notu girin" }))
        }
        if (form.name.length < 3) {
            setErrorMessage(prev => ({ ...prev, name: "* İsim en az 3 karakter içermelidir." }))
        }
        if (form.size.length < 1) {
            setErrorMessage(prev => ({ ...prev, size: "* Lütfen bir boyut seçin." }))
        }
        if (form.dough.length < 1) {
            setErrorMessage(prev => ({ ...prev, dough: "* Lütfen hamur kalınlığı seçin." }))
        }
        if (form.ingredients.length < 4 || form.ingredients.length > 10) {
            setErrorMessage(prev => ({ ...prev, ingredients: "* En az 4, en çok 10 tane malzeme seçmelisiniz!" }))
        } else {
            setErrorMessage(errorMessage);
            e.prevent.default();
            const updatedForm = { ...form, quentity: Counter };
            axios
                .post('https://reqres.in/api/pizza', updatedForm)
                .then(response => {
                    onSubmit(response.data);
                    if (setErrorMessage(errorMessage)) {
                        history.push("/success-order");
                    } else {
                        throw errorMessage("Sipariş verileri eksik veya hatalı!")
                    }
                })
                .catch(error => {

                });
        }

    }

    useEffect(() => {
        setForm((prev) => ({ ...prev, ingredients: selectedIngredients }))
    }, [selectedIngredients])

    useEffect(() => {
        console.log(form);

        let total = 85.50;
        total = (total + (form.ingredients.length * 5)) * form.quantity
        setOrderTotal(total)
        setIngTotal((form.ingredients.length * 5) * form.quantity)
    }, [form])

    const err = () => {
        errorMessages.forEach((index) => {
            return index;
        })
    }

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
                <hr />
                <Counter counterChange={handleCounterChange} />
                <hr />
                <p style={{ color: "red" }}>{errorMessages(err)}</p>
                <hr />
                <p>TOTAL;{orderTotal}</p>
                <p>INGTOTAL;{ingTotal}</p>
                <button onClick={handleSubmitOrder}>Siparis Ver</button>
            </div>
        </>
    )
}
export default OrderForm;