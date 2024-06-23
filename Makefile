install:
	npm ci

make lint:
	npm run lint

make test:
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
	npm test -- --coverage --coverageProvider=v8