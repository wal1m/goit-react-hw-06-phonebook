import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name </p>
      <input type="text" onChange={onChange} value={value} />
    </>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
