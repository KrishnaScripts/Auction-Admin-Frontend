import * as routeConstant from '../common/routeConstants'
import { AllRoleResponse, SideBar } from './interface';
import Home from "../assets/sidebar-icons/home.svg";
import HomeActive from "../assets/sidebar-icons/home_active.svg";
import Admin from "../assets/sidebar-icons/admin_setting.svg";
import AdminActive from "../assets/sidebar-icons/admin_setting_active.svg";
import Auction from "../assets/sidebar-icons/auction.svg";
import AuctionActive from "../assets/sidebar-icons/auction_active.svg";
import Customer from "../assets/sidebar-icons/customer.svg";
import CustomerActive from "../assets/sidebar-icons/customer_active.svg";
import inventory from "../assets/sidebar-icons/inventory.svg";
import inventoryActive from "../assets/sidebar-icons/inventory.svg";
import sales from "../assets/sidebar-icons/sales.svg";
import salesActive from "../assets/sidebar-icons/sales_active.svg";
import invoice from "../assets/sidebar-icons/invoice.svg";
import invoiceActive from "../assets/sidebar-icons/invoice_active.svg";
import salesReps from "../assets/sidebar-icons/sales_reps.svg";
import salesRepsActive from "../assets/sidebar-icons/sales_reps_active.svg";
import seller from "../assets/sidebar-icons/sellers.svg";
import sellerActive from "../assets/sidebar-icons/sellers_active.svg";

export const sidebarData: SideBar[] = [
    {
        label: 'Home',
        slug: 'dashboard',
        icon: Home,
        iconActive: HomeActive,
        url: routeConstant.DASHBOARD,
        childData: []
    },
    {
        label: 'Auction',
        slug: routeConstant.AUCTIONSLUG,
        icon: Auction,
        iconActive: AuctionActive,
        url: routeConstant.AUCTION,
        childTitle: 'Auction',
        childData: []
    },
    {
        label: 'Customers',
        slug: routeConstant.CUSTOMERSLUG,
        icon: Customer,
        iconActive: CustomerActive,
        url: routeConstant.CUSTOMERS,
        childTitle: 'New Customers',
        childData: []
    },
    {
        label: 'Inventory',
        slug: '',
        icon: inventory,
        iconActive: inventoryActive,
        url: '#',
        childTitle: 'Inventory',
        childData: [
            { label: 'New Lot', url: '/' },
            { label: 'All Inventory', url: '/' }
        ]
    },
    {
        label: 'Sales',
        slug: '',
        icon: sales,
        iconActive: salesActive,
        url: routeConstant.SALESRECORDS,
        childTitle: 'Sales',
        childData: []
    },
    {
        label: 'Invoices',
        slug: '',
        icon: invoice,
        iconActive: invoiceActive,
        url: '#',
        childTitle: 'Invoices',
        childData: [
            { label: 'New Invoices', url: '/' },
            { label: 'All Invoices', url: '/' }
        ]
    },
    {
        label: 'Sellers',
        slug: routeConstant.SELLERSLUG,
        icon: seller,
        iconActive: sellerActive,
        url: routeConstant.SELLER,
        childTitle: 'Sellers',
        childData: []
    },
    {
        label: 'Sales Reps',
        slug: routeConstant.SALESREPSLUG,
        icon: salesReps,
        iconActive: salesRepsActive,
        url: routeConstant.SALESREPRESENTATIVE,
        childTitle: 'Sales Reps',
        childData: []
    },
    {
        label: 'Admin Settings',
        icon: Admin,
        iconActive: AdminActive,
        slug: routeConstant.ADMINCONFIGSLUG,
        url: '#',
        childTitle: 'Admin Settings',
        childData: [
            {
                label: 'User Management',
                subChild: [
                    { childLabel: 'Users', url: routeConstant.USER },
                    { childLabel: 'Roles', url: routeConstant.ROLE }
                ]
            },
            {
                label: 'Defaults',
                subChild: [
                    { childLabel: 'Company Info', url: routeConstant.COMPANYPROFILE },
                    { childLabel: 'Auction Defaults', url: routeConstant.AUCTIONDEFAULT },
                    { childLabel: 'E Invoice Settings', url: routeConstant.EINVOICESETTING },
                    { childLabel: 'Buyer Premium by Sales', url: routeConstant.BUYERSPREMIUMBYSALES },
                    { childLabel: 'BP Sales Tax', url: routeConstant.BPSALESTAX },
                    { childLabel: 'Default State', url: '#' },
                    { childLabel: 'Bid Increment', url: routeConstant.BIDINCREMENT },
                    { childLabel: 'Value Defaults', url: routeConstant.VALUEDEFAULT },
                    { childLabel: 'Image Configuration', url: routeConstant.IMAGECONFIG },
                ]
            },
            {
                label: 'Categories & Commisions',
                subChild: [
                    { childLabel: 'Categories', url: routeConstant.CATEGORIES },
                    { childLabel: 'Commisions', url: routeConstant.COMMISSION },
                    // { childLabel: 'Sales Rep Commision', url: '#' },
                ]
            },
            {
                label: 'Email Settings',
                subChild: [
                    { childLabel: 'Email Send Options', url: routeConstant.EMAILSET },
                    { childLabel: 'Automated Web Emails', url: routeConstant.AUTOEMAIL },
                    { childLabel: 'Email Header & Footer', url: routeConstant.EMAILHEADERFOOTER },
                    { childLabel: 'Seller Reports', url: routeConstant.SELLERREPORT },
                ]
            },
            {
                label: 'Tax & Currency',
                subChild: [
                    { childLabel: 'Tax Rates', url: '#' },
                    { childLabel: 'Avalara', url: '#' }
                ]
            },
            {
                label: 'Templates',
                subChild: [
                    { childLabel: 'Lot Templates', url: routeConstant.LOTTEMPLATES },
                ]
            }
            /* { label: 'User management', url: routeConstant.USER },
            { label: 'Roles', url: routeConstant.ROLE },
            { label: 'Company Info', url: routeConstant.COMPANYPROFILE },
            { label: 'Defaults', url: '/' },
            { label: 'Categories & Commision', url: routeConstant.CATEGORIES },
            { label: 'Email Send Options', url: routeConstant.EMAILSET },
            { label: 'Automate Web Emails', url: routeConstant.AUTOEMAIL },
            { label: 'Seller Reports', url: routeConstant.SELLERREPORT },
            { label: 'Tax & Currency', url: '#' },
            { label: 'Image Configuration', url: routeConstant.IMAGECONFIG },
            { label: 'E Invoice Settings', url: routeConstant.EINVOICESETTING }, */
        ]
    },
    /* {
        label: 'Reports',
        icon: 'assets/img/sidebar-icons/reports.svg',
        url: '#',
        childData: []
    } */
]

