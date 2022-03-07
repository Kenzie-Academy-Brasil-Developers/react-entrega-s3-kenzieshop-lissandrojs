import { products } from "../../mock";
import {  addShape } from "../../store/modules/produts/action";
import { useDispatch,useSelector } from "react-redux";
import { Container, Content } from "./styles";
const Home = ()=>{
    const value = useSelector((store)=> store.value)
    
    const dispatch = useDispatch()
 
    console.log(value)
    return(
                <Container>
                    {products.map((product,index)=>(<>
                        <Content>
                            
                            <img src={product.image} alt="" />
                            <div>
                                <h3>{product.name}</h3>
                                <span>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                <button  onClick={()=> dispatch(addShape(product))}>Adicionar no Carrinho</button>
                            </div>
                        </Content>
                    
                    </>))}
                    
                </Container>

)}

export default Home