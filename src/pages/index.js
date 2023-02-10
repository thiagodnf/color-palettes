import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../../src/components/Navbar";
import Palette from "../../src/components/Palette";
import { Container } from "react-bootstrap";

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

function IndexPage({ palettes }) {

    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchTerm(event) {

        const value = event.target.value;

        router.replace({
            query: { ...router.query, q: value },
        });

        setSearchTerm(value);
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

export function getStaticProps() {

    palettes.sort(byName);

    return {
        props: {
            palettes
        }
    };
}

export default IndexPage;
