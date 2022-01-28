import { render, screen, fireEvent } from "@testing-library/react";
import LikeButton from "../LikeButton";

describe("LikeButton", () => {
  test("render LikeButton", () => {
    render(<LikeButton />);
    const buttonElement = screen.getByRole("button", {
      name: /0/i,
    });

    fireEvent.click(buttonElement);
    expect(buttonElement.innerHTML).toBe("1");
  });
});
