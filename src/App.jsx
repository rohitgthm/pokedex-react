import Description from "./components/Description";
import PokeDex from "./components/PokeDex";

const App = () => {
  return (
    <>
      <div className="max-sm:hidden flex border rounded-md bg-slate-50 w-300 shadow-xl shadow-black h-fit p-5 m-5 justify-start items-start gap-10">
        <Description />
        <PokeDex />
      </div>
      <div className="md:hidden">
        <PokeDex />
      </div>
    </>
  );
};

export default App;
