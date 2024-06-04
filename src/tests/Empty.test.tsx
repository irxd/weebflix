import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Empty from "../components/Empty";

describe("Empty component", () => {
  test("renders Empty component with correct message and subMessage", () => {
    const message = "Something wrong with the server :(";
    const subMessage = "Please check back later";

    const { getByText } = render(<Empty message={message} subMessage={subMessage} />);

    expect(getByText(message)).toBeInTheDocument();
    expect(getByText(subMessage)).toBeInTheDocument();
  });

  test("renders Empty component with action", () => {
    const message = "Something wrong with the server :(";
    const subMessage = "Please check back later";
    const actionText = "Retry";
    const action = <button>{actionText}</button>;

    const { getByText } = render(
      <Empty message={message} subMessage={subMessage} action={action} />
    );

    expect(getByText(message)).toBeInTheDocument();
    expect(getByText(subMessage)).toBeInTheDocument();
    expect(getByText(actionText)).toBeInTheDocument();
  });
});
