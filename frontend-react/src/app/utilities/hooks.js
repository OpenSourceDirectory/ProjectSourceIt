import { useEffect } from 'react';

export function useClickOutside(ref, handler) {
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            handler();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [ref, handler]);
}

export function haveCommonItems(arr1, arr2) {
	return arr1.some(item => arr2.includes(item));
};

export function numberCommonItems(arr1, arr2) {
	return arr1.reduce((acc, e) => (arr2.includes(e) ? 1 + acc : acc), 0);
};