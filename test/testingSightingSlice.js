const fs = require('fs');
const request = require('supertest');
const sightingSlice = require('../Client/Slices/sightingSlice');

describe('Sighting reducer', () => {
    let state; 
    beforeAll(() => {
        state = {
            location: ''
        }
    })
})

describe('Update Location', () => {
    it('should return the same location as the action payload', () => {
        const action = {type: 'updateLocation', payload: 'yes'};
        const { updateLocation } = sightingSlice(state, action)
        expect(updateLocation).toBe(action.payload);
    })
})