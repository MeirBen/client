const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../app'); // Adjust the path to your server.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('Main Application', () => {
  after(() => {
    server.close(); // Close the server after tests
  });

  it('should serve static files', (done) => {
    chai.request(app)
      .get('/') // Path to a static file or endpoint
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Additional assertions for static file content
        done();
      });
  });

  // Add more tests for other functionalities
});