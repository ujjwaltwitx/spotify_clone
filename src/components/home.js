import EachMusic from "./each_music";
import PlayList from "./play_list";

const home = (
    <div className="bg-gray-800 h-screen w-full">
        <div className="text-sky-400 flex-col h-20  align-center bg-gray-800 w-full relative">
            <div className="h-20 w-full bg-red-900 shadow-lg opacity-30">
            </div>
            <div className="top-0 left-0 w-full h-20 absolute flex items-center px-5 justify-between">
                <div className="gap-3 items-center flex">
                    <div className="h-8 w-8 bg-red-700 rounded-full justify-center align-middle items-center flex">
                        <div className="h-4 w-4 bg-gray-900 rounded-full "></div>
                    </div>
                    <div className="h-12 w-12 bg-green-700 rounded-full justify-center items-center flex">
                        <div className="h-7 w-7 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="text-2xl font-bold  tracking-tighter text-white">#Spotify</span>
                </div>
                <div className="gap-3 items-center flex">
                    <div className="rounded-full border-gray-200 border-2 px-6 py-1 text-white text-center bg-black cursor-pointer hover:shadow-black hover:shadow-lg hover:-translate-y-1 transition-transform ">Login</div>
                    <div className="rounded-full border-gray-200 border-2 px-6 py-1 text-white text-center bg-black cursor-pointer hover:shadow-black hover:shadow-lg hover:-translate-y-1 transition-transform ">Register</div>
                </div>
            </div>
        </div>

        <div className="flex gap-y-5 gap-x-10 py-5 px-5 flex-wrap">
            <PlayList name="Hindi" url="https://images.unsplash.com/photo-1642271040896-1c0ad5ecf785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <PlayList name="English" url="https://images.unsplash.com/photo-1642270951288-788464be7a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <PlayList name="Tamil" url="https://images.unsplash.com/photo-1642275203524-4a69ebe2ce1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <PlayList name="Spanish" url="https://images.unsplash.com/photo-1642279713764-42250d242a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <PlayList name="French" url="https://images.unsplash.com/photo-1642202587697-45e86fa3eb82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <PlayList name="German" url="https://images.unsplash.com/photo-1642265337938-aba80a41c208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        </div>

        <div className="py-5 px-5">
            <p className="text-white text-[100px] font-extrabold tracking-tighter">#Hindi</p>
            <EachMusic url="https://images.unsplash.com/photo-1642271040896-1c0ad5ecf785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <EachMusic url="https://images.unsplash.com/photo-1642270951288-788464be7a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <EachMusic url="https://images.unsplash.com/photo-1642275203524-4a69ebe2ce1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <EachMusic url="https://images.unsplash.com/photo-1642279713764-42250d242a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <EachMusic url="https://images.unsplash.com/photo-1642202587697-45e86fa3eb82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <EachMusic url="https://images.unsplash.com/photo-1642265337938-aba80a41c208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        </div>

    </div>
);

const Home = () => {
    return home;
}

export default Home;