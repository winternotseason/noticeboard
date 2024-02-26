export interface Post {
  index: number;
  name: string;
  title: string;
  view: number;
}

export const postList: Post[] = [
  {
    index: 1,
    name: "guest1",
    title: "첫번째 글 ㅎㅎㅎ",
    view: 3,
  },
  { index: 2, name: "guest2", title: "게시판 만들기", view: 4 },
  { index: 3, name: "guest3", title: "재밌다ㅏㅏㅏ", view: 6 },
  { index: 4, name: "guest1", title: "이거 봐바", view: 14 },
  {
    index: 5,
    name: "gues41",
    title: "다섯번째 글 ㅎ",
    view: 1,
  },
  {
    index: 6,
    name: "guest5",
    title: "미쳣다 이거",
    view: 9,
  },
  {
    index: 7,
    name: "guest10",
    title: "ㅅㅂ 졸려",
    view: 10,
  },
];

export interface User {
  id: string;
  password: string;
  nickname: string;
}


export type LoginUser = {
  id:string,
  password:string
}