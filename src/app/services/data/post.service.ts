import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IPost } from '../../interfaces/IPost';
import { ApiService } from './api.service';

const TXT = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const DATA: IPost[] = [
  {
    id: 1,
    title: "Gratta e Vinci rubato, \"non solo furto\". La scoperta choc sul tabaccaio napoletano",
    text: "Dopo il caso del tabaccaio di Napoli scappato con un Gratta e Vinci da 500 mila euro, sono diversi gli utenti e i giocatori d’Italia che si chiedono come evitare situazioni simili e ridurre i rischi in caso di vincita. Dopo il caso del tabaccaio di Napoli scappato con un Gratta e Vinci da 500 mila euro, sono diversi gli utenti e i giocatori d’Italia che si chiedono come evitare situazioni simili e ridurre i rischi in caso di vincita.",
    created_at: "2021-01-01 15:00:00",
    updated_at: "string",
    comments_count: 23,
    user: {
      id: 1,
      email: "cassandra_luiz@example.com",
      first_name: "Cassandra",
      last_name: "Luiz",
      full_name: "Cassandra Luiz",
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
  },
  {
    id: 2,
    title: "Lo pensano tutti ma non lo dice nessuno... React è una merda.",
    text: TXT,
    created_at: "2021-01-01 15:00:00",
    updated_at: "string",
    comments_count: 119,
    user: {
      id: 2,
      email: "penelope672@example.com",
      first_name: "Penelope",
      last_name: "Gallison",
      full_name: "Penelope Gallison",
      avatar: 'https://randomuser.me/api/portraits/women/29.jpg'
    },
  },
  {
    id: 3,
    title: "Pompini a raffica, Sammargheritese KO!",
    text: "Due gol del bomber della Fiorenzuola che con una doppietta regala alla sua squadra il sogno C2! Giornata indimenticabile per Pompini che " + TXT,
    created_at: "2021-01-01 15:00:00",
    updated_at: "string",
    comments_count: 61,
    user: {
      id: 3,
      email: "marshall.larson@example.com",
      first_name: "Marshall",
      last_name: "Larson",
      full_name: "Marshall Larson",
      avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
    },
  },
  {
    id: 4,
    title: "Non so che titolo mettere DC",
    text: TXT,
    created_at: "2021-01-01 15:00:00",
    updated_at: "string",
    comments_count: 17,
    user: {
      id: 4,
      email: "ramon.hudson@example.com",
      first_name: "Ramon",
      last_name: "Hudson",
      full_name: "Ramon Hudson",
      avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
    },
  },
  {
    id: 5,
    title: "Gratta e Vinci rubato, \"non solo furto\". La scoperta choc sul tabaccaio napoletano",
    text: "Stocazzoo",
    created_at: "2021-01-01 15:00:00",
    updated_at: "string",
    comments_count: 23,
    user: {
      id: 1,
      email: "cassandra_luiz@example.com",
      first_name: "Cassandra",
      last_name: "Luiz",
      full_name: "Cassandra Luiz",
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
  },
]

@Injectable({
  providedIn: 'root'
})

export class PostService extends ApiService<IPost> {
  getList$(params?: { [key: string]: any; }): Observable<IPost[]> {
    if (params && params.user_id)
      return of(DATA.filter(d => d.user.id === params.user_id)).pipe(delay(1000));
    return of(DATA).pipe(delay(1000));
  }
  getItem$(id: number): Observable<IPost> {
    throw new Error('Method not implemented.');
  }
  deleteItem$(id: any): Observable<void> {
    throw new Error('Method not implemented.');
  }
  save$(item: any): Observable<IPost> {
    throw new Error('Method not implemented.');
  }
}
