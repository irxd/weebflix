import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Card from "../components/Card";

describe("Card component", () => {
  test("renders Card component with correct title, image, and score", () => {
    const mal_id = 1;
    const title = "Attack on Titan";
    const image_url = "https://cdn.myanimelist.net/images/anime/10/47347.webp";
    const encodedUrl = encodeURIComponent(image_url);
    const score = 9.0;

    const { getByText, getByAltText, getByTestId } = render(
      <Card mal_id={mal_id} title={title} image_url={image_url} score={score} />
    );

    const image = getByAltText(title) as HTMLImageElement;

    expect(image.src).toContain(encodedUrl)
    expect(getByText(title)).toBeInTheDocument();
    expect(getByAltText(title)).toBeInTheDocument();
    expect(getByTestId("score")).toBeInTheDocument();
  });

  test("renders Card component without score", () => {
    const mal_id = 1;
    const title = "Attack on Titan";
    const image_url = "https://cdn.myanimelist.net/images/anime/10/47347.webp";

    const { queryByTestId } = render(
      <Card mal_id={mal_id} title={title} image_url={image_url} />
    );

    expect(queryByTestId("score")).not.toBeInTheDocument();
  });
});

