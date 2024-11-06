import {PageTitle} from "./PageHeading.styled";
import PropTypes from "prop-types";

const PageHeading = ({text}) => {
	return <PageTitle>{text}</PageTitle>;
}

PageHeading.propTypes = {
	text: PropTypes.string.isRequired,
}

export default PageHeading;