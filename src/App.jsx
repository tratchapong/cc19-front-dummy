import Card from "./Card"

function App() {

  return (
    <div className="flex flex-col gap-3 max-w-5xl mx-auto">
      <div className="text-pink-500 text-4xl ">Products</div>
      <div className="divider"></div>
      <div className="w-full grid grid-cols-1 place-items-center bg-amber-100">
      <div className="w-[96%] bg-pink-300 p-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      </div>
    </div>
  )
}

export default App
