
interface Card{
  id: number;
 attributes:{
  type: string;
  details: string;
  ratings: number;
  reviews: number;
  discount: number;
  mainPrice: number;
  price: number;
  views: number;
 }
  
}

export default async function Home() {

  const res = await fetch('https://shoppealtech-4qqi.onrender.com/api/samples');
  const myCard = await res.json();
  const cards = myCard.data
  return (
    <>
      <div className="w-full h-full bg-slate-50 flex justify-center">
      <div className='w-[80%] flex flex-wrap justify-around my-10'>
      {
        cards.map((item : Card)=>(
          
         <>
          <div key={item.id} className="mb-14 w-80 h-[410px] shadow-xl bg-white rounded-lg ring-3 ring-gray-100">
          <img id="img" src={`https://picsum.photos/seed/${Math.random()}/1000`} className="rounded-t-lg w-full h-44" alt="" />
        <div className="p-6">
        <h1 className="text-gray-400 font-medium uppercase">{item.attributes.type}</h1>
          <p className="font-quicksand font-bold text-gray-500 my-2">{item.attributes.details}</p>
          <div className="flex gap-4 text-sm">
          <p className="bg-gradient-to-r from-orange-500 to-orange-300 text-white font-medium w-16 p-[1px] text-center opacity-80 rounded-full -mr-1">{item.attributes.ratings} &#9733;</p>
          <p className="text-gray-400 text-sm">({item.attributes.reviews} Reviews)</p>
          <span className="relative text-sm w-10 ml-auto text-gray-700">
      <span className="absolute top-3 w-full h-[1px] bg-black transform rotate-[-15deg]"></span> ${item.attributes.mainPrice}
        </span>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-blue-400 font-quicksand font-bold my-3"><span className="ring-2 rounded-3xl px-1 py-[1px] text-[10px] mr-2">%</span>save upto {item.attributes.discount}% off</p>
            <p className="text-2xl mt-1 font-medium opacity-80">${item.attributes.price}</p>
          </div>
          <hr />
          <p className="font-bold font-quicksand text-gray-500 text-sm my-3 "><span className="text-lg mr-2">&#9788;</span>{item.attributes.reviews} people viewing now</p>
        </div>
          </div>
         
         </>
        ))
       }

      </div>
      </div>
    </>
  );
}



