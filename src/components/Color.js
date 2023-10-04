function handleOnClick({ target, data }) {

    const color = target.dataset.color;

    if (navigator.clipboard) {

        navigator.clipboard.writeText(color);

        target.textContent = "Copied";

        window.setTimeout(function () {
            target.textContent = color;
        }, 2000);
    }

    return false;
}

export default function Color({ color }) {

    const style = {
        backgroundColor: color
    };

    return (
        <div data-color={color} className="color me-3 mb-2 rounded d-flex align-items-center justify-content-center" style={style} onTouchEnd={handleOnClick} onClick={handleOnClick}>
            {color}
        </div>
    );
}
