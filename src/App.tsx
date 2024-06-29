import InfiniteCarousel from "./lib/InfiniteCarousel/InfiniteCarousel"

const App = () => {
// bg-gradient-to-tr from-white via-slate-50 to-sky-300
  return (
    <div className="w-full bg-white ">
      <div className="h-[100vh] w-[1180px]  overflow-hidden mx-auto">
        <InfiniteCarousel 
        />
      </div>
    </div>

  )
}

export default App
