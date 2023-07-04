import Card from "react-bootstrap/Card";

function onClick(event) {

    let target = event.target;

    if (!target.className.includes("colorHex")) {
        target = target.childNodes[0];
    }

    const color = target.textContent;

    if (navigator.clipboard) {

        navigator.clipboard.writeText(color);

        target.textContent = "Copied";

        window.setTimeout(function () {
            target.textContent = color;
        }, 1000);
    }
}

export default function Component({ color }) {

    return (
        <Card className="color me-3 mb-4" style={{ backgroundColor: color }} onClick={onClick}>
            <Card.Body className="colorHex">
                {color}
            </Card.Body>
        </Card>
    );
}
