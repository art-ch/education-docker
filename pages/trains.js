import img from '../public/1.jpg';
// Image component cannot be used

const Trains = () => {
  return (
    <>
      <h1>Trains</h1>
      <img src={img} placeholder="blur" alt="train" width="280" height="420" />
      {['1', '2', '3', '4', '5'].map((path, id) => (
        <div key={id}>
          <img src={`/${path}.jpg`} alt="train" width="280" height="420" />
        </div>
      ))}
    </>
  );
};

export default Trains;
