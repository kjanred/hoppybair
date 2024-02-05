import Image from 'next/image';

export default function VenueList({ venueListData }) {
  return (
    <div className="row">
      {venueListData && venueListData.map((venue) => (
        <div key={venue.id} className="col-12 col-md-6 col-xl-4 venueCard">
          <h3>{venue.name}</h3>
          <Image
            src={`img/venue/${venue.imgName}`}
            height={200}
            width={300}
            alt={venue.alt}
          />
          <p>{venue.address1}<br /> {venue.address2}</p>
        </div>
      ))}
    </div>
  );
}