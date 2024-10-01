import getNeighborhoodsList from "./2-arrow";

describe('getNeighborhoodList class', () => {
    let neighborhoods;

    beforeEach(() => {
        neighborhoods = new getNeighborhoodsList();
    });

    test('should initialize with SOMA and Union Square', () => {
        expect(neighborhoods.sanFranciscoNeighborhoods).toEqual(['SOMA', 'Union Square']);
    });

    test('should add a new neighborhood correctly', () => {
        neighborhoods.addNeighborhood('Chinatown');
        expect(neighborhoods.sanFranciscoNeighborhoods).toContain('Chinatown');
    });

    test('should return the updated list after adding a new neighborhood', () => {
        const updatedList = neighborhoods.addNeighborhood('Chinatown');
        expect(updatedList).toEqual(['SOMA', 'Union Square', 'Chinatown']);
    });

    test('should not mutate the original list if no neighborhood is added', () => {
        expect(neighborhoods.sanFranciscoNeighborhoods).toEqual(['SOMA', 'Union Square']);
    });
})