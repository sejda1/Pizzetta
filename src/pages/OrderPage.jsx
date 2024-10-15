import OrderHeader from "../components/OrderHeader";
import OrderForm from "../components/OrderForm";

function OrderPage() {
    const handleFormSubmit = (data) => {
        console.log("Sipariş verisi:", data);
       
    };
    
    return (
        <>
            
            <OrderHeader /> 
            <OrderForm onSubmit={handleFormSubmit} />

            
        </>
    )
}
export default OrderPage;