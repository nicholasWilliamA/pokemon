import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

/**
 * In some situations, you may want to refetch the query when a React Native Screen is focused again.
 * This custom hook will call the provided refetch function when the screen is focused again.
 * https://tanstack.com/query/v4/docs/react-native#online-status-management
 * @param refetch react-query refetch function
 */
export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
    const firstTimeRef = React.useRef(true);

    useFocusEffect(
        React.useCallback(() => {
            if (firstTimeRef.current) {
                firstTimeRef.current = false;
                return;
            }

            refetch();
        }, [refetch])
    );
}
