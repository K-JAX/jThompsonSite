const SidebarFilter = (props) => {
	const { projectTypes, resetFilter, active, onClick } = props;

	return (
		<nav>
			<h2 className="h6 mb-4 mb-lg-1">
				<u>Project Type</u>
			</h2>
			<ul
				className="filter-list pl-0 list-unstyled d-flex flex-row mx-0 flex-lg-column flex-row flex-nowrap"
				style={{ width: "100%", overflowX: "auto" }}
			>
				<li key="all" id="all">
					<button
						id="all"
						className={`no-style-lg px-3 px-lg-0 mx-1 ${
							active === "all" && "active"
						}`}
						onClick={resetFilter}
					>
						All
					</button>
				</li>
				{projectTypes.map((type, index) => (
					<li key={type.node.id} id={type.node.id}>
						<button
							id={type.node.slug}
							className={`no-style-lg px-3 px-lg-0 mx-1 ${
								active === type.node.slug && "active"
							}`}
							onClick={() => {
								onClick(type.node.slug);
							}}
						>
							{type.node.name}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default SidebarFilter;
