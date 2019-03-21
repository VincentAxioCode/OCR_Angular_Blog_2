import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    posts: Post[] = [];
    postSubject = new Subject<Post[]>();

    constructor() {
        this.getPosts();
    }

    emitPosts() {
        this.postSubject.next(this.posts);
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts').on('value', (data: DataSnapshot) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
        });
    }

    addPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    love(post: Post) {
        post.loveIts++;
        this.savePosts();
        this.emitPosts();
    }

    hate(post: Post) {
        post.loveIts--;
        this.savePosts();
        this.emitPosts();
    }

    deletePost(post: Post) {
        const postIndexToDelete = this.posts.findIndex(
            (postEl) => {
                if(postEl === post) return true;
            }
        );

        this.posts.splice(postIndexToDelete, 1);
        this.savePosts();
        this.emitPosts();
    }
}
