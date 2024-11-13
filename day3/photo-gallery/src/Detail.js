import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Container, Spinner, Alert} from "react-bootstrap";
import {API_URL} from "./lib/constants";
import {useParams} from "react-router-dom";
import MyNavbar from "./components/Navbar";

export default function Detail() {
  const {id} = useParams()
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true); // State untuk memantau loading
  const [error, setError] = useState(null); // State untuk memantau error

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const req = await axios.get(`${API_URL}/photos/${id}`);
        setPhoto(req.data);
      } catch (err) {
        setError("Failed to load photos.");
        console.log(err);
      } finally {
        setLoading(false); // Menghentikan loading setelah request selesai
      }
    };

    getPhoto();
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
      <MyNavbar />
      <Container className="d-flex flex-wrap justify-content-center w-lg mx-auto">
            <Card
              style={{width: "18rem", margin: "2px"}}
              className="cursor-pointer w-lg"
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
      </Container>
    </>
  );
}
