import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import bash from 'vamtiger-bash';
import getDirectoryContent from 'vamtiger-get-directory-content-recursive';
import { ClassifiedDirectoryContent } from 'vamtiger-get-directory-content-recursive/build/directory-content';
import createDirectory from '..';

const mockData = resolvePath(
    __dirname,
    'mock-data'
);
const folderPath = resolvePath(
    mockData,
    'some-folder',
    'another-folder'
);
const params = {
    path: folderPath
};
const removeMockData = `rm -rfv ${mockData};`;

describe('vamtiger-create-directory-recursive should', function () {
    before(async function () {
        await bash(removeMockData);
        await createDirectory(params);
    });

    after(async function () {
        await bash(removeMockData);
    });

    it('create folders', async function () {
        const directoryContent = await getDirectoryContent({
            path: mockData,
            classified: true
        }) as ClassifiedDirectoryContent;
        const { directory } = directoryContent;
        const folders = new Set(directory);

        expect(folders.has(folderPath)).to.be.true;
    });
});