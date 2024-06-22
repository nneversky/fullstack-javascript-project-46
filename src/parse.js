import yaml from 'js-yaml';

export const getParsedData = (data, ext) => {
    switch (ext) {
        case '.json':
            return JSON.parse(data);

        case '.yaml':
        case '.yml':
            return yaml.load(data);

        default:
            throw new Error(`Invalid extension - ${ext}`);
    }
};
