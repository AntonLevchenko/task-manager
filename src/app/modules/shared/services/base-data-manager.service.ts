import { BehaviorSubject, delay, map, Observable, of, shareReplay, switchMap, take, tap, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export abstract class BaseDataManagerService<T extends {id: string}> {

  protected dataSubject$: BehaviorSubject<T[]> = new BehaviorSubject([] as T[]);

  public readonly data$: Observable<T[]> = this.dataSubject$.asObservable();

  create(data: Partial<T>) {
    const newData: T = {
      id: uuidv4(),
      ...data
    } as T;

    return this.data$.pipe(
      map((item: T[]) => item.push(newData)),
      take(1)
    );
  }

  getById(dataId: string): Observable<T> {
    return this.data$.pipe(
      map((item: T[]) => item.find(({id}) => id === dataId) ?? null),
      switchMap((data: T | null) => {
        return data ? of(data) : throwError(() => 'Data was not found');
      })
    )
  }

  update(dataId: string, data: Partial<T>): Observable<T> {
    return this.getById(dataId).pipe(
      tap((item: T) => {
        Object.assign(item, data);
      })
    )
  }

  delete(dataId: string): Observable<boolean> {
    const data = this.dataSubject$.value.filter(({id}) => id !== dataId);
    this.dataSubject$.next(data);
    return of(true);
  }

}
