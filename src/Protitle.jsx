import './Protitle.css';

function Protitle(props) {
    return (
        <div className="titleSec">
            <h2 className="title">{props.title}</h2>
            <ul className="description">
                <li>{props.description1}</li>
                <li>{props.description2}</li>
            </ul>
        </div>
    );
}

export default Protitle;
