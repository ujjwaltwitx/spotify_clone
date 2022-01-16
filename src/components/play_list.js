
const PlayList =(props) => {
    return (
        <div className="flex rounded items-center w-1/5 h-20 gap-3  bg-blend-color bg-gray-700 shadow-black hover:shadow-xl cursor-pointer transition-transform hover:-translate-y-1 min-w-fit pr-10">
            <div>
                <img className=" h-20 w-20 object-cover shadow-black rounded-l" src={props.url} alt="" srcset="" />
            </div>
            <p className="text-white">#{props.name}</p>
        </div>
    );
}

export default PlayList;