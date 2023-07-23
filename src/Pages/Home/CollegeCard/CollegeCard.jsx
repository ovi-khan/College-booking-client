import { Link } from "react-router-dom";

const CollegeCard = ({data}) => {
    // console.log(data)
    const {college_name, college_image, events, research_history, sports, id} = data
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-96 h-56"
          src={college_image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <div>
            Event Name:
            {events.map(event => <p>
                {event.event_name}
            </p>)}
        </div>
        <div>
            Research_history:
            {research_history.map(history => <p>
                {history.project_title}
            </p>)}
        </div>
        <div>
            Sports:
            {sports.map(sport => <p>
                {sport.sport_name}
            </p>)}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/collegedetails/${id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
