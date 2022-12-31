export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="slick-arrow slick-next">
      <i style={{fontWeight:'400'}} className="fas fa-angle-right"></i>
     </button>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="slick-arrow slick-prev">
      <i style={{fontWeight:'400'}} className="fas fa-angle-left"></i>
     </button>
  );
}