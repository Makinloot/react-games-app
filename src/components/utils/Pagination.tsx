import { useParams } from "react-router-dom"

type TPagiation = {
  count: number;
  endpoint: string;
}

const Pagination:React.FC<TPagiation> = ({ count, endpoint }): JSX.Element | null => {
  const { page } = useParams();
  const pagesLength = Math.floor(count / 10);
  console.log(pagesLength)
  if(pagesLength <= 1) return null
  else return (
    
    <div className="Pagination flex-row">
      {/* first page */}
      {Number(page) !== 1 ? <a href={`${endpoint}/1`}><i className="fa-solid fa-angles-left"></i></a> : null }

      {/* prev page */}
      {Number(page) - 1 > 0 ? <a href={`${endpoint}/${Number(page) - 1}`}><i className="fa-solid fa-angle-left"></i></a> : null }

      {/* prev pages */}
      {Number(page) - 2 > 0 ? <a href={`${endpoint}/${Number(page) - 2}`}>{Number(page) - 2}</a> : null }
      {Number(page) - 1 > 0 ? <a href={`${endpoint}/${Number(page) - 1}`}>{Number(page) - 1}</a> : null }

      {/* current page */}
      <a href={`${endpoint}/${page}`} className="active">{page}</a>

      {/* next pages */}
      {Number(page) + 1 <= pagesLength ? <a href={`${endpoint}/${Number(page) + 1}`}>{Number(page) + 1}</a> : null }
      {Number(page) + 2 <= pagesLength ? <a href={`${endpoint}/${Number(page) + 2}`}>{Number(page) + 2}</a> : null }

      {/* next page */}
      {Number(page) + 1 <= pagesLength ? <a href={`${endpoint}/${Number(page) + 1}`}><i className="fa-solid fa-angle-right"></i></a> : null }

      {/* last page */}
      {Number(page) !== pagesLength ? <a href={`${endpoint}/${pagesLength}`}><i className="fa-solid fa-angles-right"></i></a> : null }
    </div>
  )
}

export default Pagination