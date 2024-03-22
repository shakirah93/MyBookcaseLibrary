import PropTypes from "prop-types";
import "./Book.css";
function Book({ bookProps, addBook }) {
  const {
    volumeInfo: { title, authors, description },
    price,
  } = bookProps;

  return (
    <div>
      <h2>
        {title ? title : "No Title Here"}
        &nbsp;by {authors ? authors.join(", ") : "No Authors Listed"}
      </h2>
      <p>{description}</p>
      <span>{price && `£${price}`}</span>
      <button className="btn-add" onClick={() => addBook(price)}>
        Add +
      </button>
    </div>
  );
}

Book.defaultProps = {
  bookProps: {
    volumeInfo: {
      title: "No Title Here",
    },
  },
};

Book.propTypes = {
  bookProps: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
