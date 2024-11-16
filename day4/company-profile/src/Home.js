import React from "react";
import {Container, Row, Col, Button, Card, Carousel} from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center">Selamat Datang di Website Kami</h1>
          <p className="text-center">
            Kami menyediakan berbagai layanan menarik untuk Anda.
          </p>
        </Col>
      </Row>

      {/* Carousel Section */}
      <Row className="mt-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/736x/2b/fc/29/2bfc29d683b67a7f4c233a2b8d3d4257.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Slide Pertama</h3>
                <p>Deskripsi slide pertama</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/736x/64/79/9d/64799db8359714f06a02dc0fe4f82fe6.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Slide Kedua</h3>
                <p>Deskripsi slide kedua</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/736x/02/73/05/027305ff5ea4e6f31a7604d53a989019.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Slide Ketiga</h3>
                <p>Deskripsi slide ketiga</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Card Section */}
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200?text=Card+1"
            />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>Deskripsi singkat tentang card 1.</Card.Text>
              <Button variant="primary">Lihat Lebih Banyak</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200?text=Card+2"
            />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>Deskripsi singkat tentang card 2.</Card.Text>
              <Button variant="primary">Lihat Lebih Banyak</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200?text=Card+3"
            />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>Deskripsi singkat tentang card 3.</Card.Text>
              <Button variant="primary">Lihat Lebih Banyak</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Button Section */}
      <Row className="mt-5">
        <Col className="text-center">
          <Button variant="success" size="lg">
            Coba Sekarang
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
