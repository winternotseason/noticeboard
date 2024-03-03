import "./PostingMain.scss";
import { RiFileEditLine } from "react-icons/ri";
const PostingMain = () => {
  return (
    <div className="posting-container">
      <form className="posting-form">
        <input type="text" name="title" placeholder="제목" />
        <textarea name="content" placeholder="내용을 입력해 보세요!" />
        <div className="file-uploader">
          <input
            className="upload-name"
            value="첨부파일"
            placeholder="첨부파일"
            readOnly
          ></input>
          <label className="file-label" htmlFor="img">
            파일 찾기
          </label>
          <input type="file" name="img" id="img" />
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
