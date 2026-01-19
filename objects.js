const Region = {
Name: "Earth"
}

const Reference = {
Name: "Source",
URL: "https://http.cat/status/404",
Image: "https://http.cat/images/404.jpg",
Region: [Object.create(Region)],
Price: "Free",
Type: "Live"
}

const Crew = {
FirstName: "First",
LastName: "Name",
Name: this.FirstName + " " + this.LastName,
Description: "Description",
Role: "Crew"
}

const Arc = {
Name: "Sideplot",
Description: "Not the main plot.",
Image: "https://http.cat/images/404.jpg"
}

const Series = {
	Name: "Show",
	Description: "Description",
	Network: [Object.create(Reference)],
	Production: [Object.create(Reference)],
	DigitalMedia: [Object.create(Reference)],
	Image: ["https://http.cat/images/404.jpg"],
	Arc: [Object.create(Arc)],
	Color: "Blue",
	SeriesID: 0
}

const Film = Object.create(Series);

const Episode = {
	Name: "Episode",
	Description: "Description",
	Network: [Object.create(Reference)],
	Production: [Object.create(Reference)],
	DigitalMedia: [Object.create(Reference)],
	Image: ["https://http.cat/images/404.jpg"],
	Arc: [Object.create(Arc)],
	SeriesID: 0,
	ReleaseDate: new Date(2001, 8, 11, 8, 46),
	Color: "Blue"
}
