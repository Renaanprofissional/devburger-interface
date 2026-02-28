import Cart from '../../assets/cart.png'
import { ContainerButton } from './styles'

export function CardButton({...props}) {

    return (
        <ContainerButton {...props}>
            <img src={Cart} alt="Carrinho de compras" />
        </ContainerButton>
    )
}