import ReactPaginate from "react-paginate"
import { StyledPagination } from "./Paginate.styled"


interface PaginateProps {
    onPageChange: (page: number) => void
    totalPage: number
    initialPage: number
}

export const Paginate = ({onPageChange, initialPage, totalPage}:PaginateProps) => {
  return (
    <>
        <StyledPagination>
          <ReactPaginate
            nextLabel="next >"
            initialPage={initialPage}
            onPageChange={(e)=> onPageChange(e.selected+1)}
            pageRangeDisplayed={3}
            pageCount={totalPage}
            marginPagesDisplayed={1}
            previousLabel="< previous"
            pageLinkClassName="page-item"
            previousLinkClassName="page-item"
            nextLinkClassName="page-item"
            breakLabel="..."
            breakLinkClassName="page-item"
            containerClassName="pagination"
            activeLinkClassName="active"
          />
        </StyledPagination>
    </>
  )
}
