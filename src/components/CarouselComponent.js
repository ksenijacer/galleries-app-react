import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent({ images }) {
  return (
    <Carousel style={{ width: '1100px', height: '350px'}}>
      {images.map((image, index) => (
        <Carousel.Item>
          <a key={index} href={image.url} target="_blank" rel="noreferrer">
            <img
              style={{ width: '1100px', height: '350px', objectFit: 'contain' }}
              src={image.url}
              alt={`slide ${index + 1}`}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;