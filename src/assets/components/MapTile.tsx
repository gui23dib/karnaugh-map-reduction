interface MapTileInterface {
    value: number;
}


const MapTile = ({value}: MapTileInterface) => {

    return (
        <div 
            className="justify-center py-2.5 select-none px-5 mr-2 mb-2 text-sm focus:outline-none bg-slate-700 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer font-bold text-slate-200 hover:text-slate-900 focus:z-10 focus:ring-4 focus:ring-gray-200"
            onClick={() => value = (value == 0 ? 1 : 0)}
        >
            <h1 className="w-8 text-center">
                {value}
            </h1>
        </div>
    );
};

export default MapTile;
