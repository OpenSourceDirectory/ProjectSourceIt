import { haveCommonItems, numberCommonItems } from 'hooks';

it('should return the count of common items when both arrays have multiple common items', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 4, 6, 8];
    const result = numberCommonItems(arr1, arr2);
    expect(result).toBe(2);
});

it('should return zero when one of the arrays is empty', () => {
    const arr1 = [];
    const arr2 = [1, 2, 3];
    const result = numberCommonItems(arr1, arr2);
    expect(result).toBe(0);
});