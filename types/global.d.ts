//this document stands for definiton of ts
// we can share these types across whichever files you type right here, like interface, question, youll be able to reuse across all the other files without even needing to import them. it will reduce a errors. And significantly improve your TypeScript developer experience.

interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string;
  title: string;
  description: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}
