export default class LocalStorageUtils {

    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key, defaultValue = null) {

        let item = localStorage.getItem(key);

        if (item) {
            return JSON.parse(item);
        }

        return defaultValue;
    }
}
