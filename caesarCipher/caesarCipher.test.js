import caesarCipher from "./caesarCipher";

test("julius caesar will Cipher to MXOLXV FDHVDU", () => 
    expect(caesarCipher("julius caesar", 3)).toBe("MXOLXV FDHVDU")
)