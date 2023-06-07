import React from "react";
import { render, screen } from "@testing-library/react";
import BoxResults from "../BoxResults";

describe("BoxResults component", () => {
  it("should render the box results correctly", () => {
    const testData = {
      events: [
        {
          event: {
            name: "Event 1",
          },
          performers: [
            {
              name: "Performer 1",
            },
          ],
          venue: {
            name: "Venue 1",
          },
        },
        // Add more test data as needed
      ],
    };

    render(<BoxResults data={testData} />);

    // Check if the box results container is rendered
    const boxResultsContainer = screen.getByTestId("box-results");
    expect(boxResultsContainer).toBeInTheDocument();

    // Check if the event, venue, and performer information is rendered
    expect(screen.getByTestId("event-result")).toBeInTheDocument();
    expect(screen.getByTestId("venue-result")).toBeInTheDocument();
    expect(screen.getByTestId("performer-result")).toBeInTheDocument();
  });

  it("should render fallback images when image URLs are invalid", () => {
    const testData = {
      events: [
        {
          performers: [
            {
              hero_image_url: "", // Invalid URL
              name: "Performer 1",
            },
          ],
          venue: {
            image_url: "", // Invalid URL
            name: "Venue 1",
          },
        },
        // Add more test data as needed
      ],
    };

    render(<BoxResults data={testData} />);

    // Check if the fallback images are rendered
    const eventImages = screen.getAllByAltText("event");
    expect(eventImages.length).toBe(1);
    const venueImages = screen.getAllByAltText("venue");
    expect(venueImages.length).toBe(1);
    const performerImages = screen.getAllByAltText("performer");
    expect(performerImages.length).toBe(1);
  });
});