function onClick({ target }) {

    if (!target.className.includes("colorHex")) {
        target = target.childNodes[0];
    }

    const color = target.textContent;

    if (navigator.clipboard) {

        navigator.clipboard.writeText(color);

        target.textContent = "Copied";

        window.setTimeout(function () {
            target.textContent = color;
        }, 2000);
    }
}

export default function Color({ color }) {

    const style = {
        backgroundColor: color
    };

    return (
        <div className="color me-3 rounded d-flex align-items-center justify-content-center" style={style} onClick={onClick}>
            {color}
        </div>
    );
}
