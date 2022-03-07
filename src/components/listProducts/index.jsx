
import { useSelector } from "react-redux";
import { Container, ContentList, ContentTotal } from "./styles";
const ListProducts =()=>{

    const shapes = useSelector((store)=> store.value)
    const allProduct = ()=>{
        return shapes.reduce((current,shape)=>current + shape.price,0)
    }
    return(
                <Container>

                    <ContentList>

                            {shapes.map((shape)=>(<> 
                            
                                    <>
                                        <p>{shape.name}</p>
                                        <img src={shape.image} alt="" />
                                        <span>{shape.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                        
                                    </>
                            </>
                            ))}

                    </ContentList>
                    <ContentTotal>
                        <h3>Resumo dos pedidos</h3>
                        <div>
                            <p>{shapes.length}Produtos</p>
                            <span>{allProduct().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <button>Fazer pedido</button>
                    </ContentTotal>

                </Container>

)}

export default ListProducts