export const roleData: AllRoleResponse[] = [
    {
        roleName: 'Management',
        description: 'Allows access to all areas',
        lastModifiedBy: 'Adam Joe',
        dateMofied: '21/03/2023',
        status: 'Industrial/Commercial'
    },
    {
        roleName: 'Standard Users',
        description: 'Allows access to all areas except admin',
        lastModifiedBy: 'Adam Joe',
        dateMofied: '21/04/2023',
        status: 'Industrial/Commercial'
    },
    {
        roleName: 'Standard User-No Master Bidders',
        description: 'Restricted access to masters bidders',
        lastModifiedBy: 'John Joe',
        dateMofied: '21/05/2023',
        status: 'Industrial/Commercial'
    },
    {
        roleName: 'Standard User-No Delete',
        description: 'Allows all access to areas except admin; No delete',
        lastModifiedBy: 'Adam Joe',
        dateMofied: '21/06/2023',
        status: 'Industrial/Commercial'
    },
    {
        roleName: 'Agent',
        description: 'Access only to auctions created or allowed access..',
        lastModifiedBy: 'john Doe',
        dateMofied: '21/07/2023',
        status: 'Industrial/Commercial'
    },
    {
        roleName: 'Limited Edition',
        description: 'Standard access but some functions limited',
        lastModifiedBy: 'john Doe',
        dateMofied: '21/07/2023',
        status: 'Industrial/Commercial'
    },
    {
        roleName: 'Read Only',
        description: 'Read only data',
        lastModifiedBy: 'john Doe',
        dateMofied: '21/07/2023',
        status: 'Industrial/Commercial'
    },

]

export const activationStatus = [
    {
        label: 'All',
        value: -1
    },
    {
        label: 'Active',
        value: 1
    },
    {
        label: 'InActive',
        value: 0
    }
]

