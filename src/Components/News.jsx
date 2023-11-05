import React, { Fragment } from 'react'
import { useState,useEffect } from 'react';
import { FaExternalLinkAlt, } from 'react-icons/fa'
import { IconContext, } from 'react-icons'
const News = () => {
    const [news,setNews]=useState([])
    const [country,setCountry]=useState('in')
    const [category,setCategory]=useState('business')
    //test data
//     const fetchedData={
//         article_id: "fc2ab92e722c30e49831a9f77d04477c",
// title: "Quarta lista de civis autorizados a sair de Gaza não tem brasileiros",
// link: "https://www.gazetadopovo.com.br/mundo/quarta-lista-de-civis-autorizados-a-sair-de-gaza-nao-tem-brasileiros/",
// keywords: null,
// creator: null,
// video_url: null,
// description: "Na sexta-feira, a embaixada do Brasil já havia expressado frustração por não haver brasileiros no terceiro grupo autorizado a deixar a região do conflito",
// content: "Mundo 0 A quarta lista de estrangeiros autorizados a deixar a Faixa de Gaza, neste sábado (4), tem 599 nomes, mas novamente nenhum brasileiro faz parte da relação. Segundo o embaixador do Brasil na Palestina, Alessandro Candeas, o grupo tem cidadãos dos Estados Unidos, Reino Unido, França e Alemanha. Na sexta-feira (3), Candeas já havia expressado frustração por não haver brasileiros no terceiro grupo autorizado a deixar a região do conflito. No mesmo dia, a presidente do PT, Gleisi Hoffmann, declarou que Israel “discrimina” o Brasil ao excluir brasileiros da lista de civis autorizados a deixar Gaza, sem, segundo ela, apresentar qualquer justificativa para isso.",
// pubDate: "2023-11-04 13:50:49",
// image_url: "https://media.gazetadopovo.com.br/2023/11/04105007/6c0781e11cefe3ac892908e6157786847ac5a478w-960x540.jpg",
// source_id: "gazetadopovo",
// source_priority: 222121,
// country: Array(1),
// category: Array(1),
// language: "portuguese",
//     }

useEffect(()=>{


    const newsData = async (country,category) => {
        const URL='https://newsapi.org/v2/top-headlines/sources?apiKey=609034a4817843888b3d30ce600f0273'
        const URL1='https://newsdata.io/api/1/news?apikey=pub_3236427375117772bbdc995b36944ef251b81&language=en&country=in,us,jp,ca,gb&category=education,science,technology,health'
        const news = await fetch(
          URL1
        );
        const response = await news.json();
        setNews(response.results)
        console.log(response.results);

        setCategory("")
        setCountry('')
      };

      
    
    },[])
    
  return (
    <>
    <div className='absolute z-10 mt-2 ml-2  bg-black w-[35vw] h-[90vh] bg-opacity-50 rounded-xl px-4 py-2 overflow-y-scroll todo_container shadow-2xl backdrop-blur-lg'>
        <div>
            <div className='main_tasks text-white text-2xl mt-3'>Customize your News</div>
                <form>
                    <input placeholder='Enter Country' className='focus:bg-transparent bg-transparent placeholder:text-xl text-xl mt-3 focus:outline-none placeholder:text-white border-b-[2px] w-80' onChange={(e)=>setCountry(e.target.value)} />
                    <input placeholder='Enter Category' className="focus:bg-transparent bg-transparent placeholder:text-xl text-xl mt-3 focus:outline-none placeholder:text-white border-b-[2px] w-80 " onChange={(e)=>setCategory(e.target.value)} />
                    <button onSubmit className=" bg-black text-white p-2 m-2 rounded-md " onChange={(e)=>setCountry(e.target.value)}>submit</button>
                </form>
            </div>
    
            {news && news?.map((fetchedData)=>(
                <div className='my-1' key={fetchedData.article_id}>
                <div className='bg-black/60 p-2 rounded-md'>
                    <div className=' '><img src={fetchedData.image_url} className=' rounded-t-md ' alt="Image not found" width="100%" height="100%" /></div>
                    <div className=' justify-end flex text-white text-[80%] bg-white/5 p-1 pr-5 '>Date of publish : {fetchedData.pubDate}</div>
                    <div className=' justify-center flex flex-row text-white text-[150%] bg-black/40 p-2'>{fetchedData.title}
                    <IconContext.Provider value={{ color: "blue", className: "global-class-name" ,size:'1em'}}>

                        <a href={fetchedData.link} target='_blank' ><FaExternalLinkAlt /></a> 

                    </IconContext.Provider>
                </div>
                <hr/>
                <div className=' justify-center text-white flex bg-black/40 p-2 rounded-b-md'>{fetchedData.description}</div>
                
        </div>
        </div>
            ))}
        
    </div>
    </>
  )
}

export default News