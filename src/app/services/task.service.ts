import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { empty, from, Observable } from 'rxjs';
import { Task } from '../store/states/task.state';

const collectionName: string = 'tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: AngularFirestore) { }

  public create(props: { description: string, createdAt: string }): Observable<void> {
    const _id = this.firestore.createId();
    const _newTask: Task = { id: _id, createdAt: props.createdAt, description: props.description, completed: false };
    return from(this.firestore.collection<Task>(collectionName).doc(_newTask.id).set(Object.assign({}, _newTask)));
  }

  public fetch(): Observable<Task[]> {
    return this.firestore.collection<Task>(collectionName, ref => ref.orderBy('createdAt')).valueChanges();
  }

  public update(task: Task | undefined | null): Observable<void> {
    if (task) {
      return from(this.firestore.collection<Task>(collectionName).doc(task.id).update(task));
    } else return empty();
  }

    public delete(task: Task | undefined | null): Observable<void> {
      if(task) {
        return from(this.firestore.collection<Task>(collectionName).doc(task.id).delete());
      } else return empty();
    }

}
