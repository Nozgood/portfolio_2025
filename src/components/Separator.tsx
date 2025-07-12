function Separator({ padding = "p-12" }) {
    return (
        <div className={`relative ${padding}`}>
            <div
                className="absolute left-0 right-0 border-t border-gray-200"
                style={{
                    width: '100vw',
                    marginLeft: '50%',
                    transform: 'translateX(-50%)'
                }}
            ></div>
        </div>
    );
}

export default Separator;
