import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

export function useDebouncedQuery(initialValue = '') {
    const [visibleQueryText, setvisibleQueryText] = useState(initialValue);
    const [query, setQuery] = useState(initialValue);

    const setQueryDebounced = useCallback(debounce((value: string) => {
        setQuery(value);
    }, 500), []);

    function onChangeText(value: string) {
        setvisibleQueryText(value);
        setQueryDebounced(value);
    }

    return { visibleQueryText, query, onChangeText };
}
