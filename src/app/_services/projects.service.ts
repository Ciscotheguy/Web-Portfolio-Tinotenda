import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
   
    { id:0, name: 'Movie website', summary: 'Web Application for a cinema', description: 'This is a website aimed to help users book for movie showings and see Prices and movies Now showing at the cinema', projectLink: 'https://mybac-my.sharepoint.com/:f:/g/personal/cse21-101_thuto_bac_ac_bw/Eqdeuq09k4JOtwSmxo9em6oBw8Kuw_EOzVqmg_0P6MgHqQ?e=h7Mg4g', tags: [Tag.REACT, Tag.NODEJS], pictures: ["../../assets/g3.png","../../assets/g1.png","../../assets/g2.png"] },
    { id:1, name: 'Angular App', summary: ' Online Personal Portfolio', description: 'Creation of a personal portfolio website in Angular to showcase your profile, skills, previous projects, and contact information.', projectLink: 'https://github.com/Ciscotheguy/Ciscotheguy.github.io.git', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: ["../../assets/g4.png","../../assets/g5.png","../../assets/g6.png"] },
    { id:2, name: 'Mobile App', summary: 'Music Player', description: 'Mobile Application for playing music.', projectLink: 'https://github.com/Cisco/MyProject', tags: [Tag.JAVA, Tag.NODEJS], pictures: ["../../assets/musicapp.jpg","../../assets/t1.jpg","../../assets/b1.jpg"] }
  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }
  GetProjectById(id: number) : Project {
    let project = this.projects.find(project =>project.id ===id);
    if (project===undefined){
      throw new TypeError('There is no project that matches the id: '+ id);
    }
    return project;
  }
    

}
