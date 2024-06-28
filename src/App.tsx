import InfiniteCarousel from "./lib/InfiniteCarousel/InfiniteCarousel"

const App = () => {

  return (
    <div className="w-full bg-slate-100">
      <div className="h-[100vh] w-[1780px]  overflow-hidden mx-auto">
        <InfiniteCarousel 
        />
      </div>
    </div>

  )
}

export default App
