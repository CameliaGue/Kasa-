import { render, screen } from "@testing-library/react"
import Tags from "../front-end/src/components/Tags"

describe("Tags component", () => {

    test("affiche les tags", () => {
        render(<Tags tags={["React", "JavaScript"]} />)

        expect(screen.getByText("React")).toBeInTheDocument()
        expect(screen.getByText("JavaScript")).toBeInTheDocument()
    })

    test("n'affiche rien si tags est vide", () => {
        render(<Tags tags={[]} />)

        expect(screen.queryByText("React")).not.toBeInTheDocument()
    })

})