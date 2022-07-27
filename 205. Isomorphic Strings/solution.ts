/**
 * Check if strings are isomorphic
 * @param s First isomorphic string
 * @param t Second isomorphic string
 * @returns Is first string isomorphic with the second
 */
export default function isIsomorphic(s: string, t: string): boolean {

    // String couldn't be isomorphic, if they are have different length
    if (s.length !== t.length) {
        return false;
    }
    
    // Hashmap for two strings
    const firstStringHash: Map<string, string> = new Map();
    const secondStringHash: Map<string, string> = new Map();
    
    // Going throw the first string
    for (let index in s.split('')) {
        
        // Checking if maps already have key, and theirs value are not equal with the current symbol
        if (firstStringHash.has(s[index]) && firstStringHash.get(s[index]) !== t[index]) {
            return false;
        }

        if (secondStringHash.has(t[index]) && secondStringHash.get(t[index]) !== s[index]) {
            return false;
        }
        
        // Adding new key-value pair
        firstStringHash.set(s[index], t[index]);
        secondStringHash.set(t[index], s[index]);
    }
    return true;
}