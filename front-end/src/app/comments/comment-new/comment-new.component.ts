import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CommentsService } from '../comments.service';
import { PetsService } from '../../pets/pets.service';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {

  newComment = '';
  userId = 0;
  petId = 0;
  pet;
  commentId = 0;


  createComment() {
    console.log(`createComment(): ${this.newComment}`);
    this.commentsService.createOneComment(this.userId, this.petId, this.newComment)
      .subscribe(response => {
        console.log(response.json());
        this.petsService.getOneUserPet(this.userId, this.petId)
          .subscribe(res => {
            this.pet = res.json();
            console.log('pet ', this.pet);
            this.router.navigateByUrl(`/users/${this.userId}/pets/${this.pet.pet_finder_api_id}`);
      });
    });
  }

  constructor(
    private commentsService: CommentsService,
    private petsService: PetsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.forEach((param) => {
      this.userId = param.id;
      this.petId = param.pet_id;
    });
  }

}
