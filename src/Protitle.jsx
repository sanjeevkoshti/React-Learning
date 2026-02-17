import './Protitle.css';

function Protitle(props) {
    return (
        <div className="titleSec">
            <h2 className="title">{props.title}</h2>
            <p className="description">{props.description}</p>
        </div>
    );
}

export default Protitle;
