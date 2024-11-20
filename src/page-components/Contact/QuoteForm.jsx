export const QuoteForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Get An Instant Quote
      </h2>
      <form className="space-y-4 flex flex-col justify-end items-end w-full">
        <input
          type="text"
          placeholder="Enter your email / phone no."
          className="w-full p-3  border-b-2 border-b-gray-400  text-[#27293B] focus:outline-none "
        />
        <button className="w-max float-left bg-primary rounded-full text-white py-3 px-6 transition-colors">
          Get a quote
        </button>
      </form>
    </div>
  );
};
