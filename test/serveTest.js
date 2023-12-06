const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;
let server;

chai.use(chaiHttp);

before((done) => {
  server = app.listen(3000, done);  // Start the server before tests
});

after(() => {
  server.close();  // Close the server after tests
});


describe('Main Application', () => {
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