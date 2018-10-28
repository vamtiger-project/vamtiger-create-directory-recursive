export default function ({ path: folderPath }: IParams): Promise<void>;
export interface IParams {
    path: string;
}
export declare enum ErrorCode {
    EEXIST = "EEXIST"
}
