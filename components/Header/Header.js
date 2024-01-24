import styles from "./Header.module.scss";
import classNames from "classnames";
import Link from "next/link";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import DropdownItemLink from "../DropdownItemLink";

import { useRouter } from "next/router";

export default function Header() {
	const { basePath } = useRouter();
	return (
		<>
			<Navbar
				// bg="transparent"
				expand="lg"
				className={classNames(styles.headerBootstrap, "sticky-top")}
				collapseOnSelect={true}
			>
				<Container>
					<Navbar.Brand className="py-0" href={basePath + "/"}>
						IEEE VISAP 2023
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Link href="/" className={classNames("nav-link", "reset-link")}>
								Home
							</Link>
							<Link href="/contributions" className={classNames("nav-link", "reset-link")}>
								Contributions
							</Link>
							<Link href={"/visap-catalogue-2023-web.pdf"} className={classNames("nav-link", "reset-link")}>
								Catalogue
							</Link>
							<Link href="/programme" className={classNames("nav-link", "reset-link")}>
								Programme
							</Link>
							<Link href="/#supporters" className={classNames("nav-link", "reset-link")}>
								Supporters
							</Link>
							<Link href="/organizers" className={classNames("nav-link", "reset-link")}>
								Organizers
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
