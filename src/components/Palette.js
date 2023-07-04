import Card from "react-bootstrap/Card";

import Color from "./Color";

export default function Palette({ palette }) {

    const colors = palette.colors.map((color, i) =>
        <Color key={i} color={color} />
    );

    return (

        <Card className="mb-4">
            <Card.Header>
                {palette.name}
            </Card.Header>
            <Card.Body>
                <div class="row flex-nowrap overflow-auto ms-0">
                    {colors}
                </div>
            </Card.Body>
        </Card>
    );
}
