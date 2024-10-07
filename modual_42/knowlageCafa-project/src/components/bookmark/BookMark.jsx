import PropTypes from "prop-types";
const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-300 p-4 m-4 rounded-xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};


BookMark.propTypes ={
    bookmark: PropTypes.object.isRequired,
}
export default BookMark;