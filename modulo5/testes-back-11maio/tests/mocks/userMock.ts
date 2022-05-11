import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "id_mockado",
    "eliel",
    "eliel@aaa.com",
    "123456",
    USER_ROLES.NORMAL
)
