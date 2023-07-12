import Card from "./components/Card";
import CustomButton from "./components/CustomButton";
import GenerateButton from "./components/GenrateButton";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-3xl font-extrabold py-10">Color palette generator</div>
      <Card />
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 items-center">
         <div className="flex flex-row items-center w-full justify-between gap-10">
         <GenerateButton />
         <CustomButton text="Add Card" padding="1rem 2rem"/>
         </div>
          <div>Or just press the "Spacebar" to generate new palettes.</div>
        </div>
        <div className="p-4 bg-slate-100 w-fit rounded-full mb-10 text-grey self-center">
          Click to copy individual color . Press "C" to copy palette
        </div>
      </div>
    </div>
  );
}

export default App;
