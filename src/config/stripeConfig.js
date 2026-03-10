import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51RwgBZ3cail33rIzTwrpcugTc9UxhEZFVqIkqSaYgRh53uydYUUl2nZ6RUrtCeqBrMxHvtVftGt0qWDnjyq9LyA100cpbI9H1b',
);

export default stripePromise;
