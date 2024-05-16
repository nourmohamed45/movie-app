import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { getCurrentPageRedux } from '../redux/actions/movieActions';


function PaginationComponent() {

  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch()

  
  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    setPageCount(data.selected + 1)
  }

  useEffect(() => {
    dispatch(getCurrentPageRedux(pageCount))
  }, [dispatch, pageCount])
  


  const pagesCount = 500;
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pagesCount}
        previousLabel="السابق"
        // renderOnZeroPageCount={null}
        containerClassName='pagination justify-content-center my-5'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-link'
        nextClassName='page-link'
        breakClassName='page-link'
        activeClassName='active'
      />
  );
}

export default PaginationComponent;
