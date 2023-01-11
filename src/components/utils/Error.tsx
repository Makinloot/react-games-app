import errorImg from '../../assets/404.png';

const Error = () => {
  return (
    <div className='Error'>
      <div className="container">
        <div className="Error-wrapper">
          <div className="Error-img">
            <img src={errorImg} alt="Error 404, page not found..." />
          </div>
          <p>Page you requested was not found</p>
          <br />
          <p>Return to <a href="/">Main page</a> </p>
        </div>
      </div>
    </div>
  )
}

export default Error