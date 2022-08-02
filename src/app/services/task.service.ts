import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Task } from '../store/states/task.state';

const collectionName: string = 'tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: AngularFirestore) { }

//   public create(description: string, createdAt: string): Promise<void> {
//     const _id = this.firestore.createId();
//     const _defaultUpdateValue: string = '';
//     const _newTask: TaskModel = new TaskModel(_id, createdAt, description, _defaultUpdateValue, false);
//     return this.firestore.collection<TaskModel>(collectionName).doc(_newTask.id).set(Object.assign({}, _newTask));
//   }

  public fetch(): Observable<Task[]> {
    return this.firestore.collection<Task>(collectionName, ref => ref.orderBy('createdAt')).valueChanges();
  }

//   public update(task: TaskModel): Promise<void> {
//     return this.firestore.collection<TaskModel>(collectionName).doc(task.id).update(task);
//   }

//   public delete(task: TaskModel): Promise<void> {
//     return this.firestore.collection<TaskModel>(collectionName).doc(task.id).delete();
//   }

}
