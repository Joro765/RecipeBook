export interface Recipe {
    _ownerId: string;
    name: string;
    category: string;
    description: string;
    difficulty: string;
    time: string;
    servings: string;
    img: string;
    ingredients: [],
    steps: [],
    _createdOn: string;
    _id: string;
}