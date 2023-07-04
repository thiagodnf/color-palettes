"use client";

import { useState, useEffect } from "react";
import LocalStorageUtils from "../utils/LocalStorageUtils";

const ColorThemes = Object.freeze({
    LIGHT: { id: "light", name: "Light", icon: "bi-sun-fill", hex: "#F8F9FA" },
    DARK: { id: "dark", name: "Dark", icon: "bi-moon-stars-fill", hex: "#2C3035"},
    AUTO: { id: "auto", name: "Auto", icon: "bi-circle-half" },
});

function saveColorTheme(colorTheme) {
    LocalStorageUtils.setItem("color-theme-id", colorTheme.id);
}

function getSavedColorTheme() {

    const colorThemeId = LocalStorageUtils.getItem("color-theme-id");

    if (colorThemeId == ColorThemes.AUTO.id) {
        return ColorThemes.AUTO;
    } else if (colorThemeId == ColorThemes.DARK.id) {
        return ColorThemes.DARK;
    } else if (colorThemeId == ColorThemes.LIGHT.id) {
        return ColorThemes.LIGHT;
    }

    return null;
}

function getSystemColorTheme() {

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    return mediaQuery.matches ? ColorThemes.DARK : ColorThemes.LIGHT;
}

function changeColorThemeTo(colorTheme) {

    if (colorTheme === ColorThemes.AUTO) {
        colorTheme = getSystemColorTheme();
    }

    window.document.documentElement.setAttribute("data-bs-theme", colorTheme.id);
    window.document.getElementsByTagName("meta")["theme-color"].content = colorTheme.hex;
}

function Item({ value, handleClick, selected = false }) {

    const isActive = selected ? "active" : "";
    const isChecked = selected ? <i className="bi bi-check2"></i> : <></>;

    return (
        <li>
            <a className={`dropdown-item d-flex align-items-center rounded ${isActive}`} href="#" onClick={e => handleClick(e, value)} data-theme={value.id}>
                <i className={`bi ${value.icon}`}></i>
                <span className="ms-3 me-auto">{value.name}</span>
                {isChecked}
            </a>
        </li>
    );
}

export default function ColorThemeNavItem() {

    const [colorTheme, setColorTheme] = useState(ColorThemes.AUTO);

    function handleClick(event, colorTheme) {

        setColorTheme(colorTheme);

        changeColorThemeTo(colorTheme);

        saveColorTheme(colorTheme);
    }

    useEffect(() => {

        const systemColorTheme = getSystemColorTheme();
        const savedColorTheme = getSavedColorTheme();

        if (savedColorTheme) {
            if (saveColorTheme === ColorThemes.AUTO) {
                setColorTheme(systemColorTheme);
                changeColorThemeTo(systemColorTheme);
            } else {
                setColorTheme(savedColorTheme);
                changeColorThemeTo(savedColorTheme);
            }
        } else {
            changeColorThemeTo(systemColorTheme);
        }

        const handleDarkModeChange = event => {

            if (colorTheme == ColorThemes.AUTO) {
                changeColorThemeTo(getSystemColorTheme());
            }
        };

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        mediaQuery.addEventListener("change", handleDarkModeChange);

        return () => {
            mediaQuery.removeEventListener("change", handleDarkModeChange);
        };
    }, [colorTheme]);

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                <i className={`bi ${colorTheme.icon}`}></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end p-1">
                <Item value={ColorThemes.LIGHT} handleClick={handleClick} selected={colorTheme === ColorThemes.LIGHT} />
                <Item value={ColorThemes.DARK} handleClick={handleClick} selected={colorTheme === ColorThemes.DARK} />
                <Item value={ColorThemes.AUTO} handleClick={handleClick} selected={colorTheme === ColorThemes.AUTO} />
            </ul>
        </li>
    );
}
