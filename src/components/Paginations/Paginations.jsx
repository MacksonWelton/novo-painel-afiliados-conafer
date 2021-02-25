import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginations = ({ count, funcRequistion }) => {
  const dispatch = useDispatch();

  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [interator, setInterator] = useState(0);

  if (count > 0 && interator < Math.ceil(count / 10) && interator <= 9) {
    setPages([...pages, interator + 1]);
    setInterator(interator + 1);
  }

  const handleChangePages = (page, advance = 10) => {
    let i = page + 1;
    const aux = [];

    while (i <= page + advance && i < Math.ceil(count / 10)) {
      aux.push(i);
      i++;
    }

    setPages(aux);
    setCurrentPage(page + 1);

    dispatch(funcRequistion(page + 1, 10));
  };

  const handleChangePage = (page = 1, limit = 10) => {
    if (page < 0 || page > pages[pages.length - 1]) {
      return;
    }

    const offset = limit * (page - 1);

    setCurrentPage(page);
    dispatch(funcRequistion(offset, limit));
  };

  return (
    <nav aria-label="...">
      <Pagination
        className="pagination justify-content-end mb-0"
        listClassName="justify-content-end mb-0"
      >
        <>
          <PaginationItem className={currentPage > 10 ? "" : "disabled"}>
            <PaginationLink
              href="#pablo"
              onClick={() => handleChangePages(pages[0] - 11)}
              // tabIndex="-1"
            >
              <i className="fas fa-angle-left" />
              <span className="sr-only">Previous</span>
            </PaginationLink>
          </PaginationItem>

          {pages.map((page, i) => (
            <div key={i}>
              <PaginationItem className={currentPage === page ? "active" : ""}>
                <PaginationLink
                  href="#pablo"
                  onClick={() => handleChangePage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            </div>
          ))}
          <PaginationItem
            className={
              pages[pages.length - 1] < Math.ceil(count / 10)
                ? ""
                : "disabled"
            }
          >
            <PaginationLink
              href="#pablo"
              onClick={() => handleChangePages(pages[pages.length - 1])}
            >
              <div>
                <i className="fas fa-angle-right" />
              </div>
              <span className="sr-only">Next</span>
            </PaginationLink>
          </PaginationItem>
        </>
      </Pagination>
    </nav>
  );
};

export default Paginations;
