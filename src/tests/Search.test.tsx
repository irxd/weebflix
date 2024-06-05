import '@testing-library/jest-dom';
import { fireEvent, render } from "@testing-library/react";
import Search from "../components/layout/Search";

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
    return {
      page: 1,
      get: () => jest.fn(),
    }
  },
}));

describe("Search component", () => {
  test("Search component renders correctly", () => {
    const { getByRole } = render(
      <Search />
    );

    const searchInput = getByRole("searchbox");

    expect(searchInput).toBeInTheDocument();
  });

  test("Search component updates search value correctly", () => {
    const { getByRole } = render(
      <Search />
    );

    const searchInput = getByRole("searchbox") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "death note" } });

    expect(searchInput.value).toBe("death note");
  });
});

