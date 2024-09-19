import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SecurityInput from "./SecurityInput";
import useRequestHandler from "../../hooks/useRequestHandler";
import MockTradeProvider from "../../__mocks__/MockTradeProvider";

vi.mock("../../hooks/useRequestHandler");

describe("Security", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('should make an API call after typing "IBM" and waiting for debounce', async () => {
    const makeRequestMock = vi.fn().mockResolvedValue({});

    (useRequestHandler as jest.Mock).mockReturnValue({
      makeRequest: makeRequestMock,
      clearError: vi.fn(),
      requestError: null,
      isRequestLoading: false,
    });

    render(
      <MockTradeProvider>
        <SecurityInput />
      </MockTradeProvider>
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "IBM" } });

    vi.advanceTimersByTime(1000);

    expect(makeRequestMock).toHaveBeenCalledWith("IBM");
  });

  test("should not make an API call if input is empty", async () => {
    const makeRequestMock = vi.fn().mockResolvedValue({});

    (useRequestHandler as jest.Mock).mockReturnValue({
      makeRequest: makeRequestMock,
      clearError: vi.fn(),
      requestError: null,
      isRequestLoading: false,
    });

    render(
      <MockTradeProvider>
        <SecurityInput />
      </MockTradeProvider>
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "" } });

    vi.advanceTimersByTime(1000);

    expect(makeRequestMock).not.toHaveBeenCalled();
  });
});
