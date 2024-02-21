import capitalize from "./capitalize"

test('mubarak becomes Mubarak ', () => {
    expect(capitalize("mubarak is a boy")).toBe("Mubarak is a boy")
})