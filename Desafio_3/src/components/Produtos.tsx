interface ProdutosProps {
    name: string;
    category: string;
    price: number;
    details: string;
    img: string;
}

const Produtos = ({ name, category, price, details, img }: ProdutosProps) => {
    return (
        <div className="flex flex-col items-center cursor-pointer w-64 m-4 rounded-2xl bg-white shadow-md p-5">
            <div className="flex flex-col items-center">
                <img src={img} alt={name} className="rounded-2xl h-44 w-full object-cover" />
                <h2 className="font-medium mt-2 text-center">{name}</h2>
            </div>
            <button className="text-lg text-green-600 font-bold mt-3 cursor-pointer">
                Shop now →
            </button>
        </div>
    );
}

export default Produtos;
