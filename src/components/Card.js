import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-48 flex flex-col border border-gray-400">
      <div style={{ height: '50%' }}> {/* Adjusted height allocation */}
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="flex-grow flex flex-col justify-between p-2">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <section className="flex items-center text-xs overflow-hidden"> {/* Handle overflow */}
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>{star}</span> // Render stars
          ))}
          <span>({reviews})</span>
        </section>
        <section className="flex justify-between items-center text-xs">
          <div>
            <del>{prevPrice}</del> <span className="font-semibold">{newPrice}</span>
          </div>
          <button className="text-white bg-blue-500 p-1 rounded-full">
            <BsFillBagFill size="16" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Card;
