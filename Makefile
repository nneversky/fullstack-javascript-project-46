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

publish:
	nmp publish --dry-run

test:
	npm test --test-reporter=spec

test-coverage:
 	npm run test-coverage