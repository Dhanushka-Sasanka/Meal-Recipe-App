
// this class created for tranfer data of recipes simplly like a DTO 
export class Recipes {

    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {

        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}