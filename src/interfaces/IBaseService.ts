export interface IBaseService<T> {
    readAll(): Promise<T[]>;
    readOneById(id: string): Promise<T>;
}
