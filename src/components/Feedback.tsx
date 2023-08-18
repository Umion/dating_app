import { useState } from "react";

export const Feedback = () => {
  const [age, setAge] = useState<string>("18");
  const [gender, setGender] = useState<string>("Хлопця");

  const setAgeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  const setGenderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const submit = () => {
    const data = {
      age,
      gender,
    };
    console.log(data);
  };

  return (
    <form className="w-56 text-black font-medium mx-auto md:mx-0">
      <div className="pb-1 border-b-[1px] text-2xl mb-1 text-center md:text-left">
        Шукаю : <span className="text-primary">{gender}</span>
      </div>
      <div className="text-lg flex item-center justify-between mb-4">
        <div className="flex items-center">
          <input
            checked={gender === "Хлопця"}
            id="male"
            type="radio"
            value="Хлопця"
            name="default-radio"
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 accent-primary"
            onChange={setGenderHandler}
          />
          <label htmlFor="male" className="ml-2 ">
            Хлопця
          </label>
        </div>
        <div className="flex items-center mr-3">
          <input
            checked={gender === "Дівчину"}
            id="female"
            type="radio"
            value="Дівчину"
            name="default-radio"
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 accent-primary"
            onChange={setGenderHandler}
          />
          <label htmlFor="female" className="ml-2 ">
            Дівчину
          </label>
        </div>
      </div>
      <div className="text-2xl text-center md:text-left">
        Вік : <span className="text-primary">{age}</span>
      </div>
      <div className="text-lg flex items-center mb-4">
        <span>18</span>
        <div className="grow mx-2 flex items-center">
          <input
            id="input-range"
            value={age}
            min="18"
            max="80"
            type="range"
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm accent-primary"
            onInput={setAgeHandler}
          />
        </div>
        <span>80</span>
      </div>
      <div className="text-center md:text-left">
        <button
          type="button"
          className="text-white text-lg bg-primary hover:bg-red-600 duration-200 focus:ring-4 focus:ring-red-300 font-semibold rounded-lg px-16 py-3.5"
          onClick={submit}
        >
          Знайти
        </button>
      </div>
    </form>
  );
};
