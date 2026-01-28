import "./App.css";
import Card from "./components/card";

function App() {
  // let myObj = {
  //   name: "Pulkit",
  // };
  // let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4-rounded-xl">TailWind Test</h1>
      {/* <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img
          class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://images.pexels.com/photos/35720021/pexels-photo-35720021.jpeg"
          alt=""
        />
        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-black">Erin Lindford</p>
            <p class="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div> */}
      {/* <Card channel="chaiaurcode" someObj={newArr} /> */}
      <Card username="Pulkit" btnText="click me" />
      <Card username="Ron" btnText="visit me" />
    </>
  );
}

export default App;
