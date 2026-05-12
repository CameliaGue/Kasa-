import { render, screen, fireEvent } from "@testing-library/react"
import Collapse from "../front-end/src/components/Collapse"

describe("Collapse component", () => {

    test("affiche le titre", () => {
        render(
            <Collapse title="Description">
                <p>Contenu</p>
            </Collapse>
        )

        expect(screen.getByText("Description")).toBeInTheDocument()
    })

    test("ouvre le collapse au clic", () => {
        render(
            <Collapse title="Description">
                <p>Contenu</p>
            </Collapse>
        )

        const title = screen.getByText("Description")

        fireEvent.click(title)

        expect(screen.getByText("Contenu")).toBeInTheDocument()
    })

})