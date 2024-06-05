export interface Breadcrumb {
    label: string
    url: string
}

export interface ChildOptions {
    label: string
    url?: string
    subChild?: {
        childLabel: string
        url: string
    }[]
}
export interface SubChildOptions {
    label: string
    subChild: ChildOptions[]
}

export interface SideBar {
    label: string
    slug?: string,
    icon: any
    iconActive: any,
    url: string
    childTitle?: string
    childData: ChildOptions[]
}

export interface AllUserResponse {
    userId: number
    initials: string
    userName: string
    email: string
    password: string
    roles: string
    status: string
    auctionId: number
}

export interface AllRoleResponse {
    roleName: string
    description: string
    lastModifiedBy: string
    dateMofied: string
    status: string
}

export interface GetUserByIdResponse {
    userId: number
    companyId: number
    initials: number
    gender: number
    firstName: string
    middleName: string
    lastName: string
    emailAddress: string
    password: string
    confirmPassword: string
    roles: number
    status: number
    notes: string
    isActive: boolean
}
export interface SelectOption {
    label: string
    value: string
}
export interface FilterData {
    userName: string
    email: string
    role: SelectOption[] | []
}

export interface Action {
    type: string
    payload: any
}
