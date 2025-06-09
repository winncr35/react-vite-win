//() =>{}
// component = html + css + js
// JSX: 1 parent
import './style.css';

const MyComponent = () => {
    return (
        <>
            <div className=""> eric & hoi dan it update </div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>
    );
}

export default MyComponent;
