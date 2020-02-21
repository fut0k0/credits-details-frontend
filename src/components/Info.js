import React from "react"

const Info = () => (
	<div className="Info">
		<h3>Intent</h3>
		<p>The intent of this application is to view an album collection by custom combinations of credits and details. Drill into a collection by artist, producer, mixer, etc. Look for commonalities and quickly find and group albums that meet certain criteria. View large collections in unique ways.</p>
		<p>For example, how many <em>David Bowie</em> albums do I have? Which <em>Grunge</em> records from <em>1991</em> do I have? Which <em>Rock</em> albums were produced by <em>Tony Visconti</em>? Of those, which ones did <em>Tony Visconti</em> also mix? Are any of those <em>Morrissey</em> albums?</p>
		<h3>Use</h3>
		<p>To begin, build an album collection. Go to the Manage page. In the Add Album section, use pre-existing data to construct an album (note: a selection must be made for each category; use <em>N/A</em> if a category does not apply). Once all the details are set, submit the album. It will appear on the bottom of the page.</p>
		<p>Use the Add Attributes section if the pre-existing data does not include the information you want.</p>
		<p>Delete albums from a collection from the album display cards on the bottom of the Manage page.</p>
		<p>After building an album collection, go to the Drill page. Use the selection filters to begin drilling into the collection. When a filter is set, all other filters update accordingly. Clear filters individually or all at once. Results update with every action.</p>
	</div>
)

export default Info
