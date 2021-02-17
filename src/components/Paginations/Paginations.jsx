import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginations = ({ count, funcRequistion }) => {

  const dispatch = useDispatch();

  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberItems, setNumberItems] = useState({
    offset: 0,
    limit: 10,
  })
  const [interator, setInterator] = useState(0);

  if (count > 0 && interator < Math.ceil(count / 10)) {
    setPages([...pages, interator + 1]);
    setInterator(interator + 1);
  }

  const handleChangePage = (page = 1, number = 10) => {

    if (page < 0 || page === pages.length) {
      return;
    }

    
    const  offset = number * page;
    const limit = offset + number;

    setCurrentPage(page);
    dispatch(funcRequistion(offset, limit));
    setNumberItems({...numberItems, offset: offset, limit: numberItems.limit + limit});
  }

  return (
    <nav aria-label="...">
      <Pagination
        className="pagination justify-content-end mb-0"
        listClassName="justify-content-end mb-0"
      >
        <>
          <PaginationItem className={currentPage === 0 ? "disabled" : ""}>
            <PaginationLink
              href="#pablo"
              onClick={() => handleChangePage(currentPage - 1)}
              // tabIndex="-1"
            >
              <i className="fas fa-angle-left" />
              <span className="sr-only">Previous</span>
            </PaginationLink>
          </PaginationItem>

          {pages.map((page, i) => (
            <div key={i}>
              <PaginationItem className={currentPage === i ? "active" : ""}>
                <PaginationLink
                  href="#pablo"
                  onClick={() => handleChangePage(i)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            </div>
          ))}
          <PaginationItem className={currentPage === pages.length - 1 ? "disabled" : ""}>
            <PaginationLink href="#pablo" onClick={() => handleChangePage(currentPage + 1)}>
              <div><i className="fas fa-angle-right" /></div>
              <span className="sr-only">Next</span>
            </PaginationLink>
          </PaginationItem>
        </>
      </Pagination>
    </nav>
  );
};

export default Paginations;
