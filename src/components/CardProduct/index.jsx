import PropTypes from 'prop-types';

import { useCart } from '../../hooks/CartContext';
import { Container, CardImage } from './styles';
import { CartButton } from '../CartButton';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  return (
    <div>
      <Container>
        <CardImage src={product.url} alt={product.name} />
        <div>
          <p>{product.name}</p>
          <strong>{product.currencyValue}</strong>
        </div>
        <CartButton onClick={() => putProductInCart(product)}></CartButton>
      </Container>
    </div>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
