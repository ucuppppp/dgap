import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Container, Spinner, Alert} from "react-bootstrap";
import {API_URL} from "./lib/constants";
import { Link } from "react-router-dom";
import MyNavbar from "./components/Navbar";

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const req = await axios.get(`${API_URL}/photos`);
        setPhotos(req.data.slice(0, 24));
      } catch (err) {
        setError("Failed to load photos.");
        console.log(err);
      } finally {
        setLoading(false); 
      }
    };
  
    getPhotos();
  }, []);
  
  if (loading) {
    return (
      <Container className="d-flex justify-content-center">
        <Spinner animation="border" />
      </Container>
    );
  }
  
  if (error) {
    return (
      <Container className="d-flex justify-content-center">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }
  
  return (
    <>
      <MyNavbar/>
      <Container className="d-flex flex-wrap justify-content-center mx-auto">
        {photos.map((photo) => (
          <Link key={photo.id} className="text-decoration-none" to={`/detail/${photo.id}`}>
            <Card
              style={{width: "18rem", margin: "2px"}}
              className="cursor-pointer"
            >
              <Card.Img
                variant="top"
                src={photo.thumbnailUrl}
                alt={photo.title}
              />
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>Album ID: {photo.albumId}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Container>
    </>
  );
}


