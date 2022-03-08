
import { useSelector } from "react-redux";
import { Container, ContentList, ContentTotal, TitleCard } from "./styles";
const ListProducts =()=>{

    const shapes = useSelector((store)=> store.value)
    const allProduct = ()=>{
        return shapes.reduce((current,shape)=>current + shape.price,0)
    }
    return(
                <Container>
                   

                    <ContentList>
                            <TitleCard>
                                <p>Produto</p>
                                <p>Preco</p>
                            </TitleCard>
                            {shapes.map((shape)=>(<> 
                            
                                    <section>
                                        <img src={shape.image} alt="" />
                                        <p>{shape.name}</p>
                                        <span>{shape.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                        
                                    </section>
                            </>
                            ))}

                    </ContentList>
                    <ContentTotal>
                        <h2>Resumo dos pedidos</h2>
                        <div>
                            <p>{shapes.length} Produtos</p>
                            <span>{allProduct().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <button>Fazer pedido</button>
                    </ContentTotal>

                </Container>

)}

export default ListProducts