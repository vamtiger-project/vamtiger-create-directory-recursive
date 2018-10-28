import { PathLike } from 'fs';
import { sep, join } from 'path';
import createDirectory from 'vamtiger-create-directory';

const pathSeparator = new RegExp(sep, 'g');

export default function ({ path: folderPath }: IParams) {
    const folderPaths = folderPath
        .split(pathSeparator)
        .map((entry, index, paths) => paths.slice(0, index + 1).join(sep))
        .filter(currentFolderPath => currentFolderPath.trim());
    const createFolders = folderPaths
        .reduce((createFolder, currentPath) => createFolder.then(() => createDirectory(currentPath).catch(handleError)), Promise.resolve());

    return createFolders;
}

function handleError(error: NodeJS.ErrnoException) {
    const exempt = error.code === ErrorCode.EEXIST;

    if (!exempt) {
        console.error(error);

        throw error;
    }
}

export interface IParams {
    path: string;
}

export enum ErrorCode {
    EEXIST = 'EEXIST'
}