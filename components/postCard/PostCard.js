const PostCard = ({imgUrl, title}) => {
    return(
        <div className="flex flex-col shadow-md max-w-[85%] sm:max-w-[350px]
        rounded-md cursor-pointer hover:shadow-lg">
            <div className="flex items-center justify-center p-1">
                <img
                    className="max-h-[200px] max-w-full rounded-md" 
                    alt="Image"
                    src={imgUrl}
                />
            </div>
            <div className="shadow-inner p-2">
                <div className="mt-2 mb-5">
                    <span className="text-lg font-medium">
                        {title}
                    </span>
                </div>
                <div className="mb-5">
                    <p className="text-gray-700">Exerpt of the content of the blog within some words...</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <div className="bg-gray-800 w-7 h-7 rounded-[50%]"></div>
                        <div>By Preetam Raj</div>
                    </div>
                    <div className="text-gray-500 text-xs">Oct 6, 2022</div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;