import Recommendation from '@/pages/details/components/Recommendation';
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";

const mockData = [
  {
    entry: {
      mal_id: 4107,
      title: "Tengen Toppa Gurren Lagann",
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
    }
  },
  {
    entry: {
      mal_id: 2760,
      title: "Densetsu Kyojin Ideon",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/1993/14214.jpg",
          small_image_url: "https://cdn.myanimelist.net/images/anime/1993/1124124.jpg",
          large_image_url: "https://cdn.myanimelist.net/images/anime/1993/23425.jpg"
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/1993/7757.jpg",
          small_image_url: "https://cdn.myanimelist.net/images/anime/1993/342342.jpg",
          large_image_url: "https://cdn.myanimelist.net/images/anime/1993/235235.jpg"
        }
      },
    }
  }
];

describe("Recommendation component", () => {
  test("renders Recommendation component correctly", () => {
    const data = {
      data: mockData,
      error: ""
    }
    const encodedUrl = encodeURIComponent(mockData[0].entry.images.webp.image_url);
    const encodedUrl2 = encodeURIComponent(mockData[1].entry.images.webp.image_url);
    const error = null;
    const isLoading = false;


    const { getByText, getByAltText } = render(
      <Recommendation data={data} error={error} isLoading={isLoading} />
    );

    const image = getByAltText(mockData[0].entry.title) as HTMLImageElement;
    const image2 = getByAltText(mockData[1].entry.title) as HTMLImageElement;

    expect(image.src).toContain(encodedUrl)
    expect(image2.src).toContain(encodedUrl2)
    expect(getByText(mockData[0].entry.title)).toBeInTheDocument();
    expect(getByText(mockData[1].entry.title)).toBeInTheDocument();
  });

  test("renders nothing if recommendation is empty", () => {
    const data = {
      data: [],
      error: ""
    }
    const error = null;
    const isLoading = false;


    const { queryByText } = render(
      <Recommendation data={data} error={error} isLoading={isLoading} />
    );

    expect(queryByText("You Might Also Like")).not.toBeInTheDocument();
  });
});
