export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-gc-primary-light to-gc-white-shade py-40 grid grid-cols-2 gap-6">
      <div>
        <div className="text-black font-semibold text-6xl leading-tight">
          Create the building you want here
        </div>
        <div className="text-gray-500 py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
          metus tortor, auctor id gravida condimentum, viverra quis sem.
        </div>
        <button className="px-6 py-3 md:mx-2 text-gc-black text-center bg-gc-primary  rounded-full hover:text-grey-900 tracking-wide">
          Learn More
        </button>
      </div>
      <div></div>
    </div>
  );
}
