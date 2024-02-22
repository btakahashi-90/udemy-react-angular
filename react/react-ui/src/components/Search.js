import { FormControl, InputGroup, DropdownButton, Dropdown, DropdownDivider } from "react-bootstrap"

const DropDown = () => {
    return(
        <>
            <DropdownButton title="Dropdown" variant="info">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <DropdownDivider />
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

const Search = ({query, onQueryChange}) => {
    return(
        <>
            <InputGroup className="mb-3">
                <FormControl placeholder="Search" onChange={(event) => {
                    onQueryChange(event.target.value)
                }} value={query} />
                <DropDown />
            </InputGroup>
        </>
    )
}

export default Search;