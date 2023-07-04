import Head from "next/head";

import { useState } from "react";
import { Container } from "react-bootstrap";

import Navbar from "../../src/components/Navbar";
import Palette from "../../src/components/Palette";
import palettes from "../../data/palettes.json";

function byName(a, b) {
    return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
}

function filterOut(array, searchTerm = "") {

    if (!searchTerm) {
        return array;
    }

    return array.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

export default function IndexPage({ palettes }) {

    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchTerm(event) {
        setSearchTerm(event.target.value);
    }

    let items = filterOut(palettes, searchTerm);

    items = items.map((palette, i) =>
        <Palette key={i} palette={palette} />
    );

    return (
        <>
            <Head>
                <title>Color Palettes</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar handleSearchTerm={handleSearchTerm} />
            <Container fluid>
                {items}
            </Container>
        </>
    );
}

export async function getStaticProps() {

    palettes.sort(byName);

    return {
        props: {
            palettes
        }
    };
}
