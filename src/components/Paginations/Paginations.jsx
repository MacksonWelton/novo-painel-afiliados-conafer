import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";

const Paginations = ({ count, funcRequistion, lines }) => {
  const dispatch = useDispatch();

  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [interator, setInterator] = useState(0);

  useEffect(() => {
    dispatch(funcRequistion((currentPage - 1) * lines, lines));
  }, [dispatch, funcRequistion, currentPage,lines]);

  if (count > 0 && interator < Math.ceil(count / lines) && interator <= 9) {
    setPages([...pages, interator + 1]);
    setInterator(interator + 1);
  }

  const handleChangePages = (page, advance = 10) => {
    let i = page + 1;
    const aux = [];

    while (i <= page + advance && i < Math.ceil(count / lines)) {
      aux.push(i);
      i++;
    }

    setPages(aux);
    setCurrentPage(page + 1);

    dispatch(funcRequistion(page + 1, 10));
  };

  const handleChangePage = (page = 1, limit = lines) => {
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
          {currentPage > 10 && (
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={() => handleChangePages(pages[0] - 11)}
                title="Clique para retornar"
              >
                <i className="fas fa-angle-left" />
                <span className="sr-only">Previous</span>
              </PaginationLink>
            </PaginationItem>
          )}

          {pages.map((page, i) => (
            <div key={i}>
              <PaginationItem className={currentPage === page ? "active" : ""}>
                <PaginationLink
                  href="#pablo"
                  onClick={() => handleChangePage(page)}
                  title={`Clique para ir para página ${page}`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            </div>
          ))}
          {pages[pages.length - 1] < Math.ceil(count / lines) && (
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={() => handleChangePages(pages[pages.length - 1])}
                title="Clique para ver mais"
              >
                <div>
                  <i className="fas fa-angle-right" />
                </div>
                <span className="sr-only">Next</span>
              </PaginationLink>
            </PaginationItem>
          )}
        </>
      </Pagination>
    </nav>
  );
};

Paginations.propTypes = {
  count: PropTypes.number,
  funcRequistion: PropTypes.func.isRequired,
  lines: PropTypes.number.isRequired,
};

export default Paginations;
