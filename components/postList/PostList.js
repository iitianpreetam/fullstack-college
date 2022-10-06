import PostCard from "../postCard/PostCard";

const PostList = () => {
    return(
        <div className="flex flex-col items-center justify-center
        space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            <PostCard
                imgUrl={"https://images.pexels.com/photos/4618514/pexels-photo-4618514.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                title={"5 Interesting Web Designing project Ideas for Beginners [2022]"}
            />
            <PostCard
                imgUrl={"https://images.pexels.com/photos/1964475/pexels-photo-1964475.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                title={"5 Interisting Web Development Project Ideas for Beginners [2022]"}
            />
            <PostCard
                imgUrl={"https://images.pexels.com/photos/301375/pexels-photo-301375.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                title={"5 Interisting Web Development Project Ideas for Beginners [2022]"}
            />
            <PostCard
                imgUrl={"https://images.pexels.com/photos/6422285/pexels-photo-6422285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                title={"5 Interisting Web Development Project Ideas for Beginners [2022]"}
            />
            <PostCard
                imgUrl={"https://images.pexels.com/photos/6422293/pexels-photo-6422293.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                title={"5 Interisting Web Development Project Ideas for Beginners [2022]"}
            />
            <PostCard
                imgUrl={"https://images.pexels.com/photos/6422285/pexels-photo-6422285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                title={"5 Interisting Web Development Project Ideas for Beginners [2022]"}
            />
            <PostCard
                imgUrl={"https://images.pexels.com/photos/6422293/pexels-photo-6422293.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                title={"5 Interisting Web Development Project Ideas for Beginners [2022]"}
            />
            <PostCard
                imgUrl={"https://images.pexels.com/photos/6422285/pexels-photo-6422285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
                title={"5 Interisting Web Development Project Ideas for Beginners [2022]"}
            />
        </div>
    );
};

export default PostList;