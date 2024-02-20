export interface Post {
  index: number;
  name: string;
  title: string;
  view: number;
}

export const postList: Post[] = [
  {
    index:1,
    name: "카리나",
    title: "첫번째 글 ㅎㅎㅎ",
    view: 3,
  },
  { index:2,name: "닝닝", title: "게시판 만들기", view: 4 },
  { index:3,name: "지젤", title: "재밌다ㅏㅏㅏ", view: 6 },
  { index:4,name: "윈터", title: "이거 봐바",view: 14 }
];
