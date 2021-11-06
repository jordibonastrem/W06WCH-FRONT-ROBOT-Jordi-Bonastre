import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomRobot } from "../../factories/robotsFactory";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("when it recieves a robot", () => {
    test("Then it should render the name, img, and a caracteristics object containing velocity, resistance, datoOfcreation", () => {
      const robot = getRandomRobot();

      render(<Robot robot={robot}></Robot>);

      const nameHeading = screen.getByRole("heading", { name: robot.name });
      const velocityElement = screen.getByText(
        "VELOCITY:" + robot.caracteristics.velocity
      );
      const resistenceElement = screen.getByText(
        "RESISTENCE:" + robot.caracteristics.resistence
      );
      const dateOfCreation = screen.getByText(
        "DATE OF CREATION:" + robot.caracteristics.dateOfCreation
      );

      expect(nameHeading).toBeInTheDocument();
      expect(velocityElement).toBeInTheDocument();
      expect(resistenceElement).toBeInTheDocument();
      expect(dateOfCreation).toBeInTheDocument();
    });
  });
});
