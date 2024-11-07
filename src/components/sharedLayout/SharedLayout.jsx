import {Outlet} from "react-router-dom";
import Container from "../container";
import Navigation from "../navigation";

const SharedLayout = () => {
	return (
		<Container>
			<Navigation/>
			<Outlet/>
		</Container>
	);
};

export default SharedLayout;