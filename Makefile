install:
	npm install

lint:
	npm run lint

test:
	npm run test

gendiff help:
	node gendiff -h

gendiff version:
	node gendiff -V 

test:
	npm test --test-reporter=spec

test-coverage:
	npm test -- --coverage --coverageProvider=v8