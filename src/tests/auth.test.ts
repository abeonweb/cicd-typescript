import { describe, expect, test, vi } from "vitest";
import { IncomingHttpHeaders } from "http";
import * as auth from "src/api/auth"

vi.mock("src/api/auth")

const header: IncomingHttpHeaders = {authorization: "ApiKeys "}
const header2: IncomingHttpHeaders = {}
const header3: IncomingHttpHeaders = {authorization: "ApiKey SOMEKEYVALUE"}
describe("ApiKey",()=>{
    test("Missing key", ()=>{
        vi.mocked(auth.getAPIKey).mockReturnValue(null)
        expect(auth.getAPIKey(header)).toBeNull()
        vi.mocked(auth.getAPIKey).mockReturnValue(null)
        expect(auth.getAPIKey(header2)).toBeNull()
    })

    test("Return a string", ()=>{
        vi.mocked(auth.getAPIKey).mockReturnValue("SOMEKEYVALUE")
        expect(auth.getAPIKey(header3)).toEqual("ASOMEKEYVALUE")
    })
})