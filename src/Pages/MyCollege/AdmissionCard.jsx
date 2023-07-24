const AdmissionCard = ({ admission }) => {
  const { college, subject, name, email, date, address, image, phoneNumber } =
    admission;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        className="rounded-full h-56 w-56"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>College: {college}</p>
        <p>Subject: {subject}</p>
        <p>Email: {email}</p>
        <p>Birth Date: {date}</p>
        <p>Address: {address}</p>
        <p>Phone Number:{phoneNumber}</p>
      </div>
    </div>
  );
};

export default AdmissionCard;
