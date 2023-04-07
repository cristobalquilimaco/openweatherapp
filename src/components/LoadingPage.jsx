import Sun from '/public/luz-del-sol.png';

const LoadingPage = () => {
  return (
<div className='loadingPage'>
  <div>
  <img className='bxs-sun' src={Sun} alt="Ejemplo" />
  </div>
        
    <p className="textLoading">Loading...</p>
    </div>
              


  )
}

export default LoadingPage