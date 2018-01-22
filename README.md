# Relevance Feedback Frontend

## Run

Assuming `http://localhost:5001` is the address of the backend (change accordingly).

### Using npm

`npm install && REACT_APP_BACKEND='http://localhost:5001' npm start`

### Using Docker

Build first:

`docker build --build-arg='REACT_APP_BACKEND=http://localhost:5001' -t relevance-front .`

Run:

`docker run -p 5000:5000 --rm --name relevance-front relevance-front`
