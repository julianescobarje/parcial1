import { Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react'
import SportModal from './SportModal'

function Sports() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const manCyclingUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFv8Fg9tBekNQJ38p0Qy4u0WP7SHZi72csQ&s'
  const manRunningUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltF1UR-U6SZ1lKOM1e8r_kj11rFqUktXz2w&s'
  const manSwimmingUrl =
    'https://www.lekue.com/storyblok/f/120479/825x550/c86df815a1/portada-7.jpg'

  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setSelectedImage('')
  }

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h2 className='text-center'>Cycling</h2>
          <Row>
            {images.map((image, i) => (
              <Col key={i} lg={6}>
                <img
                  src={manCyclingUrl}
                  alt='Man cycling'
                  onClick={() => handleImageClick(manCyclingUrl)}
                ></img>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4}>
          <h2 className='text-center'>Running</h2>
          <Row>
            {images.map((image, i) => (
              <Col key={i} lg={6}>
                <img
                  src={manRunningUrl}
                  alt='Man running'
                  onClick={() => handleImageClick(manRunningUrl)}
                ></img>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4}>
          <h2 className='text-center'>Swimming</h2>
          <Row>
            {images.map((image, i) => (
              <Col key={i} lg={6}>
                <img
                  src={manSwimmingUrl}
                  alt='Man swimming'
                  onClick={() => handleImageClick(manSwimmingUrl)}
                ></img>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <SportModal
        show={showModal}
        handleClose={handleClose}
        imageUrl={selectedImage}
      />
    </Container>
  )
}

export default Sports
