const EachMusic = (props)=>{
    return(
        <div className="h-16 px-5 py-2 w-full text-white hover:bg-gray-700 items-center p-0 flex rounded gap-x-5 gap-y-2 bg-blend-normal">
        <p>1</p>
            <img className="h-10 w-10 object-cover" src={props.url} alt="" />
            <div className="h-full w-1/4 gap-y-1 items-center">
                <p className="text-lg  tracking-tighter"> Hi I am Anabeles Cortes</p>
                <p className="text-[14px]  tracking-tighter">Moeen Ali</p>
            </div>
            <div className="w-1/4 flex-row-reverse">
                <p>Ek Tera Saath</p>
            </div>
            <div className="w-1/4">
                Jan 20, 2021
            </div>
            <div className="w-1/4">
                4:30
            </div>
        </div>

        
    )
}

export default EachMusic;