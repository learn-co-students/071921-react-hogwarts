import { useState } from 'react';

export default function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(true);

  function handleClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div onClick={handleClick} className="pigTile">
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
      {showDetails ? (
        <section className="pigDetails">
          <div>{hog.weight} lbs.</div>
          <div>
            <strong>Specialty:</strong> {hog.specialty}
          </div>
          <div>
            <strong>Highest Medal:</strong> {hog['highest medal achieved']}
          </div>
          <div>{hog.greased ? '' : 'Not'} Greased</div>
        </section>
      ) : (
        ''
      )}
    </div>
  );
}
