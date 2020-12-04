import palettes from "../data/palettes.json";

import Navbar from "../src/components/Navbar";
import Palette from "../src/components/Palette";
import Head from "../src/components/Head";

function Index(props) {

    const items = props.palettes.map((palette, i) =>
        <Palette key={i} palette={palette} />
    );

    return (
        <div>
            <Head />
            <Navbar />
            <div className="container-fluid">
                {items}
            </div>
        </div>
    );
}

export function getStaticProps() {

    return {
        props: {
            palettes: palettes
        }
    };
}

export default Index;
