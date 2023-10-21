const RestaurantPageShimmer = () => {
  return (
    <>
      <div className="shine flex h-16 w-full md:hidden "></div>
      <div className="mx-auto flex min-h-full max-w-[800px] flex-col p-4 lg:mt-8">
        <div className="flex justify-between">
          <div className="shine h-28 w-36 rounded sm:w-40 lg:h-36 lg:w-52"></div>
          <div className="shine h-24 w-20 rounded sm:m-4"></div>
        </div>
        <div className="shine mt-4 h-4 w-3/4 rounded-sm sm:w-[34rem] "></div>
        <div className="shine mt-4 h-4 w-1/2 rounded-sm sm:w-96"></div>
        <div className="mt-8 flex justify-evenly gap-x-2">
          <div className="shine h-20 w-1/3 lg:h-24"></div>
          <div className="shine h-20 w-1/3 lg:h-24"></div>
          <div className="shine h-20 w-1/3 lg:h-24"></div>
        </div>
        <div className="mt-8 flex justify-between">
          <div className="shine h-20 w-28 rounded sm:h-28 sm:w-40 lg:w-48"></div>
          <div className="shine h-16 w-20 rounded sm:m-4 sm:h-24 sm:w-28"></div>
        </div>
        <div className="shine mt-4 h-4 w-3/4 rounded-sm sm:w-[30rem]"></div>
        <div className="shine mt-4 h-4 w-1/2 rounded-sm sm:w-80"></div>
        <div className="mt-8 flex justify-between">
          <div className="shine h-20 w-28 rounded sm:h-28 sm:w-40 lg:w-48"></div>
          <div className="shine h-16 w-20 rounded sm:m-4 sm:h-24 sm:w-28"></div>
        </div>
        <div className="shine mt-4 h-4 w-3/4 rounded-sm sm:w-[30rem]"></div>
        <div className="shine mt-4 h-4 w-1/2 rounded-sm sm:w-80"></div>
        <div className="mt-8 flex justify-between">
          <div className="shine h-20 w-28 rounded sm:h-28 sm:w-40 lg:w-48"></div>
          <div className="shine h-16 w-20 rounded sm:m-4 sm:h-24 sm:w-28"></div>
        </div>
        <div className="shine mt-4 h-4 w-3/4 rounded-sm sm:w-[30rem]"></div>
        <div className="shine mt-4 h-4 w-1/2 rounded-sm sm:w-80"></div>
      </div>
    </>
  );
};
export default RestaurantPageShimmer;
