export interface Post {
  index: number;
  name: string;
  title: string;
  view: number;
}

export const postList: Post[] = [
  {
    index: 1,
    name: "김민정",
    title: "자료 첨부) 프론트엔드 백엔드 연결 여부",
    view: 3,
  },
  { index: 2, name: "유지민", title: "모던 리액트 정독하기", view: 4 },
  {
    index: 3,
    name: "안유진",
    title: "추천) 몽고디비 개념서 추천합니다",
    view: 6,
  },
  { index: 4, name: "장원영", title: "AWS로 배포까지 하셔야 합니다", view: 14 },
];

export interface User {
  id: string;
  password: string;
  nickname: string;
}

export type LoginUser = {
  id: string;
  password: string;
};