export type Action = {
    type: string
    payload: any
}

export const formOptions = {
    noDefaultSubmitButton: true,
    editForm: {
        textfield: [
            {
                key: 'display',
                components: [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    }]
            },
            {
                key: "validation",
                ignore: true,
            },
            {
                key: "api",
                ignore: true
            },
            {
                key: "data",
                ignore: true
            },
            {
                key: "conditional",
                ignore: true,
            },
            {
                key: "logic",
                ignore: true,
            },
            {
                key: "layout",
                ignore: true,
            },
        ],
        textarea: [
            {
                key: 'display',
                components:
                    [
                        {
                            type: 'checkbox',
                            key: 'validate.required',
                            label: 'Required',
                        }
                    ]
            },
            {
                key: 'data',
                ignore: true
            }
        ],
        number: [
            {
                key: 'display',
                components:
                    [
                        {
                            type: 'checkbox',
                            key: 'validate.required',
                            label: 'Required',
                        }
                    ]
            }, {
                key: 'data',
                ignore: true
            }
        ],
        password: [
            {
                key: 'display',
                components:
                    [
                        {
                            type: 'checkbox',
                            key: 'validate.required',
                            label: 'Required',
                        }
                    ]
            }, {
                key: 'data',
                ignore: true
            }
        ],
        checkbox: [
            {
                key: 'display',
                components:
                    [
                        {
                            type: 'checkbox',
                            key: 'validate.required',
                            label: 'Required',
                        },
                        {
                            key: 'labelWidth',
                            ignore: true,
                        },
                        {
                            key: 'labelMargin',
                            ignore: true,
                        },
                    ]
            }

        ],
        selectboxes: [{
            key: 'display',
            components:
                [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    },
                    {
                        key: 'inlineayout',
                        ignore: true,
                    },
                ]
        }],
        select: [{
            key: 'display',
            components:
                [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    },
                    {
                        key: 'uniqueOptions',
                        ignore: true,
                    },
                ]
        }],
        radio: [{
            key: 'display',
            components:
                [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    },
                    {
                        key: 'inlinelayout',
                        ignore: true,
                    },
                ]
        }],
        button: [{
            key: 'display',
            components:
                [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    },
                    {
                        key: 'leftIcon',
                        ignore: true,
                    },
                    {
                        key: 'saveOnEnter',
                        ignore: true,
                    },
                ]
        }],

        email: [{
            key: 'display',
            components:
                [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    },
                ]
        },
        {
            key: 'data',
            ignore: true
        }],

        address: [{
            key: 'display',
            components:
                [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    },
                ]
        },
        {
            key: 'data',
            ignore: true
        }],

        phoneNumber: [{
            key: 'display',
            components:
                [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    },
                ]
        },
        {
            key: 'data',
            ignore: true
        }],

        datetime: [{
            key: 'display',
            components:
                [
                    {
                        type: 'checkbox',
                        key: 'validate.required',
                        label: 'Required',
                    },
                ]
        },
        {
            key: 'data',
            ignore: true
        }],

        url: [
            {
                key: 'display',
                components:
                    [
                        {
                            type: 'checkbox',
                            key: 'validate.required',
                            label: 'Required',
                        },
                    ]
            },
            {
                key: 'data',
                ignore: true
            }
        ],
    }
}

export const auctionCheckList = [
    { label: "Show Starting Bid", key: "showStartingBid" },
    { label: "Display Image Names", key: "displayImageName" },
    { label: "Feature Auction", key: "featureAuction" },
    { label: "Use Geocoding", key: "useGeocoding" },
    { label: "Show Auction Map", key: "showAuctionMap" },
]

export const biddingTypes = [
    { label: "Online Absentee Bidding", key: "onlineAbsenteeBidding" },
    { label: "Dynamic Extension (sec)", key: "dynamicExtension" },
    { label: "Silent Online Bidding", key: "silentOnlineBidding" },
]

export const silentAuctions = [
    { label: "Dynamic Opening", key: "dynamicOpening" },
    { label: "Race Horse Option", key: "raceHorseOption" },
]

export const buyersPremium = [
    { label: "Buyers Premium Taxable", key: "buyersPremiumTaxable" },
    { label: "BP Taxed on Tax Exempt Lots", key: "bpTaxedonTaxExemptLots" },
]