'use strict';
const {expect} = require('chai');
const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Voyage API', function() {
	describe('When looking for a flightCDG > BOG withoute date', function() {
		it('should return a 400 error', function(){
			return request
				.get('/flights')
				.query({origin:'CDG',destination:'BOG'})
				.expect(400, err =>{
          // eslint-diable-next-line no-console
					console.log(err);
				});
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
