import PropTypes from "prop-types"
import { Container, CardImage } from "./styles";
import { CardButton } from "../CardButton";

export function CardProduct({ product }) {

    return (
        <div>
            <Container>
                <CardImage src={product.url} alt={product.name} />
                <div>
                    <p>{product.name}</p>
                    <strong>R$ {product.price}</strong>
                </div>
                <CardButton />
            </Container>
        </div>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}