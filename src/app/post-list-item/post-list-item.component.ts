import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
    @Input() post: Post[];

    constructor(private postsService: PostsService) {
    }

    ngOnInit() { }

    onLove(post: Post) {
        this.postsService.love(post);
    }

    onHate(post: Post) {
        this.postsService.hate(post);
    }

    onDelete(post: Post) {
        console.log(post);
        this.postsService.deletePost(post);
    }

}
