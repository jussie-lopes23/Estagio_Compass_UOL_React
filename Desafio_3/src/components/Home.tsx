import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Produtos from './Produtos';
import Produtos2 from './Produtos2';

type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    details: string;
    img: string;
    reviews: {
        userId: string;
        userName: string;
        rating: number;
        comment: string;
        postedAt: string;
    }[];
    popularity: number;
    createdAt: string;
};

const Home = () => {
    const navigate = useNavigate();
    const Deslogar = () => navigate("/");
    const [nomeUsuario, setnomeUsuario] = useState<string | null>(null);
    const [data, setData] = useState<Product[]>([]);
    const [filtrarDados, setfiltrarDados] = useState<Product[]>([]);
    const [selecionarCategoria, setselecionarCategoria] = useState<string>("headphones");

    {/*
    const [nomeUsuario, setnomeUsuario] = useState<string | null>(null);
    const [data, setData] = useState<Product[]>([]);
    const [filtrarDados, setfiltrarDados] = useState<Product[]>([]);
    const [selecionarCategoria, setselecionarCategoria] = useState<string>("headphones");
           
    */}


    useEffect(() => {
        const buscarDados = async () => {
            const response = await fetch(
                "https://run.mocky.io/v3/43f9c46c-e836-4513-8c4c-cf7c89d66108"
            );
            const data = await response.json();
            setData(data);
            setfiltrarDados(data.filter((produto: Product) => produto.category === "headphones"));
        };
        buscarDados();
    }, []);

    const analizarFilter = (categoria: string) => {
        setselecionarCategoria(categoria);
        setfiltrarDados(data.filter((produto) => produto.category === categoria));
    };

    return (
        <div className='m-auto p-2'>
            <section className='m-auto'>
                <ul className='flex justify-between m-auto mt-4'>
                    <li><button><img src="menuLateral.png" alt="Menu" /></button></li>
                    <li><img src="Logo.png" alt="Logo" /></li>
                    <li><img src="fotoIcon.png" alt="Usuário" onClick={Deslogar} /></li>
                </ul>
            </section>

            <div className='p-4'>
                <p>Hi, {nomeUsuario}</p>
                <h1 className="text-2xl mt-2 font-bold">What are you looking for today?</h1>
            </div>

            <div className='mt-2 flex w-80 h-6 m-auto p-4 border-2 border-gray-400 rounded-xl mb-3 text-gray-600 bg-white items-center'>
                <img className='w-4 h-4 mr-2' src="search.png" alt="Search" />
                <input className='border-none outline-none' type="text" placeholder='Search' onClick={() => navigate('/search')} />
            </div>

            <section className='bg-gray-100 rounded-xl mt-4 flex w-full justify-center items-center flex-col'>
                <div className='flex'>
                    <div className="flex my-4 items-center">
                        <button 
                            className={`p-2 mx-8 flex cursor-pointer rounded-lg w-32 text-center ${selecionarCategoria === "headphones" ? "bg-green-500 text-white" : "bg-gray-200"}`} 
                            onClick={() => analizarFilter("headphones")} //aqui
                        >
                            HeadPhone
                        </button>
                        <button 
                            className={`p-2 flex cursor-pointer rounded-lg w-32 ${selecionarCategoria === "headsets" ? "bg-green-500 text-white" : "bg-gray-200"}`} 
                            onClick={() => analizarFilter("headsets")} //aqui
                        >
                            HeadSet
                        </button>
                    </div>
                </div>

                <div className="w-full px-2">
                    <Carousel 
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showStatus={false}
                         // Define a largura de cada item
                        className="flex justify-center items-center"
                    >
                        {filtrarDados.map((item) => (
                            <div key={item.id} className="flex justify-center items-center">
                                <Produtos
                                    name={item.name}
                                    category={item.category}
                                    price={item.price}
                                    details={item.details}
                                    img={item.img}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                
                <div className="flex gap-16 mb-10">
                    <p className="text-base font-normal">Featured Products</p>
                    <button onClick={() => navigate('/allProducts')} className="text-base font-normal text-gray-400">
                    See All
                    </button>
                </div>

                {data.length > 0 && (
                    <div className="w-4/5 mx-auto">
                        <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showStatus={false}
                        interval={5000} // Ajusta o tempo entre trocas (5 segundos)
                        stopOnHover={true} // Pausa quando o mouse passa por cima
                        className="flex justify-center items-center"
                        >
                        {data.slice(0, 3).map((item) => (
                            <div key={item.id} className="flex justify-center">
                            <Produtos2
                                name={item.name}
                                category={item.category}
                                price={item.price}
                                details={item.details}
                                img={item.img}
                            />
                            </div>
                        ))}
                        </Carousel>
                    </div>
                )}

                
            </section>
        </div>
    );
}

export default Home;
