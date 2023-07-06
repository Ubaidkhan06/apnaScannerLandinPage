const Pricing = () => {
  return (
    <>
      <div className="bg-paleBlue p-8 flex flex-col justify-center h-screen items-center text-center">
        <h1 className="text-mainBlue text-4xl font-medium">A Price that Suits Everyone</h1>
        <p className="w-5/12 my-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo
          ducimus maiores facilis voluptatum. Qui corporis perferendis ea.
          Placeat voluptatibus quae beatae alias esse repellendus magni dolores
          quas suscipit! Aspernatur.
        </p>
        <h2 className="text-mainBlue mt-4 text-4xl font-medium"> &#8377; 40</h2>
        <p className="mt-12">Simple and Effective</p>
        <button className="btn btn-accent bg-mainBlue mt-4 text-neutral-50">Purchase Now</button>
      </div>
    </>
  );
};

export default Pricing;
