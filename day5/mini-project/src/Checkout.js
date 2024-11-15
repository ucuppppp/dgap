import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { fetchCart, fetchProductDetails } from './ApiService'; // Import service function
import { USER_ID } from './constants';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      try {
        const data = await fetchCart(USER_ID); // Fetch the cart data

        // Ensure `data` is an array and select the latest order
        const orders = Array.isArray(data) ? data : [data];
        const latestOrder = orders[orders.length - 1];  // Select the latest order

        // Fetch product details for the latest order
        const productsWithDetails = await Promise.all(
          (latestOrder.products || []).map(async (item) => {
            try {
              const productDetails = await fetchProductDetails(item.productId);
              return { ...productDetails, quantity: item.quantity };
            } catch (error) {
              console.error(`Error fetching details for productId ${item.productId}:`, error);
              return null; // Return null if error occurs
            }
          })
        );

        // Filter out any null products and set the cart state
        setCart({ ...latestOrder, products: productsWithDetails.filter(item => item !== null) });

        // Calculate the total price
        const total = productsWithDetails.reduce((acc, item) => acc + (item?.price || 0) * item.quantity, 0);
        setTotal(total);

      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    getCart();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Checkout Preview</h2>

      {/* Check if the cart has products */}
      {cart.products && cart.products.length > 0 ? (
        <Row>
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-center">Your Cart</Card.Title>
                <ListGroup variant="flush">
                  {cart.products.map((item) => (
                    <ListGroup.Item key={item.productId}>
                      <Row className="align-items-center">
                        <Col md={8}>
                          <h5>{item.title}</h5>
                          <p>
                            ${item.price} x {item.quantity}
                          </p>
                        </Col>
                        <Col md={4} className="text-end">
                          <h6>Subtotal: ${(item.price * item.quantity).toFixed(2)}</h6>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Grand total and preview-only button */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-center">Order Summary</Card.Title>
                <hr />
                <h5>Total: ${total.toFixed(2)}</h5>
                <div className="d-flex justify-content-center">
                  <Button variant="secondary" disabled>
                    Preview Only
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p>No items in the cart.</p>
      )}
    </Container>
  );
}

export default Checkout;