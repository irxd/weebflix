import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Pagination from "../components/Pagination";

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
      replace: () => jest.fn(),
    };
  },
  usePathname() {
    return '/';
  },
  useSearchParams() {
    return { page: 1 }
  },
}));

describe("Pagination component", () => {
  test("renders Pagination component with correct props", () => {
    const totalPage = 10;
    const currentPage = 5;

    const { getByText } = render(
      <Pagination totalPage={totalPage} currentPage={currentPage} />
    );

    expect(getByText(totalPage)).toBeInTheDocument();
    expect(getByText(currentPage)).toBeInTheDocument();
  });

  test("renders active page button with correct styling", () => {
    const totalPage = 10;
    const currentPage = 5;

    const { getByText } = render(
      <Pagination totalPage={totalPage} currentPage={currentPage} />
    );

    const activePageButton = getByText(currentPage.toString());

    expect(activePageButton).toHaveClass("Mui-selected");
  });

  test("renders inactive page buttons with correct styling", () => {
    const totalPage = 10;
    const currentPage = 5;

    const { getAllByRole } = render(
      <Pagination totalPage={totalPage} currentPage={currentPage} />
    );

    const pageButtons = getAllByRole("button");

    pageButtons.forEach((button) => {
      if (button.textContent !== currentPage.toString()) {
        expect(button).not.toHaveClass("Mui-selected");
      }
    });
  });
});
