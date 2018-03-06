'use strict';
const {expect} = require('chai');
const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Booking API', function() {
	describe('Créer une reservation,', function() {
		it('Il manque l\'id du vol, should return 400', function(){
			return request
        .post('/bookings')
        .send({ id_user: 'Manny'}) // sends a JSON post body
        .expect(400)
		});

		it('should return a 200 avec un vol un vol CDG > BOG today', function(){
			return request
				.get('/flights')
				.query({origin:'CDG',destination:'BOG', date: new Date()})
				.expect(200)
				.then(response => {
					expect(response.body).to.be.an('array');
				});
		});
	});
});
