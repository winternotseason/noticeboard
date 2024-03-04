import "./PostingMain.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { RiFileEditLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type PostValue = {
  title: string;
  content: string;
  img?: string;
};

const PostingMain = () => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState();
  const [fileValue, setFileValue] = useState("첨부파일");
  const { register, handleSubmit } = useForm<PostValue>();

  const uploadPost = async (data: PostValue) => {
    const post = { title: data.title, content: data.content, url: imgUrl };
    const res = await axios.post("http://localhost:8001/post", post);
    if (res.data.status === 2001) {
      navigate("/album");
    }
  };

  const uploadFile = async (e: any) => {
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();
      formData.append("img", uploadFile);
      await axios
        .post("http://localhost:8001/post/img", formData)
        .then((res) => {
          setImgUrl(res.data.url);
          setFileValue(e.target.files[0].name);
        });
    }
  };

  return (
    <div className="posting-container">
      <form className="posting-form" onSubmit={handleSubmit(uploadPost)}>
        <input type="text" placeholder="제목" {...register("title")} />
        <textarea
          placeholder="내용을 입력해 보세요!"
          {...register("content")}
        />
        <div className="file-uploader">
          <input className="upload-name" value={fileValue} disabled></input>
          <label className="file-label" htmlFor="img">
            파일 찾기
          </label>
          <input
            type="file"
            id="img"
            {...register("img")}
            onChange={uploadFile}
          />
        </div>
        <button className="btn">
          <span>발행</span>
          <RiFileEditLine />
        </button>
      </form>
    </div>
  );
};

export default PostingMain;
