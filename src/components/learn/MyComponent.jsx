//() =>{}
// component = html + css + js
// JSX: 1 parent
import './style.css';

const MyComponent = () => {
    // const hoidanit = "eric ";// string
    // const hoidanit = 25;
    // const hoidanit = true; //boolean
    const hoidanit = [1, 2, 3];
    // const hoidanit = {           In dang chuoi JSON
    //     name: "hoidanit",    In dang chuoi JSON
    //     age: 25

    // }
    return (
        <>
            <div> {JSON.stringify(hoidanit)} & hoi dan it update</div>
            <div>{console.log("Eric")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>
    );
}

export default MyComponent;
