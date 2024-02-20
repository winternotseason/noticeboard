import { useParams } from "react-router-dom";

const PostDetailPage = () => {
    const params = useParams();
    return (
        <div>
            Post Detail {params.id}
        </div>
    );
};

export default PostDetailPage;