const Products = ({ result }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-4xl w-full">
        {result}
      </div>
    </div>
  );
}

export default Products;
