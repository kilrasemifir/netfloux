import "./MonBouton.css";
export const MonBouton = (props) => {
    return (
        <button className="mon-bouton" onClick={props.onClick}>
            {props.text}
        </button>
    )
}