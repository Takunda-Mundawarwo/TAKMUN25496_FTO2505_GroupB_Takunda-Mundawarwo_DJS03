const paginationStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  height: "max",
};

const pageButtonStyles = {
  color: "var(--dark-blue)",
  backgroundColor: "var(--orange)",
  borderRadius: "0.25rem",
  margin: "0.25rem",
};

/**
 * Returns pagination controls for the current set of podcasts
 * @param {number} currentPage
 * @param {number} totalPages
 * @param {function} setCurrentPage
 * @returns {JSX.Element}
 */
export default function PaginationControls({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = -2; i < 3; i++) {
    if (0 < currentPage + i && currentPage + i < totalPages) {
      const page = currentPage + i;
      pageNumbers.push(page);
    }
  }

  return (
    <div style={paginationStyles}>
      {currentPage > 1 && (
        <button
          style={pageButtonStyles}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
      )}

      {pageNumbers.map((num) => (
        <button
          key={`page ${num}`}
          style={pageButtonStyles}
          onClick={() => setCurrentPage(num)}
        >
          {num}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          style={pageButtonStyles}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}
