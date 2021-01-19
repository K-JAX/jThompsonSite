import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// components
import { SINGLE_PRESS_QUERY } from "../../Functional/queries";

export const PressArticleSingle = (props) => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const { slug } = props.match.params;
	const { loading, error, data } = useQuery(SINGLE_PRESS_QUERY, {
		variables: { slug },
	});
	if (loading) return null;
	if (error) return `Error! ${error}`;

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	console.log(data.pressArticle.acf.pdfUpload.mediaItemUrl);
	return (
		<div className="container d-flex align-items-center flex-column">
			<div className="row">
				<div className="col-12">
					<Document
						className="col-12"
						file={
							"https://cors-anywhere.herokuapp.com/https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf"
						}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} />
					</Document>
				</div>
			</div>
			<div className="row">
				<p>
					Page {pageNumber} of {numPages}
				</p>
				<button onClick={() => setPageNumber(pageNumber - 1)}>
					Prev
				</button>
				<button onClick={() => setPageNumber(pageNumber + 1)}>
					Next
				</button>
			</div>
		</div>
	);
};
