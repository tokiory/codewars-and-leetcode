/**
 * Calculates pivot index of an array
 * @param nums Array of numbers
 * @returns Pivot index of array
 */
export default function pivotIndex(nums: number[]): number {

    // Initialize default funciton output
    let result = -1;

    nums.forEach((item, index) => {

        // Calculate sum of numbers before current index
        const firstPart = nums.slice(0, index).reduce((acc, item) => {
            return acc + item;
        }, 0);

        // Calculate sum of numbers after current index
        const secondPart = nums.slice(index + 1, nums.length).reduce((acc, item) => {
            return acc + item;
        }, 0);
        
        // If sums of array before n after pivot are equal - return pivot index
        if (firstPart === secondPart && result === -1) {
            result = index;
        }
    });

    return result;
};