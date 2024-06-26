import Overview from "@/pages/details/components/Overview";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";

const mockData = {
  mal_id: 1,
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/1993/113122.jpg",
      small_image_url: "https://cdn.myanimelist.net/images/anime/1993/113122s.jpg",
      large_image_url: "https://cdn.myanimelist.net/images/anime/1993/113122l.jpg"
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/1993/113122.jpg",
      small_image_url: "https://cdn.myanimelist.net/images/anime/1993/113122s.jpg",
      large_image_url: "https://cdn.myanimelist.net/images/anime/1993/113122l.jpg"
    }
  },
  year: 1995,
  title: "Evangelion",
  score: 10,
  synopsis: "In the year 2015, more than a decade ...",
};

describe("Overview component", () => {
  test("renders Overview component with correct image, title, score, synopsis & trailer", () => {
    const data = {
      data: {
        ...mockData,
        trailer: {
          embed_url: "https://www.youtube.com/embed/eI8aUqsCovo?enablejsapi=1&wmode=opaque&autoplay=1",
          url: "https://www.youtube.com/watch?v=eI8aUqsCovo",
          youtube_id: "eI8aUqsCovo",
        },
      },
      error: "",
    }
    const encodedUrl = encodeURIComponent(data.data.images.webp.large_image_url);
    const error = null;
    const isLoading = false;

    const { getByText, getByAltText, getByTitle } = render(
      <Overview data={data} error={error} isLoading={isLoading} />
    );

    const image = getByAltText(data.data.title) as HTMLImageElement;

    expect(image.src).toContain(encodedUrl)
    expect(getByText(data.data.title)).toBeInTheDocument();
    expect(getByText(data.data.synopsis)).toBeInTheDocument();
    expect(getByText(data.data.score)).toBeInTheDocument();
    expect(getByTitle("trailer")).toBeInTheDocument();
  });

  test("renders Overview component without trailer", () => {
    const error = null;
    const isLoading = false;

    const data = {
      data: mockData,
      error: "",
    }

    const { queryByTitle } = render(
      <Overview data={data} error={error} isLoading={isLoading} />
    );

    expect(queryByTitle("trailer")).not.toBeInTheDocument();
  });
});