import Card from "react-bootstrap/Card";

import Color from "./Color";

function Component(props) {

    const palette = props.palette;

    const colors = palette.colors.map((color, i) =>
        <Color key={i} color={color}/>
    );

    return (
        <Card className="palette mb-4">
            <Card.Header>
                {palette.name}
            </Card.Header>
            <Card.Body className="horizontal-scroll pb-0">
                <div className="colors" >
                    {colors}
                </div>
            </Card.Body>
        </Card>
    );
}

export default Component;
